<script lang="ts">
import { useStore } from '@/stores';
import { mapActions } from 'pinia';

export default {
	props: {
		multiplier: {
			type: Number,
			default() {
				return 1
			},
		},
		choices: {
			type: Number,
			default() {
				return 1
			}
		},
		choice: {
			type: Number,
			default() {
				return 0
			}
		}
	},
	data() {
		return {
			input: 0,
		}
	},
	computed: {
		result() {
			return this.multiplier * this.choice
		},
	},
	methods: {
		cardsPlayed(event) {
			this.$emit('cardsPlayed', event.target.value)
		}
	}
}
</script>

<template>
	<div class="cell">
		<input class="checkbox" type="checkbox" name="" id="" />
		<select class="number" @change="cardsPlayed">
			<option v-for="n in choices + 1" :key="n">{{ n - 1 }}</option>
		</select>
		<span class="result">{{ result }}</span>
	</div>
</template>

<style scoped>
.cell {
	display: flex;
	align-items: center;
	border: 1px solid gray;
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
	width: 2rem;
	text-align: center;
	flex: 1;
}
</style>
