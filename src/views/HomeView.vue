<script lang="ts">
import GameCell from '@/components/GameCell.vue'
import HeaderColumnCell from '@/components/HeaderColumnCell.vue'
import { defineComponent } from 'vue'

import { mapActions, mapStores } from 'pinia'

import { useStore } from "@/stores"
import GameRow from '@/components/GameRow.vue'

export default defineComponent({
	components: {
		GameRow,
	},

	computed: {
		...mapStores(useStore),
	},

	methods: {
		...mapActions(useStore, ["setCardsLeft"])
	}
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
		<div v-for="( game, index) in stateStore.games.negatief" :key="game.name">
			<game-row :game="game" @cardsPlayed="(player, cards) => setCardsLeft('negatief', index, player, cards)" />
		</div>
		<div>
			<h2>Positief</h2>
		</div>
		<div v-for="game in stateStore.games.positief" :key="game.name">
			<game-row :game="game" />
		</div>
		<div class="footer">
			<h2>Totalen</h2>
		</div>
	</main>
</template>

<style scoped></style>
