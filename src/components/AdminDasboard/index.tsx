import type { IAppointment } from "../../types";
import MostSelectedServicesChart from "./MostSelectedServicesChart";
import StatusChart from "./StatusChart";
import { AdminDashboardContainer } from "./styles";

interface AdminDashboardProps {
  appointments: IAppointment[];
}

const AdminDashboard = ({ appointments }: AdminDashboardProps) => {
  return (
    <AdminDashboardContainer>
      <StatusChart appointments={appointments} />
      <MostSelectedServicesChart appointments={appointments} />
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
