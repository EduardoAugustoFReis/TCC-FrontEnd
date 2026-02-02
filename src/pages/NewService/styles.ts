import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const NewServiceContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  span{
    width: 100%;
  }

  h1 {
    text-align: center;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.whitePosca};
    margin-bottom: 2rem;
  }

  a {
    font-size: 2rem;
    padding: 1.3rem 0 0 1.3rem;
    width: fit-content;
    display: flex;
    gap: .7rem;
    color: ${({ theme }) => theme.colors.gold};
    transition: .1s;
    svg{
      font-size: 2.6rem;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    h1 {
      margin-top: 1.6rem;
      font-size: 2.4rem;
    }

    a {
      font-size: 1.4rem;
      svg{
        font-size: 1.9rem;
      }
    }
  }
`;

export const NewServiceForm = styled.form`
  background-color: ${({ theme }) => theme.colors.whitePosca};
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  width: 100%;
  max-width: 80rem;
  border-radius: 0.8rem;

  h2 {
    text-align: center;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.jetBlack};
  }

  button {
    margin: 0 auto;
    margin-top: 1rem;
    padding: 1.3rem;
    font-size: 1.8rem;
    width: 20rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.greySico};

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkJetBlack};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 30rem;

    h2 {
      font-size: 2rem;
    }

    button {
      font-size: 1.6rem;
      width: 15rem;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    min-width: 70rem;

    h2 {
      font-size: 2rem;
    }

    button {
      font-size: 1.6rem;
      width: 15rem;
    }
  }
`;
