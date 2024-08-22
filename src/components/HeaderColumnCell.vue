<script setup lang="ts">
defineProps({
	gameName: {
		type: String,
		default: () => 'Unknown',
	},
	isCorrect: {
		type: Boolean,
		default: () => undefined
	},
	isChosen: {
		type: Boolean,
		default: () => undefined
	},
	isTotal: {
		type: Boolean,
		default: () => false
	}
})
</script>

<template>
	<div class="cell" :class="{played: isCorrect && isChosen}">
		<h4 :class="{isTotal: isTotal==true}">
			<span>{{ gameName }}</span>
			<span v-show="isChosen">{{ isCorrect ? "✔" : "✖" }}</span>
		</h4>
	</div>
</template>

<style scoped>
.cell {
	display: flex;
	align-items: center;
	border: 1px solid blue;
	background-color: lightblue;
	height: 2.4rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
}

.cell h4 {
	text-transform: capitalize;
	min-width: 8rem;
	margin: 0;
	display: flex;
	justify-content: space-between;
}

.isTotal {
	justify-content: flex-end !important;
}

.played {
	background-color: lightgreen;
}

</style>
