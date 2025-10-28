import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const HeaderContainer = styled.header`
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 3px solid ${({theme}) => theme.colors.gold};
  background-color: ${({theme}) => theme.colors.darkJetBlack};

  img {
    width: 12.0rem;
    height: 12.0rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const DivLogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: ${({theme}) => theme.colors.lightGold};
  font-weight: 700;
  > p{
    font-family: 'bookman old style' ;
    height: 80px;
    line-height: 84px;
    transform: scaleY(1.7); 
    transform-origin: center;
  }

  @media (max-width: 980px) {
    > p{
      display: none; 
    }
  }
`;
