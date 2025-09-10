import styled from "styled-components";

export const FooterItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.0rem;

  h3 {
    font-size: 1.8rem;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      font-size: 1.4rem;
    }

  }
`;