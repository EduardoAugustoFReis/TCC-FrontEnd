import styled from "styled-components";

export const UserDataSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.2rem;
  border: 1px solid #000;

  img {
    border-radius: 50%;
    height: 15.0rem;
    width: 15.0rem;
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
`;