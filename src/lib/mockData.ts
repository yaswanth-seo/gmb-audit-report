export interface MockReport {
  id: string;
  userId: string;
  businessName: string;
  generatedAt: string;
  creditsUsed: number;
  data: any;
}

const MOCK_REPORTS_KEY = "mockReports";

// Sample report data template
const sampleReportTemplate = {
  name: "Sample Business",
  address: "123 Main St, City, State 12345",
  phone: "+1 (555) 123-4567",
  website: "https://example.com",
  rating: 4.5,
  reviews_count: 142,
  category: "Local Business",
};

export const mockData = {
  // Initialize with sample reports
  initializeSampleReports(userId: string): void {
    const existingReports = this.getAllReports();
    if (existingReports.length === 0) {
      const sampleReports: MockReport[] = [
        {
          id: `report-${Date.now()}-1`,
          userId,
          businessName: "Premium Carpet Cleaning",
          generatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          creditsUsed: 1,
          data: { ...sampleReportTemplate, name: "Premium Carpet Cleaning" },
        },
        {
          id: `report-${Date.now()}-2`,
          userId,
          businessName: "Barbara Oliver Jewelry",
          generatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          creditsUsed: 1,
          data: { ...sampleReportTemplate, name: "Barbara Oliver Jewelry" },
        },
        {
          id: `report-${Date.now()}-3`,
          userId,
          businessName: "Local Plumbing Service",
          generatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          creditsUsed: 1,
          data: { ...sampleReportTemplate, name: "Local Plumbing Service" },
        },
      ];
      localStorage.setItem(MOCK_REPORTS_KEY, JSON.stringify(sampleReports));
    }
  },

  // Get all reports
  getAllReports(): MockReport[] {
    const reportsStr = localStorage.getItem(MOCK_REPORTS_KEY);
    if (!reportsStr) return [];
    return JSON.parse(reportsStr);
  },

  // Get reports for a specific user
  getUserReports(userId: string): MockReport[] {
    return this.getAllReports().filter((report) => report.userId === userId);
  },

  // Get single report by ID
  getReport(id: string): MockReport | null {
    const reports = this.getAllReports();
    return reports.find((report) => report.id === id) || null;
  },

  // Create new report
  createReport(userId: string, businessName: string): MockReport {
    const newReport: MockReport = {
      id: `report-${Date.now()}`,
      userId,
      businessName,
      generatedAt: new Date().toISOString(),
      creditsUsed: 1,
      data: { ...sampleReportTemplate, name: businessName },
    };

    const reports = this.getAllReports();
    reports.unshift(newReport);
    localStorage.setItem(MOCK_REPORTS_KEY, JSON.stringify(reports));

    return newReport;
  },

  // Delete report
  deleteReport(id: string): boolean {
    const reports = this.getAllReports();
    const filtered = reports.filter((report) => report.id !== id);
    if (filtered.length < reports.length) {
      localStorage.setItem(MOCK_REPORTS_KEY, JSON.stringify(filtered));
      return true;
    }
    return false;
  },
};
