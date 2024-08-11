<script lang="ts">
import GameCell from '@/components/GameCell.vue'
import HeaderColumnCell from '@/components/HeaderColumnCell.vue'
import { defineComponent } from 'vue'

const games = () => [
  { unicode: '', name: 'harten', points: -30 },
  { unicode: '', name: 'slagen', points: -50 },
  { unicode: '', name: 'laatste 2', points: -140 },
  { unicode: '', name: 'vrouwen', points: -100 },
  { unicode: '', name: 'mannen', points: -60 },
  { unicode: '', name: 'harten heer', points: -400 },
  { unicode: '', name: 'troef 1e', points: 50 },
  { unicode: '', name: 'troef 2e', points: 50 },
  { unicode: '', name: 'troef 3e', points: 50 },
  { unicode: '', name: 'troef 4e', points: 50 },
  { unicode: '', name: 'troef 5e', points: 50 },
  { unicode: '', name: 'troef 6e', points: 50 },
  { unicode: '', name: 'troef 7e', points: 50 },
  { unicode: '', name: 'troef 8e', points: 50 },
]

export default defineComponent({
  components: {
    GameCell,
    HeaderColumnCell,
  },

  data() {
    return {
      games: games(),
    }
  },
})
</script>

<template>
  <main>
    <div v-for="game in games" :key="game.name">
      <div class="game-row">
        <header-column-cell :gameName="game.name" />
        <game-cell />
        <game-cell />
        <game-cell />
        <game-cell />
      </div>
    </div>
  </main>
</template>

<style scoped>
.game-row {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
