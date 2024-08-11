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
  min-width: 5rem;
}

.cell h4 {
  text-transform: capitalize;
  margin: 0 0 0 0;
}
</style>
