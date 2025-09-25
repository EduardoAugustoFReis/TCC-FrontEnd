import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const HomerContainer = styled.div`
  
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const MainHomeContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;

  }
`;

export const GreetingHomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    
  }
`;

export const CarouselHomeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;

  @media (max-width: ${breakpoints.mobile}) {
    
  }

`;
