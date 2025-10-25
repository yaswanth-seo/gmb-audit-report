import { Card } from "@/components/ui/card";
import { Star, MessageSquare, Image } from "lucide-react";

interface BusinessStatsProps {
  data: {
    rating: number;
    review_count: number;
    image_count: number;
    review_summary: { [key: number]: number };
  };
}

export const BusinessStats = ({ data }: BusinessStatsProps) => {
  const stats = [
    {
      label: "Average Rating",
      value: data.rating,
      icon: Star,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      label: "Total Reviews",
      value: data.review_count,
      icon: MessageSquare,
      color: "text-primary",
      bgColor: "bg-primary/5",
    },
    {
      label: "Photos",
      value: data.image_count,
      icon: Image,
      color: "text-success",
      bgColor: "bg-success/5",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground">Performance Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`${stat.bgColor} ${stat.color} p-2 sm:p-3 rounded-lg`}>
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Rating Distribution */}
      <Card className="p-4 sm:p-6 overflow-hidden">
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Rating Distribution</h3>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = data.review_summary[rating] || 0;
            const percentage = data.review_count > 0 ? (count / data.review_count) * 100 : 0;
            
            return (
              <div key={rating} className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-0.5 sm:gap-1 w-12 sm:w-16 flex-shrink-0">
                  <span className="text-xs sm:text-sm font-medium text-foreground">{rating}</span>
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="flex-1 min-w-0 bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground w-8 sm:w-12 text-right flex-shrink-0">{count}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
