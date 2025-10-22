import styled from "styled-components";

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
`;
