<script lang="ts">
export default {
  props: {
    multiplier: {
      type: Number,
      default() {
        return 1
      },
    },
    rows: {
      type: Number,
      default() {
        return 1
      }
    },
    aantal:{
      type: Number,
      default() {
        return 1
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
      return this.multiplier * parseInt(this.input)
    },
  },
}
</script>

<template>
  <div class="cell">
    <input class="checkbox" type="checkbox" name="" id="" />
    <select class= "number" v-model="input">
      <option v-for="(n, i) in aantal+1" :key="i">{{ n-1 }}</option>
    </select>
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
  width: 3rem;
}

.result {
  width: 2rem;
  text-align: center;
}
</style>
