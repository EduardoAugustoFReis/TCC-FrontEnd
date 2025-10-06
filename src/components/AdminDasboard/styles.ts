import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const AdminDashboardContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 2.0rem;
  }
`;