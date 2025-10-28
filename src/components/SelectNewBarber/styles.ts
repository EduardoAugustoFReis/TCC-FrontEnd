import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const SelectNewBarberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.jetBlack};
  }
  select {
    cursor: pointer;
    font-size: 1.6rem;
    border-radius: 0.8rem;
    padding: 0.8rem;
    background-color: ${({ theme }) => theme.colors.jetBlack};
    color: ${({ theme }) => theme.colors.white};
    option {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    label {
      font-size: 1.6rem;
    }

    select {
      font-size: 1.4rem;

      option {
        font-size: 1.4rem;
      }
    }
  }
`;
