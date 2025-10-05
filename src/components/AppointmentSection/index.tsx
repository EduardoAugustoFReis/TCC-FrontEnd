import { useEffect, useState } from "react";
import { AppointmentContainer, AppointmentForm } from "./styles";
import type { IBaber, IService } from "../../types";
import { api } from "../../services/api";

interface AppointmentSectionProps {
  onAppointmentCreated?: () => void;
}

const AppointmentSection = ({
  onAppointmentCreated,
}: AppointmentSectionProps) => {
  const [barbers, setBarbers] = useState<IBaber[]>([]);
  const [services, setServices] = useState<IService[]>([]);
  const [selectBarber, setSelectBarber] = useState("");
  const [selectService, setSelectService] = useState("");
  const [startTime, setStartTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseBarbers = await api.get<IBaber[]>(`/users/barbers`);
        setBarbers(responseBarbers.data);

        const responseServices = await api.get<IService[]>(`/services`);
        setServices(responseServices.data);
      } catch (error) {
        console.log(
          "Erro ao buscar dados da api - barbeiros e serviços",
          error
        );
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectBarber || !selectService || !startTime) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const dateFormat = new Date(startTime).toISOString();
      await api.post(
        `/appointments/barbers/${selectBarber}/services/${selectService}`,
        { startTime: dateFormat }
      );

      alert("Agendamento concluído com sucesso.");

      setSelectBarber("");
      setSelectService("");
      setStartTime("");

      if (onAppointmentCreated) {
        onAppointmentCreated();
      }
    } catch (error) {
      console.log("Erro ao efetuar agendamento", error);
    }
  };

  return (
    <AppointmentContainer>
      <AppointmentForm onSubmit={handleSubmit}>
        <label htmlFor="barber">Escolha o barbeiro: </label>
        <select
          name="barber"
          id="barber"
          value={selectBarber}
          onChange={(e) => setSelectBarber(e.target.value)}
        >
          <option value="">Selecione um barbeiro</option>
          {barbers.map((barber) => (
            <option key={barber.id} value={barber.id}>
              {barber.name}
            </option>
          ))}
        </select>

        <label htmlFor="service">Escolha o serviço: </label>
        <select
          name="service"
          id="service"
          value={selectService}
          onChange={(e) => setSelectService(e.target.value)}
        >
          <option value="">Selecione um serviço:</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>

        <label htmlFor="startTime">Data e hora: </label>
        <input
          type="datetime-local"
          id="startTime"
          name="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <button type="submit">Agendar</button>
      </AppointmentForm>
    </AppointmentContainer>
  );
};

export default AppointmentSection;
