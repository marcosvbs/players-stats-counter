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
      padding: 0.5rem 0.75rem;

      border: 2px solid ${(props) => props.theme.gray};
      border-radius: 10px;
      color: ${(props) => props.theme["blue-800"]};

      outline: 2px solid transparent;

      &:focus {
        border: 2px solid transparent;
        outline: 2px solid ${(props) => props.theme.yellow};
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
