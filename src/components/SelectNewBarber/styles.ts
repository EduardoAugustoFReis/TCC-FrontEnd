import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const SelectNewBarberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.whitePosca};
  }

  select {
    cursor: pointer;
    font-size: 1.6rem;
    border-radius: 0.5rem;
    padding: 0.8rem;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.lightJetBlack};
    color: ${({ theme }) => theme.colors.white};
    transition: .2s;
    option {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.lightJetBlack};
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
