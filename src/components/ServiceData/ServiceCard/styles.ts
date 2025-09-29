import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const ServiceCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #000;
  border-radius: 0.8rem;
  padding: 1.8rem;

  .textBox {
    margin: 1.0rem 0rem;
    h3 {
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }

    p {
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
  }

  @media (max-width: ${breakpoints.mobile}) {
    .serviceCard {
      flex-direction: column;
    }
  }
`;
