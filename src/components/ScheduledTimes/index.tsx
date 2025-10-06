import { ScheduledTimesContainer } from './styles'
import type { IAppointment } from '../../types';
import useAuth from '../../context/Auth/useAuth';
import ClientDashboard from './ClientDashboard';
import BarberDashboard from './BarberDashboard';

interface ScheduledTimesProps {
  appointments: IAppointment[];
  fetchAppointments: () => Promise<void>;
};

const ScheduledTimes = ({ appointments, fetchAppointments }: ScheduledTimesProps) => {
  const { user } = useAuth();
  
  return (
    <ScheduledTimesContainer> 
      {user?.role === "cliente" && <ClientDashboard fetchAppointments={fetchAppointments} appointments={appointments}/>}
      {user?.role === "barbeiro" && <BarberDashboard fetchAppointments={fetchAppointments} appointments={appointments}/>}
    </ScheduledTimesContainer>
  )
}

export default ScheduledTimes;
