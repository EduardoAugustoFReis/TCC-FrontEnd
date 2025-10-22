import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const ServiceCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 4px solid ${({ theme }) => theme.colors.gold};
  border-radius: 0.8rem;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.whitePosca};

  .textBox {
    margin: 1rem 0rem;

    h3 {
      color: ${({ theme }) => theme.colors.jetBlack};
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.jetBlack};
      font-size: 1.8rem;
    }
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
    .serviceCard {
      flex-direction: column;
    }
  }
`;
