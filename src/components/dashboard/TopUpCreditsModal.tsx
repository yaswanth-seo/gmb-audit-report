import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/social";

interface TopUpCreditsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TopUpCreditsModal = ({ open, onOpenChange }: TopUpCreditsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Top Up Credits</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Our payment system is coming soon
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="rounded-lg border bg-muted/50 p-6 text-center">
            <div className="text-4xl mb-2">💳</div>
            <p className="text-sm text-muted-foreground">
              Our integrated payment system is currently under development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact for Additional Credits</h4>
            <p className="text-sm text-muted-foreground mb-4">
              For now, please contact me directly on social media to purchase additional credits:
            </p>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start h-auto py-4"
                onClick={() => window.open(SOCIAL_LINKS.facebook, "_blank")}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#1877F2] flex items-center justify-center">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Facebook</div>
                    <div className="text-xs text-muted-foreground">
                      Connect on Facebook
                    </div>
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start h-auto py-4"
                onClick={() => window.open(SOCIAL_LINKS.linkedin, "_blank")}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#0A66C2] flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-xs text-muted-foreground">
                      Connect on LinkedIn
                    </div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          <div className="rounded-lg bg-muted/30 p-4">
            <p className="text-xs text-muted-foreground text-center">
              I'll get the credits added to your account once everything is ready. Feel free to reach out anytime!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
