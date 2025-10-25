import { Card } from "@/components/ui/card";
import { ExternalLink, TrendingUp } from "lucide-react";

interface Competitor {
  name: string;
  social_url: string;
}

interface CompetitorInsightsProps {
  competitors: Competitor[];
}

export const CompetitorInsights = ({ competitors }: CompetitorInsightsProps) => {
  return (
    <Card className="p-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Related Businesses</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Similar businesses customers also searched for
      </p>
      <div className="space-y-2 sm:space-y-3">
        {competitors.slice(0, 5).map((competitor, idx) => (
          <a
            key={idx}
            href={competitor.social_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
          >
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
              {competitor.name}
            </span>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </Card>
  );
};
