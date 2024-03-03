import { useState } from "react";
import { Header } from "../../components/Header";
import { AddPlayersContainer } from "./styles";

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
      </AddPlayersContainer>
    </>
  );
}
