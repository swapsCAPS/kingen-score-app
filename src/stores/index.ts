import { defineStore } from 'pinia'

const defaultGames = () => [
  { name: 'harten', points: -30, aantal: 13, rows: 2 },
  { name: 'slagen', points: -50, aantal: 13, rows: 2 },
  { name: 'laatste 2', points: -140, aantal: 2, rows: 2 },
  { name: 'vrouwen', points: -100, aantal: 4, rows: 2 },
  { name: 'mannen', points: -60, aantal: 8, rows: 2 },
  { name: 'harten heer', points: -400, aantal: 1, rows: 2 },
  { name: 'troef', points: 50, aantal: 13, rows: 8 },
]

export const useStore = defineStore('state', {
  state: () => ({
    games: defaultGames(),
  }),
  actions: {
    setGame() {},
  },
})
