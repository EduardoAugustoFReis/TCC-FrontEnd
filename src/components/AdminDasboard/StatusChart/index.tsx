import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import type { IAppointment } from "../../../types";

interface StatusChartProps {
  appointments: IAppointment[];
}

const COLORS = ["#4CAF50", "#FFC107", "#F44336"]; 
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontSize: "0.9rem" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function StatusChart({ appointments }: StatusChartProps) {
  const data = [
    {
      name: "Confirmados",
      value: appointments.filter((a) => a.status === "confirmed").length,
    },
    {
      name: "Pendentes",
      value: appointments.filter((a) => a.status === "pending").length,
    },
    {
      name: "Cancelados",
      value: appointments.filter((a) => a.status === "canceled").length,
    },
  ].filter((item) => item.value > 0);

  return (
    <div style={{ width: "100%", height: 320 }}>
      <h3 style={{ textAlign: "center", marginBottom: "0.8rem", fontSize: "2.0rem" }}>
        Status dos Agendamentos
      </h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value) => (
              <span style={{ color: "#333", fontSize: "1.4rem" }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
