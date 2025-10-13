import { useEffect, useState } from "react";
import { AppointmentContainer, AppointmentForm, TimeSelect } from "./styles";
import type { IBaber, IService, ISlot } from "../../types";
import { api } from "../../services/api";

interface AppointmentSectionProps {
  onAppointmentCreated?: () => void;
}

const AppointmentSection = ({
  onAppointmentCreated,
}: AppointmentSectionProps) => {
  const [barbers, setBarbers] = useState<IBaber[]>([]);
  const [services, setServices] = useState<IService[]>([]);
  const [availableSlot, setAvailableSlot] = useState<ISlot[]>([]);

  const [selectBarber, setSelectBarber] = useState("");
  const [selectService, setSelectService] = useState("");
  const [startTime, setStartTime] = useState("");
  const [date, setDate] = useState("");

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

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      if (!selectBarber || !selectService || !date) return;
      try {
        const response = await api.get(
          `appointments/barbers/${selectBarber}/available`,
          { params: { date, serviceId: selectService } }
        );

        console.log(response.data);
        setAvailableSlot(response.data.availableSlots);
      } catch (error) {
        console.log("Erro ao buscar horários disponíveis", error);
      }
    };

    fetchAvailableSlots();
  }, [selectBarber, selectService, date]);

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
        <label htmlFor="date">Escolha a data: </label>
        <input
          id="date"
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

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

        <label htmlFor="startTime">Escolha o horário: </label>
        <TimeSelect
          name="startTime"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        >
          <option value="">Selecione um horário</option>
          {availableSlot.map((slot, index) => {
            const start = new Date(slot.start);
            const end = new Date(slot.end);
            const formattedStart = start.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            });
            const formattedEnd = end.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <option key={index} value={slot.start}>
                {`${formattedStart} - ${formattedEnd}`}
              </option>
            );
          })}
        </TimeSelect>

        <button type="submit">Agendar</button>
      </AppointmentForm>
    </AppointmentContainer>
  );
};

export default AppointmentSection;
