import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import {
  MatchControllerContainer,
  MatchInProgressContainer,
  PlayerRank,
} from "./styles";
import { useContext, useState } from "react";
import { PlayerRankingContext } from "../../contexts/PlayerRankingContext";
import { CancelMatchModal } from "../../components/CancelMatchModal";
import { EndMatchModal } from "../../components/EndMatchModal";
import { MatchStatusContext } from "../../contexts/MatchStatusContext";

export function MatchInProgress() {
  const [cancelModalIsOpen, setCancelModalIsOpen] = useState(false);
  const [endModalIsOpen, setEndModalIsOpen] = useState(false);

  const todayDate = new Date().toLocaleDateString("pt-br");

  const {
    playerRanking,
    incrementPlayerNumGoals,
    decrementPlayerNumGoals,
    incrementPlayerNumAssists,
    decrementPlayerNumAssists,
    resetPlayerRank,
  } = useContext(PlayerRankingContext);

  const { getMatchStatus, redirectBasedOnMatchStatus, resetMatchStatus } =
    useContext(MatchStatusContext);

  function handleCancelMatch() {
    resetPlayerRank();
    resetMatchStatus();
  }

  return getMatchStatus() != "inProgress" ? (
    redirectBasedOnMatchStatus()
  ) : (
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
                  <button onClick={() => incrementPlayerNumGoals(player.id)}>
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  {player.numGoals}
                  <button
                    onClick={() => decrementPlayerNumGoals(player.id)}
                    disabled={player.numGoals <= 0}
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </td>
                <td>
                  <button onClick={() => incrementPlayerNumAssists(player.id)}>
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  {player.numAssists}
                  <button
                    onClick={() => decrementPlayerNumAssists(player.id)}
                    disabled={player.numAssists <= 0}
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </PlayerRank>

        <MatchControllerContainer>
          <div>
            <button
              className={"endMatchButton"}
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
        </MatchControllerContainer>
      </MatchInProgressContainer>

      {cancelModalIsOpen ? (
        <CancelMatchModal
          onCancelMatch={handleCancelMatch}
          onCloseModal={() => setCancelModalIsOpen(false)}
        />
      ) : null}

      {endModalIsOpen ? (
        <EndMatchModal onCloseModal={() => setEndModalIsOpen(false)} />
      ) : null}
    </>
  );
}
