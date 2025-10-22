import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const UserDataSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.8rem;
  width: fit-content;
  border-radius: 0.8rem;
  border: 5px solid ${({ theme }) => theme.colors.gold};
  background-color: ${({ theme }) => theme.colors.whitePosca};

  img {
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.gold};
    height: 15rem;
    width: 15rem;
  }
  
  h2 {
    font-size: 2.6rem;
    color: ${({ theme }) => theme.colors.gold};
  }
  h3 {
    font-size: 2.0rem;
    color: ${({ theme }) => theme.colors.jetBlack};
  }
  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.jetBlack};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      height: 12rem;
      width: 12rem;
    }

    h2 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 2em;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;
