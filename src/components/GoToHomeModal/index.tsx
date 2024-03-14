import { Link } from "react-router-dom";
import { ModalContainer, ModalOverlay } from "./styles";

interface GoToHomeModalProps {
  onGoToHome: () => void;
  onCloseModal: () => void;
}

export function GoToHomeModal({
  onGoToHome,
  onCloseModal,
}: GoToHomeModalProps) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>Voltar ao inicio</h3>
        <p>
          Tem certeza que deseja voltar ao inicio? Todos os dados da partida
          serão perdidos.
        </p>

        <button className={"goToHomeButton"} onClick={onGoToHome}>
          <Link to={"/"}>Voltar ao inicio</Link>
        </button>

        <button className={"closeButton"} onClick={onCloseModal}>
          <Link to={"/finished-match"}>Voltar</Link>
        </button>
      </ModalContainer>
    </ModalOverlay>
  );
}
