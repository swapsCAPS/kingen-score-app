<script setup lang="ts">
import { type Game } from '@/stores';
import GameCell from './GameCell.vue';
import HeaderColumnCell from './HeaderColumnCell.vue';

const components = { GameCell, HeaderColumnCell }

const props = defineProps<{
	game: Game
}>()

</script>

<script lang="ts">
export default {
}
</script>

<template>
	<div class="game-row">
		<header-column-cell :gameName="game.name" />
		<game-cell :multiplier="game.points" :choices="game.players.player1.cardsLeft" :choice="game.players.player1.choice"
			@cardsPlayed="(n) => $emit('cardsPlayed', 'player1', n)" />
		<game-cell :multiplier="game.points" :choices="game.players.player2.cardsLeft" :choice="game.players.player2.choice"
			@cardsPlayed="(n) => $emit('cardsPlayed', 'player2', n)" />
		<game-cell :multiplier="game.points" :choices="game.players.player3.cardsLeft" :choice="game.players.player3.choice"
			@cardsPlayed="(n) => $emit('cardsPlayed', 'player3', n)" />
		<game-cell :multiplier="game.points" :choices="game.players.player4.cardsLeft" :choice="game.players.player4.choice"
			@cardsPlayed="(n) => $emit('cardsPlayed', 'player4', n)" />
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
