import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { AddPlayersContainer, MatchInProgressContainer } from "./styles";
import { Link } from "react-router-dom";
import { PlayerRankingContext } from "../../contexts/PlayerRankingContext";
import { MatchStatusContext } from "../../contexts/MatchStatusContext";

interface Player {
  id: number;
  name: string;
}

export function AddPlayers() {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: 0,
      name: "",
    },
  ]);

  const { createPlayerRanking } = useContext(PlayerRankingContext);
  const { getMatchStatus, redirectBasedOnMatchStatus, updateMatchStatus } =
    useContext(MatchStatusContext);

  function onChangePlayerName(
    event: React.ChangeEvent<HTMLInputElement>,
    playerId: number
  ) {
    const updatedPlayers = players.map((player) =>
      player.id === playerId
        ? {
            id: player.id,
            name: event.target.value,
          }
        : player
    );

    setPlayers(updatedPlayers);
  }

  function handleCreatePlayer() {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        id: prevPlayers.length,
        name: "",
      },
    ]);
  }

  function handleRemovePlayer() {
    const updatedPlayers = players.filter(
      (player) => player.id !== players.length - 1
    );

    setPlayers(updatedPlayers);
  }

  function checkIfAllPlayersAreNamed() {
    const allPlayersAreNamed = players.some(
      (player) => player.name.trim() === ""
    );

    return allPlayersAreNamed;
  }

  function handleCreatePlayerRanking() {
    const namedPlayers = players.filter(
      (player) => player.name[0] !== " " && player.name.length !== 0
    );

    createPlayerRanking(namedPlayers);
    updateMatchStatus("inProgress");
  }

  return getMatchStatus() ? (
    redirectBasedOnMatchStatus()
  ) : (
    <>
      <Header />
      <AddPlayersContainer>
        <h3>Adicione os jogadores da partida:</h3>

        <div className={"playerList"}>
          {players.map((player) => (
            <input
              key={player.id}
              type={"text"}
              name={player.name}
              placeholder={"Nome do jogador"}
              value={player.name}
              onChange={(event) => onChangePlayerName(event, player.id)}
              maxLength={33}
              required
            />
          ))}

          <div className="playerListControls">
            <button
              type={"button"}
              className={"addPlayer"}
              onClick={handleCreatePlayer}
            >
              Adicionar
            </button>
            <button
              type={"button"}
              className={"removePlayer"}
              onClick={handleRemovePlayer}
              disabled={players.length <= 0}
            >
              Remover
            </button>
          </div>
        </div>

        <MatchInProgressContainer>
          <div>
            <button
              className={"startMatchButton"}
              onClick={handleCreatePlayerRanking}
              disabled={checkIfAllPlayersAreNamed() || players.length <= 0}
            >
              <Link to={"/match-in-progress"}>Iniciar partida</Link>
            </button>

            <Link className={"backLink"} to={"/"}>
              Voltar
            </Link>
          </div>
        </MatchInProgressContainer>
      </AddPlayersContainer>
    </>
  );
}
