import { defineStore } from 'pinia'
import { range, without } from 'lodash'

type GamePlayer = { hasChosen: boolean; hasPlayed: boolean; cardsLeft: number; cardsPlayed: number }

export type Game = {
  name: string
  points: number
  aantal: number
  players: {
    player1: GamePlayer
    player2: GamePlayer
    player3: GamePlayer
    player4: GamePlayer
  }
}

type Games = {
  negatief: Game[]
  positief: Game[]
}

const getDefaultPlayersState = (cardsLeft: number): Record<string, GamePlayer> =>
  Object.fromEntries(
    range(1, 5).map((i) => [
      `player${i}`,
      { hasChosen: false, hasPlayed: false, cardsLeft, cardsPlayed: 0 },
    ]),
  )

/**
 * Returns the initial default object for all games to be played
 *
 * @returns
 */
const getDefaultGames = (): Games => ({
  negatief: [
    ...range(1, 3).map((r) => ({
      name: `harten (${r})`,
      points: -30,
      aantal: 13,
      players: getDefaultPlayersState(13),
    })),
    ...range(1, 3).map((r) => ({
      name: `slagen (${r})`,
      points: -50,
      aantal: 13,
      players: getDefaultPlayersState(13),
    })),
    ...range(1, 3).map((r) => ({
      name: `laatste 2 (${r})`,
      points: -140,
      aantal: 2,
      players: getDefaultPlayersState(2),
    })),
    ...range(1, 3).map((r) => ({
      name: `vrouwen (${r})`,
      points: -100,
      aantal: 4,
      players: getDefaultPlayersState(4),
    })),
    ...range(1, 3).map((r) => ({
      name: `mannen (${r})`,
      points: -60,
      aantal: 8,
      players: getDefaultPlayersState(8),
    })),
    ...range(1, 3).map((r) => ({
      name: `harten heer (${r})`,
      points: -400,
      aantal: 1,
      players: getDefaultPlayersState(1),
    })),
  ],
  positief: [
    ...range(1, 9).map((r) => ({
      name: `troef (${r})`,
      points: 50,
      aantal: 13,
      players: getDefaultPlayersState(13),
    })),
  ],
})

/**
 *
 * @param games list of games
 *
 * @returns A tally of all player scores given the input games
 */
const sumPlayerScores = (games: Game[]): Record<string, number> =>
  games.reduce(
    (acc, game) =>
      Object.fromEntries(
        Object.entries(acc).map(([key, value]) => [
          key,
          value + game.players[key].cardsPlayed * game.points,
        ]),
      ),
    { player1: 0, player2: 0, player3: 0, player4: 0 },
  )

export const useStore = defineStore('state', {
  state: () => ({
    games: getDefaultGames(),
  }),
  actions: {
    setGameChosen(
      gameType: keyof Games,
      gameIndex: number,
      player: keyof Game['players'],
      checked: boolean,
    ) {
      const game = this.games[gameType][gameIndex]
      game.players[player].hasChosen = checked
    },
    setCardsLeft(
      gameType: keyof Games,
      gameIndex: number,
      player: keyof Game['players'],
      cardsPlayed: number,
    ) {
      const game = this.games[gameType][gameIndex]

      game.players[player].cardsPlayed = cardsPlayed

      const totalPlayed = Object.values(game.players).reduce((acc, p) => acc + p.cardsPlayed, 0)

      const totalLeft = game.aantal - totalPlayed

      const otherPlayers: (keyof Game['players'])[] = without(
        ['player1', 'player2', 'player3', 'player4'],
        player,
      )

      otherPlayers.forEach((p) => {
        game.players[p].cardsLeft = game.players[p].cardsPlayed + totalLeft
      })
    },
  },
  getters: {
    totalsPerSection: (state) =>
      Object.fromEntries(
        Object.entries(state.games).map(([key, games]) => [key, sumPlayerScores(games)]),
      ),
    totalTotals: (state) => sumPlayerScores([...state.games.negatief, ...state.games.positief]),
  },
})
