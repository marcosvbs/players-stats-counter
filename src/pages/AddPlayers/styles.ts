import styled from "styled-components";

export const AddPlayersContainer = styled.div`
  margin: 0 auto;
  padding: 1.5rem 1rem;
  max-width: 425px;

  h3 {
    margin-bottom: 1rem;
  }

  .playerList {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 0.75rem;

      background: ${(props) => props.theme["low-opacity-gray"]};
      color: ${(props) => props.theme["blue-800"]};

      border: none;
      border-radius: 10px;
      outline: 2px solid transparent;

      &:focus {
        outline: 2px solid ${(props) => props.theme.gray};
      }

      &::placeholder {
        color: ${(props) => props.theme.gray};
      }
    }

    .playerListControls {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      .addPlayer {
        flex: 1;

        padding: 0.5rem 1rem;

        color: ${(props) => props.theme["blue-600"]};
        background: ${(props) => props.theme["blue-200"]};

        border-radius: 10px;
        border: none;

        text-decoration: none;

        cursor: pointer;

        &:active {
          filter: brightness(85%);
        }
      }

      .removePlayer {
        flex: 1;

        padding: 0.5rem 1rem;

        color: ${(props) => props.theme["red-400"]};
        background: ${(props) => props.theme["red-200"]};

        border-radius: 10px;
        border: none;

        text-decoration: none;

        cursor: pointer;

        &:active {
          filter: brightness(85%);
        }
      }
    }
  }
`;

export const MatchController = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  background: ${(props) => props.theme.white};
  border-top: 1px solid ${(props) => props.theme["low-opacity-gray"]};

  position: fixed;
  bottom: 0;
  right: 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
    width: 100%;
    max-width: 425px;

    .startMatchButton {
      width: 100%;

      background: ${(props) => props.theme["blue-400"]};
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

        color: ${(props) => props.theme["blue-600"]};

        text-decoration: none;
      }
    }

    .backLink {
      padding: 0.5rem 1rem;

      color: ${(props) => props.theme["blue-600"]};
      text-decoration: none;

      &:active {
        filter: brightness(85%);
      }
    }
  }
`;
