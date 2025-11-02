import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, Loader2 } from "lucide-react";
import { useMockAuth } from "@/hooks/useMockAuth";
import { mockAuth } from "@/lib/mockAuth";
import { mockData } from "@/lib/mockData";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface GenerateReportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onInsufficientCredits: () => void;
}

export const GenerateReportModal = ({
  open,
  onOpenChange,
  onInsufficientCredits,
}: GenerateReportModalProps) => {
  const [businessName, setBusinessName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { user, refreshUser } = useMockAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!businessName.trim()) {
      toast({
        title: "Business name required",
        description: "Please enter a business name or GMB URL",
        variant: "destructive",
      });
      return;
    }

    if (businessName.trim().length < 3) {
      toast({
        title: "Name too short",
        description: "Business name must be at least 3 characters",
        variant: "destructive",
      });
      return;
    }

    if (!user || user.credits < 1) {
      onOpenChange(false);
      onInsufficientCredits();
      return;
    }

    setIsGenerating(true);

    // Simulate report generation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Decrement credits
    const success = mockAuth.decrementCredits(1);
    if (!success) {
      toast({
        title: "Insufficient credits",
        description: "You don't have enough credits to generate a report",
        variant: "destructive",
      });
      setIsGenerating(false);
      onOpenChange(false);
      onInsufficientCredits();
      return;
    }

    // Create new report
    const newReport = mockData.createReport(user.id, businessName.trim());

    // Refresh user data
    refreshUser();

    // Navigate to report
    navigate(`/report/${newReport.id}`);
    
    toast({
      title: "Report generated!",
      description: `Report for "${businessName}" has been generated successfully`,
    });

    setIsGenerating(false);
    setBusinessName("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Generate New Report</DialogTitle>
          <DialogDescription>
            Enter the business name or Google Maps URL to generate an audit report.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="business-name">Business Name or URL</Label>
            <Input
              id="business-name"
              placeholder="e.g., Joe's Coffee Shop"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              disabled={isGenerating}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isGenerating) {
                  handleGenerate();
                }
              }}
            />
          </div>
          <div className="rounded-lg border bg-muted/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">Cost: 1 credit</span>
              </div>
              <span className="text-sm text-muted-foreground">
                You have: {user?.credits || 0} credits
              </span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isGenerating}
          >
            Cancel
          </Button>
          <Button onClick={handleGenerate} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Report"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
