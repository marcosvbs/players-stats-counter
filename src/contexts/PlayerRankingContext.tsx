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

  return (
    <PlayerRankingContext.Provider
      value={{ playerRanking, createPlayerRanking }}
    >
      {children}
    </PlayerRankingContext.Provider>
  );
}
