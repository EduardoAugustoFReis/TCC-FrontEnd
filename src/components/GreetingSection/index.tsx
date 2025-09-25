import ScheduleButton from "../ScheduleButton";
import { GreetingSectionContainer } from "./styles";

const GreetingSection = () => {
  return (
    <GreetingSectionContainer>
      <h2>Barbearia virual</h2>
      <p>Venha conhecer nossos serviços e profissionais</p>
      <p>Agende já o seu corte.</p>
      <ScheduleButton>Agendar corte</ScheduleButton>
    </GreetingSectionContainer>
  );
};

export default GreetingSection;
