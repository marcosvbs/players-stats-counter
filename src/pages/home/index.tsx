import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <h2>
          Contabilize
          <br /> <span className="specialWord">gols</span>,{" "}
          <span className="specialWord">assistencias</span>,{" "}
          <span className="specialWord">faltas</span> <br />e outras informações
          durante sua partida de futebol.
        </h2>

        <Link className={"startLink"} to={"/add-players"}>
          Começar
        </Link>
      </HomeContainer>
    </>
  );
}
