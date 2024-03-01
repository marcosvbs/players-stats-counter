import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  justify-content: center;
  align-items: center;

  margin: 1rem;
  height: calc(100vh - 6rem);

  cursor: pointer;

  .specialWord {
    color: ${(props) => props.theme.yellow};
  }

  .startLink {
    padding: 0.5rem 1rem;

    color: ${(props) => props.theme["blue-600"]};
    background: ${(props) => props.theme["blue-400"]};

    border-radius: 10px;

    text-decoration: none;

    &:active {
      filter: brightness(85%);
    }
  }
`;
