import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const HeaderContainer = styled.header`
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  border-bottom: 3px solid ${({theme}) => theme.colors.gold};

  img {
    width: 12.0rem;
    height: 12.0rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
`;
