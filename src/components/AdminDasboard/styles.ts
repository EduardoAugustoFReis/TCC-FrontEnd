import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const AdminDashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 100%;
  width: 80.0rem;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 100%;
    width: 28.0rem;
  }
`;
