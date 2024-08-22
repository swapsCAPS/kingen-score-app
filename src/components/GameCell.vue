<script setup lang="ts">

import { computed } from "vue"

const props = defineProps({
	cardsLeft: {
		type: Number,
		default() {
			return 1
		}
	},
	cardsPlayed: {
		type: Number,
		default() {
			return 0
		}
	},
	result: {
		type: Number,
		default() {
			return 0
		}
	},
	/**
	 * Terrible hack
	 */
	mode: {
		type: String,
		default() {
			return "input"
		}
	}
})

const emit = defineEmits<{
	(e: 'gameChosen', value: boolean): void,
	(e: 'cardsPlayed', cards: number): void
}>()

function onCardsPlayed(event: Event) {
	emit("cardsPlayed", parseInt(event.target?.value))
}

function onGameChosen(event: Event) {
	emit("gameChosen", event.target?.checked)
}

const styleObject = computed(() => props.mode === "input" ? { visibility: "visible" } : { visibility: "hidden" })

</script>

<template>
	<div class="cell">
		<input :style="styleObject" class="checkbox" @change="onGameChosen" type="checkbox" name="" id="" />
		<select :style="styleObject" class="number" @change="onCardsPlayed">
			<option v-for="n in cardsLeft + 1" :key="n">{{ n - 1 }}</option>
		</select>
		<span class="result">{{ result }}</span>
	</div>
</template>

<style scoped>
.cell {
	display: flex;
	align-items: center;
	border: 1px solid blue;
	height: 2.4rem;
	background-color: lightblue;
}

.checkbox {
	height: 2rem;
	width: 2rem;
	flex: 1;
}

.number {
	height: 2rem;
	width: 3rem;
	flex: 1;
}

.result {
	width: 2.7rem;
	text-align: right;
	flex: 1;
	margin-left: 0.2rem;
	margin-right: 0.2rem;
}
</style>
