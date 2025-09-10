import type { ReactNode } from "react";
import { SectionHomeContainer } from "./styles";

interface SectionHomeProps {
  children: ReactNode;
  title?: string;
}

const SectionHome = ({ children, title }: SectionHomeProps) => {
  return (
    <SectionHomeContainer>
      <h2>{title}</h2>
      {children}
    </SectionHomeContainer>
  );
};

export default SectionHome;
