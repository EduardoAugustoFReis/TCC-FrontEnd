import type { ReactNode } from "react";
import { ScheduleButtonContainer } from "./styles";

interface ScheduleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bg?: string;
  bgHover?: string;
  color?: string;
  width?: string;
  fontSize?: string;
}

const ScheduleButton = ({
  children,
  bg,
  bgHover,
  color,
  width,
  fontSize,
}: ScheduleButtonProps) => {
  return (
    <ScheduleButtonContainer
      bg={bg}
      bgHover={bgHover}
      color={color}
      width={width}
      fontSize={fontSize}
    >
      {children}
    </ScheduleButtonContainer>
  );
};

export default ScheduleButton;
