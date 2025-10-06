import { api } from "../../../services/api";
import type { IAppointment } from "../../../types";
import { ClientDashboardContainer } from "./styles";

interface ClientDashboardProps {
  appointments: IAppointment[];
  fetchAppointments: () => Promise<void>;
}

const ClientDashboard = ({ appointments, fetchAppointments }: ClientDashboardProps) => {

  const handleDeleteAppointment = async (id: number) => {
    const confirmDelete = confirm("Tem certeza que deseja excluir esse compromisso?");
    
    if (confirmDelete){
      try {
        await api.delete(`/appointments/${id}`);
        alert("Agendamento deletado com sucesso.");
        fetchAppointments();
      } catch (error) {
        console.log("Erro ao deletar agendamento.", error);
      }
    }

  }

  return (
    <ClientDashboardContainer>
      {appointments.map((appointment) => {
        const start = new Date(appointment.startTime);
        const end = new Date(appointment.endTime);

        return (
          <div key={appointment.id} className="appointment-card">
            <h4>{appointment.service?.name}</h4>
            <p>
              <strong>Barbeiro:</strong> {appointment.barber?.name}
            </p>
            <p>
              <strong>Data:</strong> {start.toLocaleDateString()}
            </p>
            <p>
              <strong>Horário: </strong>
              {start.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              até{" "}
              {end.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={`status ${appointment.status}`}>
                {appointment.status}
              </span>
            </p>
            
            <button onClick={() =>handleDeleteAppointment(appointment.id)}>Cancelar agendamento</button>
          </div>
        );
      })}
    </ClientDashboardContainer>
  );
};

export default ClientDashboard;
