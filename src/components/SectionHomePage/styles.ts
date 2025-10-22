import styled from "styled-components";

export const SectionHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1.0rem 0rem;
  border: 3px solid ${({theme}) => theme.colors.gold};
  border-radius: 0.8rem;
  padding: 1.2rem;

  h2 {
    font-size: 2.4rem;
    color: ${({theme}) => theme.colors.white};
  }
`;