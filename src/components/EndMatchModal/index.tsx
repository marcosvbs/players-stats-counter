import { Link } from "react-router-dom";
import { ModalContainer, ModalOverlay } from "./styles";

interface CancelMatchModalProps {
  onCloseModal: () => void;
}

export function EndMatchModal({ onCloseModal }: CancelMatchModalProps) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>Finalizar partida</h3>
        <p>Tem certeza que deseja finalizar a partida?</p>

        <Link className={"endMatchLink"} to={"/finished-match"}>
          Finalizar partida
        </Link>

        <button className={"closeButton"} onClick={onCloseModal}>
          <Link to={"/match-in-progress"}>Voltar</Link>
        </button>
      </ModalContainer>
    </ModalOverlay>
  );
}
