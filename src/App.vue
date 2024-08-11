<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Delius&display=swap');
@import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,300i,400&display=swap');

body {
  cursor: default !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Disable number spinners */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield !important;
}
</style>
