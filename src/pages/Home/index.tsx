import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";
import { useContext } from "react";
import { MatchStatusContext } from "../../contexts/MatchStatusContext";

export function Home() {
  const { getMatchStatus, redirectBasedOnMatchStatus } =
    useContext(MatchStatusContext);

  return getMatchStatus() ? (
    redirectBasedOnMatchStatus()
  ) : (
    <>
      <Header />
      <HomeContainer>
        <h2>
          Contabilize
          <span className="specialWord"> gols </span>e
          <span className="specialWord"> assistencias </span>
          durante sua partida de futebol.
        </h2>

        <Link className={"startLink"} to={"/add-players"}>
          Começar
        </Link>
      </HomeContainer>
    </>
  );
}
