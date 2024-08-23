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
			<header-column-cell :gameName="'👑 Spelers 👑'" />
			<div v-for="i in 4" :key="i"> <input class="player-name" type="text" :id="'Speler' + i"  :placeholder="'Speler ' + i"></div>
		</div>

		<div v-for="( game, index) in stateStore.games.negatief" :key="game.name">
				<game-row :game="game" @cardsPlayed="(player, cards) => stateStore.setCardsLeft('negatief', index, player, cards)"
					@gameChosen="(player, checked) => stateStore.setGameChosen('negatief', index, player, checked)" />
		</div>
		<div class="total-row">
			<header-column-cell :gameName="'negatief ➖'" :isTotal="true"/> <!-- :style="{ visibility: 'hidden' }" -->
			<div v-for="(value, player) in stateStore.totalsPerSection.negatief" :key="player">
				<game-cell :result="value" :mode="'total'" />
			</div>
		</div>
		<div v-for="( game, index) in stateStore.games.positief" :key="game.name">
			<game-row :game="game" @cardsPlayed="(player, cards) => stateStore.setCardsLeft('positief', index, player, cards)"
				@gameChosen="(player, checked) => stateStore.setGameChosen('positief', index, player, checked)" />
		</div>
		<div class="total-row">
			<header-column-cell :gameName="'positief ➕'" :isTotal="true"/> <!-- :style="{ visibility: 'hidden' }" -->
			<div v-for="(value, player) in stateStore.totalsPerSection.positief" :key="player">
				<game-cell :result="value" :mode="'total'" />
			</div>
		</div>
		<div class="total-row">
			<header-column-cell :gameName="'totaal 🟰'" :isTotal="true"/>
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
		margin-top: 0rem;
		margin-bottom: 0.5rem;
	}

	.is-correct {
		background-color: lightgreen;
	}

	.player-row {
		display: flex;
		align-items: center;
		margin-top: 0rem;
		margin-bottom: 0rem;
	}

	.player-name {
		display: flex;
		align-items: center;
		border: 1px solid blue;
		width: 8.29rem;
		height: 2.3rem;
		font-size: 1.3rem;
		text-align: center;
		background-color: #eee;
	}

</style>