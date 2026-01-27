import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import backgroundImg from "../../assets/image/logo.jpg";

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  a {
    font-size: 1.8rem;
    margin-top: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.lightGold};
    font-weight: 600;
  }

  >h2 {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    a {
      font-size: 1.6rem;
    }

    >h2 {
      color:  ${({ theme }) => theme.colors.lightGold};
      font-size: 2.4rem;
      margin-bottom: 1rem;
      display: flex;
    }
  }
`;

export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  /* margin: 1rem; */
  padding: 1rem;
  height: 40rem;
  background-color: ${({ theme }) => theme.colors.whitePosca};
  max-width: 100rem;
  border-radius: 10px;
  gap: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 0rem;
    flex-direction: column-reverse;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  width: 70%;
  height: 100%;
  justify-content: space-evenly;
  border-radius: 0.8rem;

  h2 {
    text-align: center;
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  button {
    margin: 0 auto;
    margin-top: 2rem;
    padding: 1.3rem;
    outline: none;
    border: none;
    font-size: 1.8rem;
    width: 20rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.greySico};
    transition: .2s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.darkJetBlack};
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

export const ImageDiv = styled.div`
  display: flex;
  height: 90%;
    img{
      width: 100%;
    }
    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
    @media (max-width: ${breakpoints.tablet}) {
      height: 60%;
    }
`;

export const MoustacheDiv = styled.div`
  display: none;
  height: 20%;
    img{
      width: 100%;
    }
    @media (max-width: ${breakpoints.mobile}) {
      display: flex;
    }
`;