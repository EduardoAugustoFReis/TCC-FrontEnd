import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const UserDataSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.6rem;
  width: fit-content;
  border-radius: 1rem 5rem 5rem 1rem;
  border: 3px solid ${({ theme }) => theme.colors.gold};
  background-color: ${({ theme }) => theme.colors.greyPosca};
  box-shadow: 0px 6px 10px 7px rgba(0, 0, 0, 0.22);

  img {
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.white};
    outline: 3px solid ${({ theme }) => theme.colors.gold};
    height: 15rem;
    width: 15rem;
    margin: 1rem;
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
