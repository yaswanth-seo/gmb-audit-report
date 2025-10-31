import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MoreVertical, Eye, Download, Trash2, Copy } from "lucide-react";
import { Report } from "@/types/admin";

interface ReportsTableProps {
  reports: Report[];
}

export const ReportsTable = ({ reports }: ReportsTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredReports = reports.filter(
    (report) =>
      report.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.userEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReports.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedReports = filteredReports.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status: Report["status"]) => {
    const variants = {
      success: "bg-green-500/10 text-green-500 border-green-500/20",
      processing: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      failed: "bg-red-500/10 text-red-500 border-red-500/20",
    };
    return <Badge className={variants[status]}>{status}</Badge>;
  };

  return (
    <Card className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Reports Management</h3>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export List
        </Button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search by business name or user email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-slate-900 border-slate-700 text-white"
        />
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700 hover:bg-slate-800/50">
              <TableHead className="text-slate-300">Report ID</TableHead>
              <TableHead className="text-slate-300">Business</TableHead>
              <TableHead className="text-slate-300">User</TableHead>
              <TableHead className="text-slate-300">Generated</TableHead>
              <TableHead className="text-slate-300">Credits</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedReports.map((report) => (
              <TableRow key={report.id} className="border-slate-700 hover:bg-slate-800/30">
                <TableCell className="font-mono text-sm text-slate-300">
                  {report.id.slice(0, 8)}...
                </TableCell>
                <TableCell>
                  <div className="font-medium text-white max-w-[200px] truncate">
                    {report.businessName}
                  </div>
                </TableCell>
                <TableCell className="text-slate-300">{report.userEmail}</TableCell>
                <TableCell className="text-slate-300">
                  {new Date(report.generatedDate).toLocaleString()}
                </TableCell>
                <TableCell className="text-slate-300">{report.creditsUsed}</TableCell>
                <TableCell>{getStatusBadge(report.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-slate-900 border-slate-700">
                      <DropdownMenuItem className="gap-2 text-slate-300 focus:bg-slate-800 focus:text-white">
                        <Eye className="h-4 w-4" />
                        View Report
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-slate-300 focus:bg-slate-800 focus:text-white">
                        <Copy className="h-4 w-4" />
                        Copy URL
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-slate-300 focus:bg-slate-800 focus:text-white">
                        <Download className="h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-red-400 focus:bg-red-500/10 focus:text-red-400">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-slate-400">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, filteredReports.length)} of{" "}
          {filteredReports.length} reports
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};
