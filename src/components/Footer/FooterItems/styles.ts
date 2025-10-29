import styled from "styled-components";

export const FooterItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.whitePosca};
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.whitePosca};
      transition: .1s ease;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;
