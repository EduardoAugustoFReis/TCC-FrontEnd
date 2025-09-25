import styled from "styled-components";

interface ButtonProps {
  bg?: string;
  bgHover?: string;
  color?: string;
  width?: string;
  fontSize?: string;
}

export const ScheduleButtonContainer = styled.button<ButtonProps>`
  font-size: ${({fontSize}) => fontSize || "1.6rem"};
  padding: 1.2rem;
  border-radius: 0.8rem;
  width: ${({width}) => width || "15.0rem"};
  background: ${({bg}) => bg || "#ccc"};
  color: ${({color}) => color || "#000"};
  transition: transform 0.3s ease, background-color 0.3s ease;


  &:hover {
    transform: scale(1.1);
    background-color: ${({bgHover, bg}) => bgHover || bg || "#ccc"};
  }
`;