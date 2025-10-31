import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ChartData } from "@/types/admin";

interface AnalyticsChartsProps {
  reportsOverTime: ChartData[];
  topUsers: { name: string; reports: number }[];
  creditDistribution: { name: string; value: number }[];
}

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

export const AnalyticsCharts = ({
  reportsOverTime,
  topUsers,
  creditDistribution,
}: AnalyticsChartsProps) => {
  return (
    <div className="space-y-6">
      {/* Reports Over Time */}
      <Card className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
        <h3 className="text-lg font-bold text-white mb-4">Reports Generated (Last 30 Days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={reportsOverTime}>
            <defs>
              <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
            />
            <Area
              type="monotone"
              dataKey="reports"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorReports)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Users */}
        <Card className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
          <h3 className="text-lg font-bold text-white mb-4">Top 10 Active Users</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topUsers} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis dataKey="name" type="category" stroke="#94a3b8" width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="reports" fill="#10b981" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Credit Distribution */}
        <Card className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
          <h3 className="text-lg font-bold text-white mb-4">Credit Usage Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={creditDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {creditDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* User Growth */}
      <Card className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
        <h3 className="text-lg font-bold text-white mb-4">User Growth & Activity</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={reportsOverTime}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#8b5cf6"
              strokeWidth={2}
              name="New Users"
            />
            <Line
              type="monotone"
              dataKey="reports"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Reports"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};
