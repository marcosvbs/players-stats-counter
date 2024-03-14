import styled from "styled-components";

export const AddPlayersContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
  min-width: 320px;

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

      font-size: 1rem;
      text-size-adjust: 100%;

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

      margin-bottom: 9rem;

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

        &:disabled {
          background: ${(props) => props.theme["low-opacity-gray"]};
          cursor: none;
          pointer-events: none;
          color: ${(props) => props.theme.gray};
        }
      }
    }
  }
`;

export const MatchInProgressContainer = styled.div`
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

      &:disabled {
        background: ${(props) => props.theme["low-opacity-gray"]};
        cursor: none;
        pointer-events: none;

        a {
          color: ${(props) => props.theme.gray};

          cursor: none;
        }
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
