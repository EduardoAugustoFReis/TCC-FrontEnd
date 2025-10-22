// styles.ts
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const BarbersDataContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;
