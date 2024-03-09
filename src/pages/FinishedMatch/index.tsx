import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PlayerRankingContext } from "../../contexts/PlayerRankingContext";
import {
  FinishedMatchContainer,
  FinishedMatchControllerContainer,
  PlayerRank,
} from "./styles";
import { GoToHomeModal } from "../../components/GoToHomeModal";

interface RankedPlayer {
  id: number;
  name: string;
  numGoals: number;
  numAssists: number;
}

type Filter = "byGoals" | "byAssists";

export function FinishedMatch() {
  const [finishedPlayerRank, setFinishedPlayerRank] = useState(
    [] as RankedPlayer[]
  );

  const [filterApplied, setFilterApplied] = useState<Filter>("byGoals");

  const [goToHomeModalIsOpen, setGoToHomeModalIsOpen] = useState(false);

  const todayDate = new Date().toLocaleDateString("pt-br");

  const { playerRanking, resetPlayerRank } = useContext(PlayerRankingContext);

  function handleCancelMatch() {
    resetPlayerRank();
  }

  function compareMostGoalsPlayer(a: RankedPlayer, b: RankedPlayer) {
    if (a.numGoals > b.numGoals) {
      return -1;
    } else if (a.numGoals < b.numGoals) {
      return 1;
    } else {
      if (a.numAssists > b.numAssists) {
        return -1;
      } else if (a.numAssists < b.numAssists) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  function compareMostAssistsPlayer(a: RankedPlayer, b: RankedPlayer) {
    if (a.numAssists > b.numAssists) {
      return -1;
    } else if (a.numAssists < b.numAssists) {
      return 1;
    } else {
      if (a.numGoals > b.numGoals) {
        return -1;
      } else if (a.numGoals < b.numGoals) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  function handleFilterRankByGoals() {
    const sortedRank = playerRanking.sort(compareMostGoalsPlayer);

    setFinishedPlayerRank([...sortedRank]);
    setFilterApplied("byGoals");
  }

  function handleFilterRankByAssists() {
    const sortedRank = playerRanking.sort(compareMostAssistsPlayer);

    setFinishedPlayerRank([...sortedRank]);
    setFilterApplied("byAssists");
  }

  function displayTrophyIcon(index: number) {
    if (index === 0) {
      return (
        <span className="material-symbols-outlined firstPlace">trophy</span>
      );
    } else if (index === 1) {
      return (
        <span className="material-symbols-outlined secondPlace">trophy</span>
      );
    } else if (index === 2) {
      return (
        <span className="material-symbols-outlined thirdPlace">trophy</span>
      );
    } else {
      return null;
    }
  }

  useEffect(() => {
    setFinishedPlayerRank(playerRanking);
  });

  return (
    <>
      <Header />

      <FinishedMatchContainer>
        <h3>
          Partida finalizada <br />
          {todayDate}
        </h3>

        <PlayerRank>
          <thead>
            <tr className={"titleRow"}>
              <th>Nome</th>
              <th>
                <button
                  className={"filterButton"}
                  onClick={handleFilterRankByGoals}
                  disabled={filterApplied === "byGoals"}
                >
                  gols
                </button>
              </th>
              <th>
                <button
                  className={"filterButton"}
                  onClick={handleFilterRankByAssists}
                  disabled={filterApplied === "byAssists"}
                >
                  Assists
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {finishedPlayerRank.map((player, index) => (
              <tr key={player.id} className={"playerRow"}>
                <td>
                  {player.name}
                  {displayTrophyIcon(index)}
                </td>
                <td>{player.numGoals}</td>
                <td>{player.numAssists}</td>
              </tr>
            ))}
          </tbody>
        </PlayerRank>

        <FinishedMatchControllerContainer>
          <div>
            <button className={"downloadFinalMatchRankButton"}>
              Baixar classificação da partida
            </button>

            <button
              className={"homeButton"}
              onClick={() => setGoToHomeModalIsOpen(true)}
            >
              Voltar ao inicio
            </button>
          </div>
        </FinishedMatchControllerContainer>

        {goToHomeModalIsOpen ? (
          <GoToHomeModal
            onGoToHome={handleCancelMatch}
            onCloseModal={() => setGoToHomeModalIsOpen(false)}
          />
        ) : null}
      </FinishedMatchContainer>
    </>
  );
}
