import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
  font-size: 2rem;
  position: absolute; 
  top: 1rem;
  left: 1rem;
  z-index: 1100;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const MenuHeaderContainer = styled.nav<{ $open: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  button {
    padding: 1.2rem;
    border-radius: 0.8rem;
    transition: ease 0.2s;
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
    width: 100%;
    padding: 4.0rem 2.8rem;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: right;
    align-items: flex-start;
    background: #fff;
    transition: transform 0.2s ease-in-out;
    z-index: 1050;
    transform: ${({ $open }) =>
      $open ? "translateX(0)" : "translateX(-100%)"};
  }

    button {
      margin-top: 1.0rem;
      width: 100%;
      font-size: 1.6rem;
      background-color: #ccc;
      border-radius: 0.8rem;
    }
`;
