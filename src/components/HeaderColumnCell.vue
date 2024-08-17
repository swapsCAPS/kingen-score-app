<script lang="ts">
export default {
	props: {
		gameName: {
			type: String,
			default: () => 'Unknown',
		},
	},
}
</script>

<template>
	<div class="cell">
		<h4>{{ gameName }}</h4>
	</div>
</template>

<style scoped>
.cell {
	min-width: 8rem;
	border: 1px solid gray;
	padding: 9px;
}

.cell h4 {
	text-transform: capitalize;
	margin: 0;

}
</style>
