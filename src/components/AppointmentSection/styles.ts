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

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const AppointmentForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.whitePosca};
  border-radius: 0.8rem;
  
  label {
    color: ${({ theme }) => theme.colors.jetBlack};
    font-size: 1.6rem;
    font-weight: bold;
  }

  select {
    padding: 0.8rem;
    border-radius: 0.8rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.jetBlack};

    option {
      color: ${({ theme }) => theme.colors.jetBlack};
    }
  }

  input {
    color: ${({ theme }) => theme.colors.jetBlack};
    text-align: center;
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
    color: ${({ theme }) => theme.colors.whitePosca};
    background-color: ${({ theme }) => theme.colors.jetBlack};
    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;

    input {
      width: 100%;
    }

    select {
      width: 100%;
    }

    button {
      width: 100%;
    }

    gap: 1rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;

    input {
      width: 100%;
    }

    select {
      width: 100%;
    }

    button {
      width: 100%;
    }

    gap: 1rem;
  }
`;

export const TimeSelect = styled.select`
  padding: 0.8rem;
  border-radius: 0.8rem;
  font-size: 1.4rem;

  option {
    color: ${({ theme }) => theme.colors.jetBlack};
    padding: 0.8rem;
  }
`;
