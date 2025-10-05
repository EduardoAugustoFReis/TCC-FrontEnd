import type { IAppointment } from "../../../types";
import { ClientDashboardContainer } from "./styles";

interface ClientDashboardProps {
  appointments: IAppointment[];
}

const ClientDashboard = ({ appointments }: ClientDashboardProps) => {
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
          </div>
        );
      })}
    </ClientDashboardContainer>
  );
};

export default ClientDashboard;
