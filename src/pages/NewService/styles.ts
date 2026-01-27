import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const NewServiceContainer = styled.div`
  padding: 1.2rem;

  h1 {
    text-align: center;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.whitePosca};
    margin-bottom: 2rem;
  }

  a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gold};

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
    }
  }
`;

export const NewServiceForm = styled.form`
  background-color: ${({ theme }) => theme.colors.whitePosca};
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  width: 80rem;
  margin: 1rem 0;
  border-radius: 0.8rem;

  h2 {
    text-align: center;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.jetBlack};
  }

  button {
    margin: 0 auto;
    margin-top: 1rem;
    padding: 1.6rem;
    font-size: 1.8rem;
    width: 20rem;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.jetBlack};
    border: 1px solid ${({ theme }) => theme.colors.black};

    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 30rem;

    h2 {
      font-size: 2.2rem;
    }

    button {
      font-size: 1.6rem;
      width: 15rem;
      padding: 1.2rem;
    }
  }
`;
