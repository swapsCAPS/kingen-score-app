<script lang="ts">
import GameCell from '@/components/GameCell.vue'
import HeaderColumnCell from '@/components/HeaderColumnCell.vue'
import { defineComponent } from 'vue'

const games = () => [
  { unicode: '', name: 'harten', points: -30, aantal: 13, rows: 2 },
  { unicode: '', name: 'slagen', points: -50, aantal: 13, rows: 2 },
  { unicode: '', name: 'laatste 2', points: -140, aantal: 2, rows: 2 },
  { unicode: '', name: 'vrouwen', points: -100, aantal: 4, rows: 2 },
  { unicode: '', name: 'mannen', points: -60, aantal: 8, rows: 2 },
  { unicode: '', name: 'harten heer', points: -400, aantal: 1, rows: 2 },
  { unicode: '', name: 'troef', points: 50, aantal: 13, rows: 8 },
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
      <div v-for="row in game.rows">
        <div class="game-row">
        <header-column-cell :gameName="game.name" />:
        <game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal"/>
        <game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal"/>
        <game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal"/>
        <game-cell :multiplier="game.points" :rows="game.rows" :aantal="game.aantal"/>
      </div>
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
