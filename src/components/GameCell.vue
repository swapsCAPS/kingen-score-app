<script lang="ts">
export default {
  props: {
    multiplier: {
      type: Number,
      default() {
        return 1
      },
    },
  },
  data() {
    return {
      input: 0,
    }
  },
  computed: {
    result() {
      return this.multiplier * this.input
    },
  },
}
</script>

<template>
  <div class="cell">
    <input class="checkbox" type="checkbox" name="" id="" />
    <input class="number" type="number" name="" id="" v-model="input" />
    <span class="result">{{ result }}</span>
  </div>
</template>

<style scoped>
.cell {
  display: flex;
  align-items: center;
}

.checkbox {
  height: 2rem;
  width: 2rem;
}

.number {
  height: 2rem;
  width: 2rem;
}

.result {
  width: 2rem;
  text-align: center;
}
</style>
