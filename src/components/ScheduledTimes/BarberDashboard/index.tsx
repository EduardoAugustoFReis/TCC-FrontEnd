import { api } from "../../../services/api";
import type { IAppointment } from "../../../types";
import { BarberDashboardContainer } from "./styles";

interface BarberDashboardProps {
  appointments: IAppointment[];
  fetchAppointments: () => Promise<void>;
}

const BarberDashboard = ({ appointments,  fetchAppointments}: BarberDashboardProps) => {

  const handleChangeStatus = async (appointmentId: number, status: "confirmed" | "canceled") => {
    try {
      await api.patch(`/appointments/${appointmentId}`, {status});
      alert(`Agendamento ${status} com sucesso.`);
      fetchAppointments();
    } catch (error) {
      console.error("Erro ao mudar status", error);
      alert("Erro ao mudar status");
    }
  }

  return (
    <BarberDashboardContainer>
      {appointments.map((appointment) => {
        const start = new Date(appointment.startTime);
        const end = new Date(appointment.endTime);

        return (
          <div key={appointment.id} className="appointment-card">
            <h4>{appointment.service?.name}</h4>
            <p>
              <strong>Cliente: </strong> {appointment.client?.name}
            </p>
            <p>
              <strong>Data</strong> {start.toLocaleDateString()}
            </p>

            <p>
              <strong>Horário: </strong>
              {start.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })} {""}
              até {""}
              {end.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <p>
              <strong>Status:</strong>
              <span className={`status ${appointment.status}`}>
                {appointment.status}
              </span>
            </p>

            {appointment.status === "pending" && (
              <div className={`buttons`}>
                <button className="confirm" onClick={() => handleChangeStatus(appointment.id, "confirmed")}>Confirmar</button>
                <button className="cancel" onClick={() => handleChangeStatus(appointment.id, "canceled")}>Cancelar</button>
              </div>
            )}
          </div>
        );
      })}
    </BarberDashboardContainer>
  );
};

export default BarberDashboard;
