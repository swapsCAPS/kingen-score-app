import { defineStore } from 'pinia'
import { range } from 'lodash'

/**
 * Returns the initial default object for all games to be played
 *
 * @returns
 */
const defaultGames = () => ({
  negatief: [
    ...range(1, 3).map((r) => ({ name: `harten (${r})`, points: -30, aantal: 13, gespeeld: 0 })),
    ...range(1, 3).map((r) => ({ name: `slagen (${r})`, points: -50, aantal: 13, gespeeld: 0 })),
    ...range(1, 3).map((r) => ({ name: `laatste 2 (${r})`, points: -140, aantal: 2, gespeeld: 0 })),
    ...range(1, 3).map((r) => ({ name: `vrouwen (${r})`, points: -100, aantal: 4, gespeeld: 0 })),
    ...range(1, 3).map((r) => ({ name: `mannen (${r})`, points: -60, aantal: 8, gespeeld: 0 })),
    ...range(1, 3).map((r) => ({
      name: `harten heer (${r})`,
      points: -400,
      aantal: 1,
      gespeeld: 0,
    })),
  ],
  positief: [
    ...range(1, 9).map((r) => ({ name: `troef (${r})`, points: 50, aantal: 13, gespeeld: 0 })),
  ],
})

export const useStore = defineStore('state', {
  state: () => ({
    games: defaultGames(),
  }),
  actions: {
    setGame() {},
  },
})
