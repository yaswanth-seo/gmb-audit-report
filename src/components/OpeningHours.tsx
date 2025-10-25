import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface OpeningHoursProps {
  hours: Array<{ open: number; close: number }>;
}

export const OpeningHours = ({ hours }: OpeningHoursProps) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const formatTime = (time: number) => {
    if (time === -1) return "Closed";
    const hours = Math.floor(time / 100);
    const minutes = time % 100;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  };

  const today = new Date().getDay();
  const adjustedToday = today === 0 ? 6 : today - 1;

  return (
    <Card className="p-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Opening Hours</h3>
      </div>
      <div className="space-y-2">
        {hours.map((hour, idx) => {
          const isToday = idx === adjustedToday;
          const isClosed = hour.open === -1;
          
          return (
            <div
              key={idx}
              className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                isToday ? "bg-primary/5 border border-primary/20" : ""
              }`}
            >
              <span className={`text-xs sm:text-sm font-medium ${isToday ? "text-primary" : "text-foreground"}`}>
                {days[idx]}
              </span>
              <span className={`text-xs sm:text-sm ${isClosed ? "text-muted-foreground" : "text-foreground"}`}>
                {isClosed ? "Closed" : `${formatTime(hour.open)} - ${formatTime(hour.close)}`}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
