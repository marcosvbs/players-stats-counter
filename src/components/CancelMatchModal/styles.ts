import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  background: ${(props) => props.theme["low-opacity-gray"]};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;

  margin: 0 1rem;
  padding: 1rem;

  border-radius: 10px;

  background: ${(props) => props.theme.white};

  h3,
  p {
    width: 100%;
  }

  .cancelMatchButton {
    width: 100%;

    background: ${(props) => props.theme["red-200"]};
    border-radius: 10px;
    border: none;

    cursor: pointer;

    &:active {
      filter: brightness(85%);
    }

    a {
      display: flex;
      justify-content: center;

      width: 100%;
      padding: 0.5rem 1rem;

      color: ${(props) => props.theme["red-400"]};

      text-decoration: none;
    }
  }

  .closeButton {
    width: 100%;
    border: none;
    background: none;

    a {
      color: ${(props) => props.theme["blue-600"]};
      text-decoration: none;
    }
  }
`;
