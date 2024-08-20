<script setup lang="ts">
	import GameRow from '@/components/GameRow.vue'
	import GameCell from '@/components/GameCell.vue'
	import HeaderColumnCell from '@/components/HeaderColumnCell.vue'
	import { useStore } from "@/stores"

	const stateStore = useStore()
</script>

<template>
	<main>
		<div class="player-row">
			<header-column-cell :gameName="'Spelers'" />
			<div v-for="i in 4"> <input class="player-name" type="text">
			</div>
		</div>
		<div v-for="( game, index) in stateStore.games.negatief" :key="game.name">
			<game-row :game="game" @cardsPlayed="(player, cards) => stateStore.setCardsLeft('negatief', index, player, cards)"
				@gameChosen="(player, checked) => stateStore.setGameChosen('negatief', index, player, checked)" />
		</div>
		<div class="total-row">
			<header-column-cell :gameName="'Negatief:'" /> <!-- :style="{ visibility: 'hidden' }" -->
			<div v-for="(value, player) in stateStore.totalsPerSection.negatief" :key="player">
				<game-cell :result="value" :mode="'total'" />
			</div>
		</div>
		<div v-for="( game, index) in stateStore.games.positief" :key="game.name">
			<game-row :game="game" @cardsPlayed="(player, cards) => stateStore.setCardsLeft('positief', index, player, cards)"
				@gameChosen="(player, checked) => stateStore.setGameChosen('positief', index, player, checked)" />
		</div>
		<div class="total-row">
			<header-column-cell :gameName="'Positief:'" /> <!-- :style="{ visibility: 'hidden' }" -->
			<div v-for="(value, player) in stateStore.totalsPerSection.positief" :key="player">
				<game-cell :result="value" :mode="'total'" />
			</div>
		</div>
		<div class="total-row">
			<header-column-cell :gameName="'Totaal:'" /> <!-- :style="{ visibility: 'hidden' }" -->
			<div v-for="(value, player) in stateStore.totalTotals" :key="player">
				<game-cell :result="value" :mode="'total'" />
			</div>
		</div>
	</main>
</template>

<style scoped>
	.total-row {
		display: flex;
		align-items: center;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.player-row {
		display: flex;
		align-items: center;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.player-name {
		display: flex;
		align-items: center;
		border: 1px solid gray;
		width: 7.6rem;
		height: 2.4rem;
		font-size: 1.5rem;
		text-align: center;
	}
</style>