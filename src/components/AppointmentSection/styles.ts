import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const AppointmentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.2rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const AppointmentForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-size: 1.8rem;
    font-weight: bold;
  }

  select {
    padding: 0.8rem;
    border-radius: 0.8rem;
    font-size: 1.4rem;
  }

  input {
    padding: 0.8rem;
    border-radius: 0.8rem;
    font-size: 1.4rem;
  }

  button {
    font-size: 1.6rem;
    padding: 1.2rem;
    border-radius: 0.8rem;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c0c0c0;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.0rem;

  }
`;
