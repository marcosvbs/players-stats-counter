import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { AddPlayersContainer, MatchInProgressContainer } from "./styles";
import { Link } from "react-router-dom";
import { PlayerRankingContext } from "../../contexts/PlayerRankingContext";

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

  function handleCreatePlayerRanking() {
    const namedPlayers = players.filter(
      (player) => player.name[0] !== " " && player.name.length !== 0
    );

    createPlayerRanking(namedPlayers);
  }

  return (
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
