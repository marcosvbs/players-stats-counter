import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 100%;
  background: ${(props) => props.theme["blue-400"]};

  height: 3.5rem;

  .logo {
    max-width: 48px;
    max-height: 48px;
  }
`;
