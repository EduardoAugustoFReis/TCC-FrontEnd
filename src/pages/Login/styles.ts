import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const LoginContainer = styled.div`
  display: grid;
  place-content: center;

  a {
    font-size: 1.8rem;
    margin-top: 1.0rem;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    
    a {
      font-size: 1.6rem;
    }
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  width: 80.0rem;
  margin: 1.0rem 0;
  
  h2 {
    font-size: 2.8rem;
  }

  button {
    margin-top: 1.0rem;
    padding: 1.6rem;
    font-size: 1.8rem;
    width: 20.0rem;
    border-radius: 0.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 30.0rem;

    h2 {
      font-size: 2.2rem;
    }

    button {
      font-size: 1.6rem;
      width: 15.0rem;
      padding: 1.2rem;
    }
  }

`;