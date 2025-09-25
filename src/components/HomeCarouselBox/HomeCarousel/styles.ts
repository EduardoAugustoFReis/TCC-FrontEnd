import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const HomeCarouselContainer = styled.div`
  
  .carousel {
    cursor: grab;
    overflow: hidden;
  }

  .innerCarousel {
    display: flex;
    gap: 0.8rem;
  }

  .image {
    min-height: 20.0rem;
    min-width: 40.0rem;

    img {
      height: 90%;
      width: 100%;
      border-radius: 0.8rem;
      pointer-events: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {

    .image {
      min-width: 22.0rem;
    }
  }
`;