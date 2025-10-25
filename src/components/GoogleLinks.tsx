import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Map, Search, Star, Image, Edit } from "lucide-react";

interface GoogleLinksProps {
  links: {
    listing?: string;
    knowledge_graph?: string;
    knowledge_graph_short?: string;
    local_finder?: string;
    photos?: string;
    reviews?: string;
    reviews_write?: string;
  };
}

export const GoogleLinks = ({ links }: GoogleLinksProps) => {
  const linkItems = [
    {
      icon: Map,
      label: "View on Google Maps",
      url: links.listing,
      color: "text-primary",
    },
    {
      icon: Search,
      label: "Knowledge Graph",
      url: links.knowledge_graph,
      color: "text-accent",
    },
    {
      icon: Search,
      label: "Local Finder",
      url: links.local_finder,
      color: "text-success",
    },
    {
      icon: Star,
      label: "View All Reviews",
      url: links.reviews,
      color: "text-warning",
    },
    {
      icon: Edit,
      label: "Write a Review",
      url: links.reviews_write,
      color: "text-primary",
    },
    {
      icon: Image,
      label: "View Photos",
      url: links.photos,
      color: "text-accent",
    },
  ].filter(item => item.url);

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <ExternalLink className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Quick Access Links</h3>
      </div>
      <div className="space-y-2">
        {linkItems.map((item, idx) => (
          <Button
            key={idx}
            variant="outline"
            className="w-full justify-start gap-2 sm:gap-3 h-auto py-2 sm:py-3 text-sm"
            asChild
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <item.icon className={`h-4 w-4 ${item.color}`} />
              <span className="flex-1 text-left">{item.label}</span>
              <ExternalLink className="h-3 w-3 opacity-50" />
            </a>
          </Button>
        ))}
      </div>
    </Card>
  );
};
