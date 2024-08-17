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
		<div v-for="game in stateStore.games" :key="game.name">
			<div v-for="(row, i) in game.rows" :key="game.name + i">
				<div class="game-row">
					<header-column-cell :gameName="game.name" />:
					<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
					<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
					<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
					<game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal" />
				</div>
			</div>
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
