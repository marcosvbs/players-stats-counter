import { Link } from "react-router-dom";
import { ModalContainer, ModalOverlay } from "./styles";
import { useContext } from "react";
import { MatchStatusContext } from "../../contexts/MatchStatusContext";

interface CancelMatchModalProps {
  onCloseModal: () => void;
}

export function EndMatchModal({ onCloseModal }: CancelMatchModalProps) {
  const { updateMatchStatus } = useContext(MatchStatusContext);

  function handleEndMatch() {
    updateMatchStatus("finished");
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>Finalizar partida</h3>
        <p>Tem certeza que deseja finalizar a partida?</p>

        <button className={"endMatchButton"} onClick={handleEndMatch}>
          <Link to={"/finished-match"}>Finalizar partida</Link>
        </button>

        <button className={"closeButton"} onClick={onCloseModal}>
          <Link to={"/match-in-progress"}>Voltar</Link>
        </button>
      </ModalContainer>
    </ModalOverlay>
  );
}
