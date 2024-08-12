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
      <option v-for="n in aantal+1" >{{ n-1 }}</option>
    </select>
    <!-- <input class="number" type="number" name="" id="" v-model="input2" /> -->
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
