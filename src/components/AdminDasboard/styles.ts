import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const AdminDashboardContainer = styled.div`
  display: flex;
  justify-content: center;
<<<<<<< HEAD
  padding: 2rem;
=======
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 100%;
  width: 80.0rem;
  margin: 0 auto;
>>>>>>> 08d914043d5df5e3a2b6e5c2e868013fff81d5c8

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 100%;
    width: 28.0rem;
  }
`;
