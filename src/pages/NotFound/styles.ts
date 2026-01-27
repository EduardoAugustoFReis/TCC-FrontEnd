import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  gap: 1rem;

  h2 {
    color: ${({ theme }) => theme.colors.whitePosca};
    font-size: 2.4rem;
  }

  p {
    color: ${({ theme }) => theme.colors.greySico};
    font-size: 1.6rem;
  }

  a {
    background-color: ${({ theme }) => theme.colors.gold};
    padding: 1.2rem;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.colors.whitePosca};
    font-size: 1.6rem;

    &:hover {
      filter: brightness(0.9);
      color: ${({ theme }) => theme.colors.jetBlack};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    h2 {
      font-size: 2rem;
    }
  }
`;
