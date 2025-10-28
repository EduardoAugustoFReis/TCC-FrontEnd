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
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.jetBlack};
  /* border-radius: 0.8rem; */
  
  label {
    color: ${({ theme }) => theme.colors.whitePosca};
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 3rem;
  }

  select {
    padding: 0.8rem;
    /* border-radius: 0.8rem; */
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.whitePosca};
    background-color: ${({ theme }) => theme.colors.jetBlack};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
    outline: none;
    cursor: pointer;

    option {
      color: ${({ theme }) => theme.colors.whitePosca};
    }
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }

  input {
    color: ${({ theme }) => theme.colors.whitePosca};
    background-color: ${({ theme }) => theme.colors.jetBlack};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
    outline: none;
    text-align: center;
    padding: 0.8rem;
    /* border-radius: 0.8rem; */
    font-size: 1.4rem;
    cursor: pointer;
  }

  button {
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1.2rem;
    margin-top: 2rem;
    border-radius: 1.5rem;
    border: none;
    outline: none;
    transition: 0.2s ease;
    color: ${({ theme }) => theme.colors.whitePosca};
    background-color: ${({ theme }) => theme.colors.darkJetBlack};
    /* border: 1px solid ${({ theme }) => theme.colors.gold}; */
    &:hover {
      background-color: ${({ theme }) => theme.colors.greySico};
      color: ${({ theme }) => theme.colors.whitePosca};
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
  /* border-radius: 0.8rem; */
  font-size: 1.4rem;

  option {
    color: ${({ theme }) => theme.colors.jetBlack};
    padding: 0.8rem;
  }
`;
