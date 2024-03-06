import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import {
  MatchControllerContainer,
  MatchInProgressContainer,
  PlayerRank,
} from "./styles";
import { useContext } from "react";
import { PlayerRankingContext } from "../../contexts/PlayerRankingContext";

export function MatchInProgress() {
  const todayDate = new Date().toLocaleDateString("pt-br");

  const { playerRanking } = useContext(PlayerRankingContext);

  return (
    <>
      <Header />
      <MatchInProgressContainer>
        <h3>
          Partida em andamento <br />
          {todayDate}
        </h3>

        <PlayerRank>
          <thead>
            <tr className={"titleRow"}>
              <th>Nome</th>
              <th>gols</th>
              <th>Assists</th>
            </tr>
          </thead>
          <tbody>
            {playerRanking.map((player) => (
              <tr key={player.id} className={"playerRow"}>
                <td>{player.name}</td>
                <td>
                  <button>
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  {player.numGoals}
                  <button>
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </td>
                <td>
                  <button>
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  {player.numAssists}
                  <button>
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </PlayerRank>

        <MatchControllerContainer>
          <div>
            <button className={"EndMatchButton"}>
              <Link to={"/match-in-progress"}>Finalizar partida</Link>
            </button>

            <button className={"cancelMatchButton"}>
              <Link to={"/"}>Cancelar partida</Link>
            </button>
          </div>
        </MatchControllerContainer>
      </MatchInProgressContainer>
    </>
  );
}
