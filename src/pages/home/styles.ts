import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  justify-content: center;
  align-items: center;

  padding: 1rem;
  height: calc(100vh - 6rem);

  .specialWord {
    color: ${(props) => props.theme.yellow};
  }

  .startLink {
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
