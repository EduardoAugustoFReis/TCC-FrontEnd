import BarbersData from "../../components/BarbersData";
import Footer from "../../components/Footer";
import GreetingSection from "../../components/GreetingSection";
import Header from "../../components/Header";
import HomeCarouselBox from "../../components/HomeCarouselBox";
import SectionHome from "../../components/SectionHomePage";
import UserDataSection from "../../components/UserDataSection";
import {
  CarouselHomeContainer,
  GreetingHomeContainer,
  HomerContainer,
  MainHomeContent,
} from "./styles";

const Home = () => {
  return (
    <HomerContainer>
      <Header />
      <MainHomeContent>
        <GreetingHomeContainer>
          <UserDataSection />
          <GreetingSection/>
        </GreetingHomeContainer>

        <CarouselHomeContainer>
          <HomeCarouselBox />
        </CarouselHomeContainer>

        <SectionHome title="Nossos Serviços">
          <p>Nossos serviços</p>
        </SectionHome>

        <SectionHome title="Conheça nosso time de Barbeiros">
          <BarbersData />
        </SectionHome>
      </MainHomeContent>
      <Footer />
    </HomerContainer>
  );
};

export default Home;
