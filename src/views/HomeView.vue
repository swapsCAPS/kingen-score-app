<script lang="ts">
import GameCell from '@/components/GameCell.vue'
import HeaderColumnCell from '@/components/HeaderColumnCell.vue'
import { defineComponent } from 'vue'

import { mapStores } from 'pinia'

import { useStore } from "@/stores"

export default defineComponent({
	components: {
		GameCell,
		HeaderColumnCell,
	},

	computed: {
		...mapStores(useStore),
	},

})
</script>

<template>
	<main>
		<div class="header">
			<h1>Kingen</h1>
		</div>
		<div>
			<h2>Negatief</h2>
		</div>
		<div v-for="game in stateStore.games.negatief" :key="game.name">
			<div class="game-row">
				<header-column-cell :gameName="game.name" />
				<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
				<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
				<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
				<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
			</div>
		</div>
		<div>
			<h2>Positief</h2>
		</div>
		<div v-for="game in stateStore.games.positief" :key="game.name">
			<div class="game-row">
				<header-column-cell :gameName="game.name" />
				<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
				<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
				<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
				<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
			</div>
		</div>
		<div class="footer">
			<h2>Totalen</h2>
		</div>
	</main>
</template>

<style scoped>
.game-row {
	display: flex;
	align-items: center;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}
</style>
