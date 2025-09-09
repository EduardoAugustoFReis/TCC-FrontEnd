import styled from "styled-components";

export const MenuHeaderContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1.0rem;

  button {
    padding: 1.2rem;
    border-radius: 0.8rem;
    transition: ease 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;