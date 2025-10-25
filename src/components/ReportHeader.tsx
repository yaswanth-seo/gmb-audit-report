import { MapPin, Phone, Globe, Star, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ReportHeaderProps {
  data: {
    name: string;
    rating: number;
    review_count: number;
    address: string;
    phone_number: string;
    website: string[];
    categories: string[];
    verified: number;
  };
}

export const ReportHeader = ({ data }: ReportHeaderProps) => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl text-white">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="flex-1 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words">{data.name}</h1>
              {data.verified === 1 && (
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {data.categories.map((cat, idx) => (
                <Badge key={idx} variant="secondary" className="bg-white/10 text-white border-white/20">
                  {cat}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-white/90">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm break-words">{data.address}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{data.phone_number}</span>
                </div>
                {data.website && data.website.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 flex-shrink-0" />
                    <a href={data.website[0]} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm hover:underline break-all">
                      {new URL(data.website[0]).hostname.replace('www.', '')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Rating Card */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-4 sm:p-6 w-full sm:w-auto sm:min-w-[200px]">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-6 sm:h-8 w-6 sm:w-8 fill-yellow-400 text-yellow-400" />
                <span className="text-4xl sm:text-5xl font-bold text-white">{data.rating}</span>
              </div>
              <div className="text-white/80 text-sm">
                Based on <span className="font-semibold text-white">{data.review_count}</span> reviews
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
