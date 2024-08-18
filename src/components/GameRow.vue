<script setup lang="ts">
import { type Game } from '@/stores';
import GameCell from './GameCell.vue';
import HeaderColumnCell from './HeaderColumnCell.vue';
import { computed } from "vue"

const props = defineProps<{
	game: Game
}>()

const emit = defineEmits<{
	(e: "cardsPlayed", player: string, cards: number): void
	(e: "gameChosen", player: string, checked: boolean): void
}>()

const isCorrect = computed(() => (
	props.game.aantal === Object.values(props.game.players)
		.map(player => player.cardsPlayed)
		.reduce((acc, value) => acc + value, 0)
))

const isChosen = computed(() => (
	Object.values(props.game.players).some(p => p.hasChosen)
))

</script>

<template>
	<div class="game-row">
		<header-column-cell :gameName="game.name" :is-chosen="isChosen" :is-correct="isCorrect" />
		<game-cell :result="game.points * game.players.player1.cardsPlayed" :cards-left="game.players.player1.cardsLeft"
			:cardsPlayed="game.players.player1.cardsPlayed" @cardsPlayed="(n) => $emit('cardsPlayed', 'player1', n)"
			@game-chosen="(b) => $emit('gameChosen', 'player1', b)" />
		<game-cell :result="game.points * game.players.player2.cardsPlayed" :cards-left="game.players.player2.cardsLeft"
			:cardsPlayed="game.players.player2.cardsPlayed" @cardsPlayed="(n) => $emit('cardsPlayed', 'player2', n)"
			@game-chosen="(b) => $emit('gameChosen', 'player2', b)" />
		<game-cell :result="game.points * game.players.player3.cardsPlayed" :cards-left="game.players.player3.cardsLeft"
			:cardsPlayed="game.players.player3.cardsPlayed" @cardsPlayed="(n) => $emit('cardsPlayed', 'player3', n)"
			@game-chosen="(b) => $emit('gameChosen', 'player3', b)" />
		<game-cell :result="game.points * game.players.player4.cardsPlayed" :cards-left="game.players.player4.cardsLeft"
			:cardsPlayed="game.players.player4.cardsPlayed" @cardsPlayed="(n) => $emit('cardsPlayed', 'player4', n)"
			@game-chosen="(b) => $emit('gameChosen', 'player4', b)" />
	</div>
</template>

<style scoped>
.game-row {
	display: flex;
	align-items: center;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
</style>
