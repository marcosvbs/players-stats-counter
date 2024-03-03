import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 100%;
  background: ${(props) => props.theme["blue-400"]};

  height: 3rem;

  border-radius: 0 0 20px 20px;

  .material-symbols-outlined {
    color: ${(props) => props.theme["blue-600"]};
    font-size: 2rem;
  }
`;