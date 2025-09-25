import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const UserDataSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.2rem;
  width: fit-content;

  img {
    border-radius: 50%;
    height: 15rem;
    width: 15rem;
  }

  h2 {
    font-size: 2.8rem;
  }
  h3 {
    font-size: 2.2rem;
  }
  p {
    font-size: 1.6rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      height: 12rem;
      width: 12rem;
    }

    h2 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 2em;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;
