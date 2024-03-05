import styled from "styled-components";

export const MatchInProgressContainer = styled.div`
  margin: 0 auto;
  min-width: 320px;

  h3 {
    margin: 1rem;
  }
`;

export const PlayerRank = styled.table`
  width: 100%;

  margin-bottom: 8.75rem;

  thead,
  tbody tr {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 1rem;
  }

  thead {
    align-items: end;
  }

  thead th:nth-child(1),
  tbody th:nth-child(1) {
    text-align: left;
  }

  thead th:nth-child(2),
  thead th:nth-child(3),
  tbody tr td:nth-child(2),
  tbody tr td:nth-child(3) {
    text-align: center;
  }

  thead th:nth-child(2),
  thead th:nth-child(3) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  thead,
  tr {
    padding: 1rem;
  }

  tr {
    display: flex;
    flex-direction: row;
    align-items: center;

    border-top: 1px solid ${(props) => props.theme["low-opacity-gray"]};
  }

  tr:last-child {
    border-bottom: 1px solid ${(props) => props.theme["low-opacity-gray"]};
  }

  tbody tr td:nth-child(2),
  tbody tr td:nth-child(3) {
    display: flex;
    flex-direction: column;
  }

  tr td button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1.25rem;

    border-radius: 10px;
    border: none;

    font-size: 1rem;

    cursor: pointer;
  }

  tr td button:nth-child(1) {
    color: ${(props) => props.theme["blue-600"]};
    background: ${(props) => props.theme["blue-200"]};
  }

  tr td button:nth-child(2) {
    color: ${(props) => props.theme["red-400"]};
    background: ${(props) => props.theme["red-200"]};
  }

  td,
  th {
    min-width: 60px;
    word-wrap: break-word;
  }

  th {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 400;
  }

  th span {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const MatchControllerContainer = styled.div`
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

    .EndMatchButton {
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

    .cancelMatchButton {
      width: 100%;

      background: none;
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
  }
`;
