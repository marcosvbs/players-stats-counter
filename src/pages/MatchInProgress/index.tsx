import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { MatchInProgressContainer, PlayerRank } from "./styles";
import { MatchController } from "../AddPlayers/styles";
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
            <th>Nome</th>
            <th>gols</th>
            <th>Assists</th>
          </thead>
          <tbody>
            {playerRanking.map((player) => (
              <tr>
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

        <MatchController>
          <div>
            <button className={"startMatchButton"}>
              <Link to={"/match-in-progress"}>Iniciar partida</Link>
            </button>
            <Link className={"backLink"} to={"/add-players"}>
              Voltar
            </Link>
          </div>
        </MatchController>
      </MatchInProgressContainer>
    </>
  );
}
