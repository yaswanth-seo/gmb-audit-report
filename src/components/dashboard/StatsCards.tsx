import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, FileText, TrendingUp } from "lucide-react";
import { useMockAuth } from "@/hooks/useMockAuth";

interface StatsCardsProps {
  totalReports: number;
  monthlyReports: number;
  onTopUp: () => void;
}

export const StatsCards = ({ totalReports, monthlyReports, onTopUp }: StatsCardsProps) => {
  const { user } = useMockAuth();

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Credits</p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <p className="text-3xl font-bold">{user?.credits || 0}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onTopUp}
                className="mt-3"
              >
                Top Up Credits
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Reports</p>
              <div className="flex items-center gap-2 mt-2">
                <FileText className="h-5 w-5 text-primary" />
                <p className="text-3xl font-bold">{totalReports}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-2">All time</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">This Month</p>
              <div className="flex items-center gap-2 mt-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <p className="text-3xl font-bold">{monthlyReports}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Reports generated</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
