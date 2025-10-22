import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  height: 12.5rem;
  border-top: 3px solid ${({theme}) => theme.colors.gold};


  img {
    width: 12.0rem;
    height: 12.0rem;
  }
`;