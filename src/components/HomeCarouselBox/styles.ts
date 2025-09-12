import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const HomeCarouselBoxContainer = styled.div`
  max-width: 90.0rem;
  padding: 1.2rem;
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 40.0rem;
  }
`;