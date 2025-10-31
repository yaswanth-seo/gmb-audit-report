import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download } from "lucide-react";
import { ActivityLogEntry } from "@/types/admin";
import { useState } from "react";

interface ActivityLogProps {
  logs: ActivityLogEntry[];
}

export const ActivityLog = ({ logs }: ActivityLogProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLogs = logs.filter(
    (log) =>
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.adminUser.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getActionBadge = (action: string) => {
    if (action.includes("suspend") || action.includes("delete")) {
      return <Badge className="bg-red-500/10 text-red-500 border-red-500/20">{action}</Badge>;
    }
    if (action.includes("create") || action.includes("add")) {
      return <Badge className="bg-green-500/10 text-green-500 border-green-500/20">{action}</Badge>;
    }
    if (action.includes("edit") || action.includes("update")) {
      return <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">{action}</Badge>;
    }
    return <Badge className="bg-slate-500/10 text-slate-500 border-slate-500/20">{action}</Badge>;
  };

  return (
    <Card className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Activity Logs</h3>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export Logs
        </Button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search activity logs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-slate-900 border-slate-700 text-white"
        />
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto">
        {filteredLogs.map((log) => (
          <div
            key={log.id}
            className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-slate-600 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                {getActionBadge(log.action)}
                <span className="text-sm text-slate-400">
                  by <span className="text-white font-medium">{log.adminUser}</span>
                </span>
              </div>
              <span className="text-xs text-slate-500">
                {new Date(log.timestamp).toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-slate-300 mb-2">{log.details}</p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500">
              {log.targetUser && (
                <span>
                  Target: <span className="text-slate-400">{log.targetUser}</span>
                </span>
              )}
              <span>
                IP: <span className="font-mono text-slate-400">{log.ipAddress}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredLogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400">No activity logs found</p>
        </div>
      )}
    </Card>
  );
};
