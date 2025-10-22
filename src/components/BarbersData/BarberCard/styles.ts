import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const BarberCardContainer = styled.div`
  .barberCard {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 4px solid ${({ theme }) => theme.colors.gold};
    padding: 1rem;
    border-radius: 0.8rem;
    background: #fff;
  }

  .textBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  img {
    height: 15rem;
    width: 15rem;
    border-radius: 0.8rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.jetBlack};
    font-size: 2.0rem;
  }

  p {
    color: ${({ theme }) => theme.colors.jetBlack};
    font-size: 1.6rem;
  }

  .trashButton {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.8rem;

    svg {
      color: ${({ theme }) => theme.colors.jetBlack};

      &:hover {
        color: ${({ theme }) => theme.colors.gold};
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .barberCard {
      flex-direction: column;
    }

    img {
      height: 15rem;
      width: 15rem;
    }
  }
`;
