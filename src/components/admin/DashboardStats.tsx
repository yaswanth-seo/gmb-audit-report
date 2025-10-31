import { Card } from "@/components/ui/card";
import { Users, FileText, Activity, CreditCard, TrendingUp, CheckCircle } from "lucide-react";
import { SystemMetrics } from "@/types/admin";

interface DashboardStatsProps {
  metrics: SystemMetrics;
}

export const DashboardStats = ({ metrics }: DashboardStatsProps) => {
  const stats = [
    {
      title: "Total Users",
      value: metrics.totalUsers.toLocaleString(),
      icon: Users,
      trend: "+12%",
      trendUp: true,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Reports Generated",
      value: metrics.totalReports.toLocaleString(),
      icon: FileText,
      trend: "+23%",
      trendUp: true,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Active Today",
      value: metrics.activeUsersToday.toLocaleString(),
      icon: Activity,
      trend: "+8%",
      trendUp: true,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Credits Pool",
      value: metrics.creditsRemaining.toLocaleString(),
      icon: CreditCard,
      trend: "-5%",
      trendUp: false,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      title: "Avg Reports/User",
      value: metrics.avgReportsPerUser.toFixed(1),
      icon: TrendingUp,
      trend: "+15%",
      trendUp: true,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      title: "System Health",
      value: metrics.systemHealth,
      icon: CheckCircle,
      trend: "Optimal",
      trendUp: true,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400 mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
              <div className="flex items-center gap-1">
                <span
                  className={`text-xs font-medium ${
                    stat.trendUp ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.trend}
                </span>
                <span className="text-xs text-slate-500">vs last month</span>
              </div>
            </div>
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
