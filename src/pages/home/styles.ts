import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0 auto;

  max-width: 425px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  padding: 1rem;
  height: calc(100vh - 6rem);

  .specialWord {
    color: ${(props) => props.theme["blue-400"]};
  }

  .startLink {
    width: 100%;
    max-width: 425px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 0.5rem 1rem;

    color: ${(props) => props.theme["blue-600"]};
    background: ${(props) => props.theme["blue-400"]};

    border-radius: 10px;

    text-decoration: none;

    cursor: pointer;

    &:active {
      filter: brightness(85%);
    }
  }
`;
