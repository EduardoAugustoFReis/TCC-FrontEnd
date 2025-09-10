import Header from "../../components/Header";
import SectionHome from "../../components/SectionHomePage";
import UserDataSection from "../../components/UserDataSection";
import { HomerContainer, MainHomeContent } from "./styles";

const Home = () => {
  return (
    <HomerContainer>
      <Header />
      <MainHomeContent>
        <h1>Home</h1>
        <UserDataSection />
        <SectionHome title="Nossos Serviços">
          <p>Nossos serviços</p>
        </SectionHome>

         <SectionHome title="Conheça nosso time de Barbeiros">
          <p>Nossos barbeiros</p>
        </SectionHome>

      </MainHomeContent>

    </HomerContainer>
  );
};

export default Home;
