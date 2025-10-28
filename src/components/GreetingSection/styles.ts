import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const GreetingSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  padding: 1.2rem;

  h2 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.gold};
    font-family: 'bookman old style' ;
  }

  p {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.whitePosca};
  }

  @media (max-width: ${breakpoints.mobile}) {
    h2 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;
