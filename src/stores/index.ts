import { defineStore } from 'pinia'
import { range, without } from 'lodash'

export type Game = {
  name: string
  points: number
  aantal: number
  players: {
    player1: { hasPlayed: boolean; cardsLeft: number; choice: number }
    player2: { hasPlayed: boolean; cardsLeft: number; choice: number }
    player3: { hasPlayed: boolean; cardsLeft: number; choice: number }
    player4: { hasPlayed: boolean; cardsLeft: number; choice: number }
  }
}

/**
 * Returns the initial default object for all games to be played
 *
 * @returns
 */
const defaultGames = () => ({
  negatief: [
    ...range(1, 3).map((r) => ({
      name: `harten (${r})`,
      points: -30,
      aantal: 13,
      players: {
        player1: { hasPlayed: false, cardsLeft: 13, choice: 0 },
        player2: { hasPlayed: false, cardsLeft: 13, choice: 0 },
        player3: { hasPlayed: false, cardsLeft: 13, choice: 0 },
        player4: { hasPlayed: false, cardsLeft: 13, choice: 0 },
      },
    })),
    ...range(1, 3).map((r) => ({
      name: `slagen (${r})`,
      points: -50,
      aantal: 13,
      players: {
        player1: { hasPlayed: false, cardsLeft: 13, choice: 0 },
        player2: { hasPlayed: false, cardsLeft: 13, choice: 0 },
        player3: { hasPlayed: false, cardsLeft: 13, choice: 0 },
        player4: { hasPlayed: false, cardsLeft: 13, choice: 0 },
      },
    })),
    ...range(1, 3).map((r) => ({
      name: `laatste 2 (${r})`,
      points: -140,
      aantal: 2,
      players: {
        player1: { hasPlayed: false, cardsLeft: 2, choice: 0 },
        player2: { hasPlayed: false, cardsLeft: 2, choice: 0 },
        player3: { hasPlayed: false, cardsLeft: 2, choice: 0 },
        player4: { hasPlayed: false, cardsLeft: 2, choice: 0 },
      },
    })),
    ...range(1, 3).map((r) => ({
      name: `vrouwen (${r})`,
      points: -100,
      aantal: 4,
      players: {
        player1: { hasPlayed: false, cardsLeft: 4, choice: 0 },
        player2: { hasPlayed: false, cardsLeft: 4, choice: 0 },
        player3: { hasPlayed: false, cardsLeft: 4, choice: 0 },
        player4: { hasPlayed: false, cardsLeft: 4, choice: 0 },
      },
    })),
    ...range(1, 3).map((r) => ({
      name: `mannen (${r})`,
      points: -60,
      aantal: 8,
      players: {
        player1: { hasPlayed: false, cardsLeft: 8, choice: 0 },
        player2: { hasPlayed: false, cardsLeft: 8, choice: 0 },
        player3: { hasPlayed: false, cardsLeft: 8, choice: 0 },
        player4: { hasPlayed: false, cardsLeft: 8, choice: 0 },
      },
    })),
    ...range(1, 3).map((r) => ({
      name: `harten heer (${r})`,
      points: -400,
      aantal: 1,
      players: {
        player1: { hasPlayed: false, cardsLeft: 1, choice: 0 },
        player2: { hasPlayed: false, cardsLeft: 1, choice: 0 },
        player3: { hasPlayed: false, cardsLeft: 1, choice: 0 },
        player4: { hasPlayed: false, cardsLeft: 1, choice: 0 },
      },
    })),
  ],
  positief: [
    ...range(1, 9).map((r) => ({
      name: `troef (${r})`,
      points: 50,
      aantal: 13,
      players: {
        player1: { hasPlayed: false, cardsLeft: 13, choice: 0 },
        player2: { hasPlayed: false, cardsLeft: 13, choice: 0 },
        player3: { hasPlayed: false, cardsLeft: 13, choice: 0 },
        player4: { hasPlayed: false, cardsLeft: 13, choice: 0 },
      },
    })),
  ],
})

export const useStore = defineStore('state', {
  state: () => ({
    games: defaultGames(),
  }),
  actions: {
    setCardsLeft(gameType: string, gameIndex: number, player: string, cardsPlayed: number) {
      const game = this.games[gameType][gameIndex]

      game.players[player].hasPlayed = true
      game.players[player].choice = parseInt(cardsPlayed)

      const totalPlayed = Object.values(game.players).reduce((acc, p) => acc + p.choice, 0)

      const totalLeft = game.aantal - totalPlayed

      const otherPlayers: string[] = without(['player1', 'player2', 'player3', 'player4'], player)

      otherPlayers.forEach((p) => {
        game.players[p].cardsLeft = Math.max(game.players[p].choice + totalLeft, totalLeft)
      })
    },
  },
})
