import React, { createContext, useState } from "react";

interface Player {
  id: number;
  name: string;
}

interface RankedPlayer {
  id: number;
  name: string;
  numGoals: number;
  numAssists: number;
}

type PlayerRanking = RankedPlayer[];

interface PlayerRankingContext {
  playerRanking: PlayerRanking;
  createPlayerRanking: (playerList: Player[]) => void;
  incrementPlayerNumGoals: (playerId: number) => void;
  decrementPlayerNumGoals: (playerId: number) => void;
  incrementPlayerNumAssists: (playerId: number) => void;
  decrementPlayerNumAssists: (playerId: number) => void;
  resetPlayerRank: () => void;
}

export const PlayerRankingContext = createContext({} as PlayerRankingContext);

export function PlayerRankingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [playerRanking, setPlayerRanking] = useState<PlayerRanking>([]);

  function createPlayerRanking(playerList: Player[]) {
    const newPlayerRanking = playerList.map((player) => ({
      id: player.id,
      name: player.name,
      numGoals: 0,
      numAssists: 0,
    }));

    setPlayerRanking(newPlayerRanking);
  }

  function incrementPlayerNumGoals(playerId: number) {
    const newPlayerRanking = playerRanking.map((player) => {
      if (player.id === playerId) {
        return { ...player, numGoals: player.numGoals + 1 };
      }
      return player;
    });

    setPlayerRanking(newPlayerRanking);
  }

  function decrementPlayerNumGoals(playerId: number) {
    const newPlayerRanking = playerRanking.map((player) => {
      if (player.id === playerId) {
        return { ...player, numGoals: player.numGoals - 1 };
      }
      return player;
    });

    setPlayerRanking(newPlayerRanking);
  }

  function incrementPlayerNumAssists(playerId: number) {
    const newPlayerRanking = playerRanking.map((player) => {
      if (player.id === playerId) {
        return { ...player, numAssists: player.numAssists + 1 };
      }
      return player;
    });

    setPlayerRanking(newPlayerRanking);
  }

  function decrementPlayerNumAssists(playerId: number) {
    const newPlayerRanking = playerRanking.map((player) => {
      if (player.id === playerId) {
        return { ...player, numAssists: player.numAssists - 1 };
      }
      return player;
    });

    setPlayerRanking(newPlayerRanking);
  }

  function resetPlayerRank() {
    setPlayerRanking([]);
  }

  return (
    <PlayerRankingContext.Provider
      value={{
        playerRanking,
        createPlayerRanking,
        incrementPlayerNumGoals,
        decrementPlayerNumGoals,
        incrementPlayerNumAssists,
        decrementPlayerNumAssists,
        resetPlayerRank,
      }}
    >
      {children}
    </PlayerRankingContext.Provider>
  );
}
