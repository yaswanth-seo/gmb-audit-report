import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { UserManagementTable } from "@/components/admin/UserManagementTable";
import { ReportsTable } from "@/components/admin/ReportsTable";
import { AnalyticsCharts } from "@/components/admin/AnalyticsCharts";
import { SettingsPanel } from "@/components/admin/SettingsPanel";
import { ActivityLog } from "@/components/admin/ActivityLog";
import { User, Report, ActivityLogEntry, SystemMetrics, ChartData } from "@/types/admin";

// Mock Data
const mockMetrics: SystemMetrics = {
  totalUsers: 1247,
  totalReports: 8932,
  activeUsersToday: 342,
  creditsRemaining: 125000,
  avgReportsPerUser: 7.2,
  systemHealth: "healthy",
};

const mockUsers: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: `user-${i + 1}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  signUpDate: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
  signUpIP: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
  creditsAllocated: 100 + Math.floor(Math.random() * 900),
  creditsUsed: Math.floor(Math.random() * 100),
  reportsGenerated: Math.floor(Math.random() * 50),
  status: ["active", "suspended", "blacklisted"][Math.floor(Math.random() * 3)] as User["status"],
}));

const mockReports: Report[] = Array.from({ length: 200 }, (_, i) => ({
  id: `report-${Math.random().toString(36).substring(7)}`,
  businessName: `Business ${i + 1}`,
  userEmail: `user${Math.floor(Math.random() * 50) + 1}@example.com`,
  generatedDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
  reportUrl: `/report/${i + 1}`,
  status: ["success", "failed", "processing"][Math.floor(Math.random() * 3)] as Report["status"],
  creditsUsed: Math.floor(Math.random() * 10) + 1,
}));

const mockReportsOverTime: ChartData[] = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  }),
  reports: Math.floor(Math.random() * 200) + 100,
  users: Math.floor(Math.random() * 50) + 20,
  credits: Math.floor(Math.random() * 500) + 200,
}));

const mockTopUsers = Array.from({ length: 10 }, (_, i) => ({
  name: `User ${i + 1}`,
  reports: Math.floor(Math.random() * 40) + 10,
}));

const mockCreditDistribution = [
  { name: "0-25%", value: 234 },
  { name: "25-50%", value: 456 },
  { name: "50-75%", value: 321 },
  { name: "75-100%", value: 236 },
];

const mockActivityLogs: ActivityLogEntry[] = Array.from({ length: 50 }, (_, i) => ({
  id: `log-${i + 1}`,
  timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
  action: [
    "User Created",
    "Credits Added",
    "User Suspended",
    "Report Generated",
    "Settings Updated",
    "User Edited",
  ][Math.floor(Math.random() * 6)],
  adminUser: `Admin ${Math.floor(Math.random() * 3) + 1}`,
  targetUser: Math.random() > 0.5 ? `user${Math.floor(Math.random() * 50) + 1}@example.com` : undefined,
  ipAddress: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
  details: `Action performed with ID ${i + 1}`,
}));

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 w-full">
      <AdminSidebar />

      <main className="lg:pl-64 min-h-screen">
        <div className="p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-slate-400">
              Manage users, reports, and system settings for your GMB Audit SaaS
            </p>
          </div>

          {/* Overview Section */}
          <section id="overview" className="mb-12">
            <DashboardStats metrics={mockMetrics} />
          </section>

          {/* Analytics Section */}
          <section id="analytics" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Analytics & Insights</h2>
            <AnalyticsCharts
              reportsOverTime={mockReportsOverTime}
              topUsers={mockTopUsers}
              creditDistribution={mockCreditDistribution}
            />
          </section>

          {/* Users Section */}
          <section id="users" className="mb-12">
            <UserManagementTable users={mockUsers} />
          </section>

          {/* Reports Section */}
          <section id="reports" className="mb-12">
            <ReportsTable reports={mockReports} />
          </section>

          {/* Settings Section */}
          <section id="settings" className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">System Settings</h2>
            <SettingsPanel />
          </section>

          {/* Activity Logs Section */}
          <section id="logs" className="mb-12">
            <ActivityLog logs={mockActivityLogs} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
