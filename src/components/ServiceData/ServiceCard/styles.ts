import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const ServiceCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 3px solid ${({ theme }) => theme.colors.gold};
  padding: 1.2rem;

  .textBox {
    margin: 1rem 0rem;

    h3 {
      color: ${({ theme }) => theme.colors.whitePosca};
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.whitePosca};
      font-size: 1.8rem;
    }
  }

  .trashButton {
    /* position: absolute;
    bottom: 0.5rem;
    right: 0.5rem; */
    background: ${({ theme }) => theme.colors.greyPosca};
    border: 2px solid ${({ theme }) => theme.colors.greyPosca};
    border-radius: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .4rem;
    width: 100%;
    cursor: pointer;
    font-size: 1.8rem;

    &:hover {
      background: ${({ theme }) => theme.colors.danger};
      border: 2px solid ${({ theme }) => theme.colors.danger};
      /* transform: scale(1.04); */
      transition: .2s ease;
      }

    svg {
      color: ${({ theme }) => theme.colors.black};
      /* margin: .8rem; */

      /* &:hover {
        color: ${({ theme }) => theme.colors.danger};
        transform: scale(1.15);
        transition: .1s ease;
      } */
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .serviceCard {
      flex-direction: column;
    }
  }
`;
