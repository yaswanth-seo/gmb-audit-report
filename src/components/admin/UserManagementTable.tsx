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
import { Search, MoreVertical, Edit, Ban, Eye, Download } from "lucide-react";
import { User } from "@/types/admin";

interface UserManagementTableProps {
  users: User[];
}

export const UserManagementTable = ({ users }: UserManagementTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status: User["status"]) => {
    const variants = {
      active: "bg-green-500/10 text-green-500 border-green-500/20",
      suspended: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      blacklisted: "bg-red-500/10 text-red-500 border-red-500/20",
    };
    return <Badge className={variants[status]}>{status}</Badge>;
  };

  return (
    <Card className="p-6 bg-slate-800/50 border-slate-700 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">User Management</h3>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-slate-900 border-slate-700 text-white"
        />
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700 hover:bg-slate-800/50">
              <TableHead className="text-slate-300">User</TableHead>
              <TableHead className="text-slate-300">Sign-up Date</TableHead>
              <TableHead className="text-slate-300">IP Address</TableHead>
              <TableHead className="text-slate-300">Credits</TableHead>
              <TableHead className="text-slate-300">Reports</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.id} className="border-slate-700 hover:bg-slate-800/30">
                <TableCell>
                  <div>
                    <div className="font-medium text-white">{user.name}</div>
                    <div className="text-sm text-slate-400">{user.email}</div>
                  </div>
                </TableCell>
                <TableCell className="text-slate-300">
                  {new Date(user.signUpDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-slate-300 font-mono text-sm">
                  {user.signUpIP}
                </TableCell>
                <TableCell>
                  <div className="text-slate-300">
                    <span className="text-white font-medium">{user.creditsUsed}</span> /{" "}
                    {user.creditsAllocated}
                  </div>
                </TableCell>
                <TableCell className="text-slate-300">{user.reportsGenerated}</TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
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
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-slate-300 focus:bg-slate-800 focus:text-white">
                        <Edit className="h-4 w-4" />
                        Edit Credits
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-red-400 focus:bg-red-500/10 focus:text-red-400">
                        <Ban className="h-4 w-4" />
                        Suspend User
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
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredUsers.length)}{" "}
          of {filteredUsers.length} users
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
