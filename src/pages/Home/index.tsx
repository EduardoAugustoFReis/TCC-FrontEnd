import { useState, useEffect } from "react";
import { api } from "../../services/api";
import type { IAppointment } from "../../types";
import AppointmentSection from "../../components/AppointmentSection";
import BarbersData from "../../components/BarbersData";
import Footer from "../../components/Footer";
import GreetingSection from "../../components/GreetingSection";
import Header from "../../components/Header";
import HomeCarouselBox from "../../components/HomeCarouselBox";
import ScheduledTimes from "../../components/ScheduledTimes";
import SectionHome from "../../components/SectionHomePage";
import ServicesData from "../../components/ServiceData";
import UserDataSection from "../../components/UserDataSection";
import useAuth from "../../context/Auth/useAuth";

import {
  CarouselHomeContainer,
  GreetingHomeContainer,
  HomerContainer,
  MainHomeContent,
} from "./styles";

const Home = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  const fetchAppointments = async () => {
    try {
      let response;
      if (user?.role === "cliente") {
        response = await api.get<IAppointment[]>(`/appointments/client`);
      } else {
        response = await api.get<IAppointment[]>(`/appointments/barbers`);
      }
      setAppointments(response.data);
    } catch (error) {
      console.log("Erro ao buscar compromissos", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchAppointments();
    }
  }, [user?.role]);

  return (
    <HomerContainer>
      <Header />
      <MainHomeContent>
        <GreetingHomeContainer>
          <UserDataSection />
          <GreetingSection />
        </GreetingHomeContainer>

        <CarouselHomeContainer>
          <HomeCarouselBox />
        </CarouselHomeContainer>

        <SectionHome title="Conheça nossos serviços">
          <ServicesData />
        </SectionHome>

        <SectionHome title="Conheça nosso time de barbeiros">
          <BarbersData />
        </SectionHome>

        <SectionHome title="Agende o seu horário">
          <AppointmentSection onAppointmentCreated={fetchAppointments} />
        </SectionHome>

        {(user?.role === "cliente" || user?.role === "barbeiro") && (
            <SectionHome title="Seus horários marcados">
              <ScheduledTimes
                fetchAppointments={fetchAppointments}
                appointments={appointments}
              />
            </SectionHome>
          )}
      </MainHomeContent>
      <Footer />
    </HomerContainer>
  );
};

export default Home;
