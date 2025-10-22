import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const ServiceDataContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1.2rem;
  margin: 1.0rem 0rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;
