import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ReportsList } from "@/components/dashboard/ReportsList";
import { GenerateReportModal } from "@/components/dashboard/GenerateReportModal";
import { TopUpCreditsModal } from "@/components/dashboard/TopUpCreditsModal";
import { useMockAuth } from "@/hooks/useMockAuth";
import { mockData, type MockReport } from "@/lib/mockData";

export default function UserDashboard() {
  const { user } = useMockAuth();
  const [reports, setReports] = useState<MockReport[]>([]);
  const [generateModalOpen, setGenerateModalOpen] = useState(false);
  const [topUpModalOpen, setTopUpModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      // Initialize sample reports if needed
      mockData.initializeSampleReports(user.id);
      
      // Load user reports
      const userReports = mockData.getUserReports(user.id);
      setReports(userReports);
    }
  }, [user]);

  const refreshReports = () => {
    if (user) {
      const userReports = mockData.getUserReports(user.id);
      setReports(userReports);
    }
  };

  // Calculate monthly reports (last 30 days)
  const monthlyReports = reports.filter((report) => {
    const reportDate = new Date(report.generatedAt);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return reportDate >= thirtyDaysAgo;
  }).length;

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user?.name || "User"}! 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Here's your GMB audit dashboard overview
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <StatsCards
            totalReports={reports.length}
            monthlyReports={monthlyReports}
            onTopUp={() => setTopUpModalOpen(true)}
          />

          {/* Reports List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Recent Reports</h2>
              <Button onClick={() => setGenerateModalOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
            <ReportsList reports={reports} />
          </div>

          {/* Generate Button (Mobile) */}
          <div className="lg:hidden fixed bottom-6 right-6">
            <Button
              size="lg"
              className="h-14 w-14 rounded-full shadow-lg"
              onClick={() => setGenerateModalOpen(true)}
            >
              <Plus className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </main>

      {/* Modals */}
      <GenerateReportModal
        open={generateModalOpen}
        onOpenChange={(open) => {
          setGenerateModalOpen(open);
          if (!open) refreshReports();
        }}
        onInsufficientCredits={() => setTopUpModalOpen(true)}
      />
      <TopUpCreditsModal
        open={topUpModalOpen}
        onOpenChange={setTopUpModalOpen}
      />
    </div>
  );
}
