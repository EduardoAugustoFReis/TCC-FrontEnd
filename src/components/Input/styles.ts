import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const StyledInputContainer = styled.div`
  margin: 1.0rem 0rem;

  label {
    display: flex;
    flex-direction: column-reverse;
    font-size: 2.4rem;
    gap: 0.5rem;
  }

  input {
    padding: 1.2rem;
    font-size: 2.0rem;
    background: none;
    border-radius: 0.8rem;
    outline: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    label {
      font-size: 2.0rem;
    }

    input {
      font-size: 1.8rem;
    }
  }
`;