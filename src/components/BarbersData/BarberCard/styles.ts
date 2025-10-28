import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const BarberCardContainer = styled.div`
  .barberCard {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    margin: .5rem;
    background-color:  ${({ theme }) => theme.colors.jetBlack};
    /* border: 1px solid ${({ theme }) => theme.colors.white}; */
    border-radius: 2.5rem 2.5rem 0.5rem 0.5rem;
    box-shadow: 0px 6px 10px 7px rgba(0, 0, 0, 0.22);
    /* border-radius: 2.5rem 2.5rem 0.5rem 0.5rem;
    border: 2px solid ${({ theme }) => theme.colors.darkgold};
    box-shadow: 0px 0px 10px 7px rgba(168, 152, 9, 0.27); */
    min-width: 270px;
    min-height: 350px;
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
    border: 2px solid ${({theme}) => theme.colors.white};
    outline: 3px solid ${({theme}) => theme.colors.gold};
    border-radius: 50%;
  }

  strong {
    color: ${({ theme }) => theme.colors.whitePosca};
    font-size: 2.0rem;
  }

  p {
    color: ${({ theme }) => theme.colors.whitePosca};
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
      color: ${({ theme }) => theme.colors.whitePosca};
      margin: .8rem;

      &:hover {
        color: ${({ theme }) => theme.colors.danger};
        transform: scale(1.15);
        transition: .1s ease;
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
