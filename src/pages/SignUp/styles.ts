import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import backgroundImg from "../../assets/image/logo.jpg";


export const SignUpContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.jetBlack};

  a {
    font-size: 1.8rem;
    margin-top: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.gold};
  }

  @media (max-width: ${breakpoints.mobile}) {
   flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    a {
      font-size: 1.6rem;
    }

  }
`;

export const WrapperLoginAndLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 0rem;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  width: 70rem;
  background-color: ${({ theme }) => theme.colors.whitePosca};
  border-radius: 0.8rem;

  h2 {
    text-align: center;
    font-size: 2.8rem;
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
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 28rem;
    padding: 1.2rem;

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

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;
