import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const HeaderContainer = styled.header`
  height: 10.0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;
  border: 1px solid #000;

  @media (max-width: ${breakpoints.mobile}) {

  }
`;