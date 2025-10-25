import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

interface AISource {
  title: string;
  url: string;
  domain: string;
  thumbnail?: string;
  date?: string;
}

interface AIOverviewSectionProps {
  businessName: string;
  content: string;
  sources?: AISource[];
}

export default function AIOverviewSection({ businessName, content, sources = [] }: AIOverviewSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Parse content for basic formatting
  const parseContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      // Bold text
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(<strong key={`bold-${index}-${match.index}`} className="font-semibold text-blue-900">{match[1]}</strong>);
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      // Bullet points
      if (line.trim().startsWith('•')) {
        return (
          <li key={index} className="ml-4 mb-2">
            {parts.length > 0 ? parts : line.substring(1).trim()}
          </li>
        );
      }

      // Regular line
      if (line.trim()) {
        return (
          <p key={index} className="mb-3 last:mb-0">
            {parts.length > 0 ? parts : line}
          </p>
        );
      }

      return <br key={index} />;
    });
  };

  return (
    <Card className="overflow-hidden border-l-4 border-l-blue-500 border-blue-200 bg-gradient-to-br from-blue-100/60 via-blue-50/30 to-white shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-200/60">
              <Sparkles className="w-4 h-4 text-blue-700" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">What ChatGPT thinks about your business</h2>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className={isExpanded ? "grid lg:grid-cols-3 gap-6" : ""}>
          {/* Main Content Area */}
          <div className={isExpanded ? "lg:col-span-2" : ""}>
            <div className="relative">
              {isExpanded ? (
                <ScrollArea className="h-[500px]">
                  <div className="text-sm leading-relaxed text-foreground/90 pr-4">
                    {parseContent(content)}
                  </div>
                </ScrollArea>
              ) : (
                <>
                  <div className="text-sm leading-relaxed text-foreground/90 max-h-[240px] overflow-hidden">
                    {parseContent(content)}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
                </>
              )}
            </div>

            <Button
              variant="outline"
              className="w-full mt-4 rounded-full hover:bg-blue-50"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  Show less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show more <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {/* Sources Section - Only show when expanded */}
          {isExpanded && sources.length > 0 && (
            <div className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Sources</h3>
              <ScrollArea className="h-[500px]">
                <div className="space-y-3 pr-4">
                  {sources.map((source, index) => (
                    <a
                      key={index}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <Card className="overflow-hidden hover:shadow-md transition-all duration-200 hover:scale-[1.02] bg-white/80 backdrop-blur">
                        <div className="flex gap-3 p-3">
                          {source.thumbnail && (
                            <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden bg-muted">
                              <img
                                src={source.thumbnail}
                                alt={source.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                              {source.title}
                            </p>
                            <div className="flex items-center gap-1 mt-1">
                              <Badge variant="secondary" className="text-xs px-2 py-0">
                                {source.domain}
                              </Badge>
                              <ExternalLink className="w-3 h-3 text-muted-foreground" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
