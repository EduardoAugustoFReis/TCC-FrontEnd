import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { IAppointment } from "../../../types";
import { useTheme } from "styled-components";

interface MostSelectedServicesChartProps {
  appointments: IAppointment[];
}

export default function MostSelectedServicesChart({ appointments }: MostSelectedServicesChartProps) {
  const theme = useTheme();

  // Contagem de serviços mais selecionados
  const serviceCounts: Record<string, number> = {};

  appointments.forEach((a) => {
    if (a.service?.name) {
      serviceCounts[a.service.name] = (serviceCounts[a.service.name] || 0) + 1;
    }
  });

  const data = Object.entries(serviceCounts).map(([name, value]) => ({ name, value }));

  // Caso não haja dados
  if (data.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", color: theme.colors.whitePosca }}>
        Nenhum serviço agendado ainda.
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: 320 }}>
      <h3 style={{ textAlign: "center", marginBottom: "1rem", fontSize: "2.0rem", color: theme.colors.whitePosca }}>
        Serviços mais selecionados
      </h3>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#4CAF50" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
