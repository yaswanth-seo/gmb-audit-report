export interface User {
  id: string;
  name: string;
  email: string;
  signUpDate: string;
  signUpIP: string;
  creditsAllocated: number;
  creditsUsed: number;
  reportsGenerated: number;
  status: "active" | "suspended" | "blacklisted";
}

export interface Report {
  id: string;
  businessName: string;
  userEmail: string;
  generatedDate: string;
  reportUrl: string;
  status: "success" | "failed" | "processing";
  creditsUsed: number;
}

export interface ActivityLogEntry {
  id: string;
  timestamp: string;
  action: string;
  adminUser: string;
  targetUser?: string;
  ipAddress: string;
  details: string;
}

export interface SystemMetrics {
  totalUsers: number;
  totalReports: number;
  activeUsersToday: number;
  creditsRemaining: number;
  avgReportsPerUser: number;
  systemHealth: "healthy" | "warning" | "critical";
}

export interface ChartData {
  date: string;
  reports: number;
  users?: number;
  credits?: number;
}
