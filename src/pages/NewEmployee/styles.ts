import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const NewEmployeeContainer = styled.div``;

export const NewEmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  width: 80rem;
  margin: 1rem 0;

  h2 {
    font-size: 2.8rem;
  }

  button {
    margin-top: 1rem;
    padding: 1.6rem;
    font-size: 1.8rem;
    width: 20rem;
    border-radius: 0.8rem;
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
