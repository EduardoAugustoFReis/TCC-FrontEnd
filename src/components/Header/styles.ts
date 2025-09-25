import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const HeaderContainer = styled.header`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;
  border: 1px solid #000;

  h1 {
    font-size: 2.4rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
    h1 {
      font-size: 2.2rem;
    }
  }
`;
