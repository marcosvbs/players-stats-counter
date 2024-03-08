import { Link } from "react-router-dom";
import { ModalContainer, ModalOverlay } from "./styles";

interface CancelMatchModalProps {
  onCancelMatch: () => void;
  onCloseModal: () => void;
}

export function CancelMatchModal({
  onCancelMatch,
  onCloseModal,
}: CancelMatchModalProps) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>Cancelar partida</h3>
        <p>Tem certeza que deseja cancelar a partida?</p>

        <button className={"cancelMatchButton"} onClick={onCancelMatch}>
          <Link to={"/"}>Cancelar partida</Link>
        </button>

        <button className={"closeButton"} onClick={onCloseModal}>
          <Link to={"/match-in-progress"}>Voltar</Link>
        </button>
      </ModalContainer>
    </ModalOverlay>
  );
}
