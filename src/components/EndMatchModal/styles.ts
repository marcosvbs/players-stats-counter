import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  flex-direction: row;
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

  .endMatchButton {
    width: 100%;

    background: ${(props) => props.theme["blue-400"]};
    border-radius: 10px;
    border: none;

    cursor: pointer;

    display: flex;
    justify-content: center;

    padding: 0.5rem 1rem;

    a {
      width: 100%;
      text-decoration: none;
      color: ${(props) => props.theme["blue-600"]};
    }

    &:active {
      filter: brightness(85%);
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
