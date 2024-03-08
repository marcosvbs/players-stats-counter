import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PlayerRankingContext } from "../../contexts/PlayerRankingContext";
import { FinishedMatchContainer, PlayerRank } from "./styles";

interface RankedPlayer {
  id: number;
  name: string;
  numGoals: number;
  numAssists: number;
}

export function FinishedMatch() {
  const [finishedPlayerRank, setFinishedPlayerRank] = useState(
    [] as RankedPlayer[]
  );

  const todayDate = new Date().toLocaleDateString("pt-br");

  const { playerRanking } = useContext(PlayerRankingContext);

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
  }

  function handleFilterRankByAssists() {
    const sortedRank = playerRanking.sort(compareMostAssistsPlayer);

    setFinishedPlayerRank([...sortedRank]);
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
                <button onClick={handleFilterRankByGoals}>gols</button>
              </th>
              <th>
                <button onClick={handleFilterRankByAssists}>Assists</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {finishedPlayerRank.map((player) => (
              <tr key={player.id} className={"playerRow"}>
                <td>{player.name}</td>
                <td>{player.numGoals}</td>
                <td>{player.numAssists}</td>
              </tr>
            ))}
          </tbody>
        </PlayerRank>

        {/* <MatchControllerContainer>
          <div>
            <button
              className={"EndMatchButton"}
              onClick={() => setEndModalIsOpen(true)}
            >
              <Link to={"/match-in-progress"}>Finalizar partida</Link>
            </button>

            <button
              className={"cancelMatchButton"}
              onClick={() => setCancelModalIsOpen(true)}
            >
              Cancelar partida
            </button>
          </div>
        </MatchControllerContainer> */}
      </FinishedMatchContainer>
    </>
  );
}
