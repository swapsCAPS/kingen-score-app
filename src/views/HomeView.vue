<script setup lang="ts">
import GameRow from '@/components/GameRow.vue'
import GameCell from '@/components/GameCell.vue'
import HeaderColumnCell from '@/components/HeaderColumnCell.vue'
import { useStore } from "@/stores"

const stateStore = useStore()
</script>

<template>
	<main>
		<div class="header">
			<h1>Kingen</h1>
		</div>
		<div>
			<h2>Negatief</h2>
		</div>
		<div v-for="( game, index) in stateStore.games.negatief" :key="game.name">
			<game-row :game="game" @cardsPlayed="(player, cards) => stateStore.setCardsLeft('negatief', index, player, cards)"
				@gameChosen="(player, checked) => stateStore.setGameChosen('negatief', index, player, checked)" />
		</div>
		<div class="total-row">
			<header-column-cell :style="{ visibility: 'hidden' }" />
			<div v-for="(value, player) in stateStore.totalsPerSection.negatief" :key="player">
				<game-cell :result="value" :mode="'total'" />
			</div>
		</div>
		<div>
			<h2>Positief</h2>
		</div>
		<div v-for="( game, index) in stateStore.games.positief" :key="game.name">
			<game-row :game="game" @cardsPlayed="(player, cards) => stateStore.setCardsLeft('positief', index, player, cards)"
				@gameChosen="(player, checked) => stateStore.setGameChosen('positief', index, player, checked)" />
		</div>
		<div class="total-row">
			<header-column-cell :style="{ visibility: 'hidden' }" />
			<div v-for="(value, player) in stateStore.totalsPerSection.positief" :key="player">
				<game-cell :result="value" :mode="'total'" />
			</div>
		</div>
		<div class="footer">
			<h2>Totalen</h2>
		</div>
		<div class="total-row">
			<header-column-cell :style="{ visibility: 'hidden' }" />
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
</style>
