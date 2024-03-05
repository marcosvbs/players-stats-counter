import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { MatchInProgressContainer } from "./styles";
import { MatchController } from "../AddPlayers/styles";

export function MatchInProgress() {
  const todayDate = new Date().toLocaleDateString("pt-br");

  return (
    <>
      <Header />
      <MatchInProgressContainer>
        <h3>
          Partida em andamento <br />
          {todayDate}
        </h3>

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
