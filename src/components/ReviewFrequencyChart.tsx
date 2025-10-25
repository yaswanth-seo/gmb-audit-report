import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { format, fromUnixTime } from "date-fns";

interface Review {
  timestamp: number;
  time?: string;
}

interface ReviewFrequencyChartProps {
  reviews: Review[];
}

const ReviewFrequencyChart = ({ reviews }: ReviewFrequencyChartProps) => {
  // Process reviews to group by month
  const processReviewData = () => {
    const monthlyData: { [key: string]: number } = {};
    
    reviews.forEach((review) => {
      const date = fromUnixTime(review.timestamp);
      const monthKey = format(date, "MMM yyyy");
      monthlyData[monthKey] = (monthlyData[monthKey] || 0) + 1;
    });

    // Convert to array and sort by date
    const sortedData = Object.entries(monthlyData)
      .map(([month, count]) => ({
        month,
        count,
        date: new Date(month)
      }))
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(-12) // Show last 12 months
      .map(({ month, count }) => ({ month, count }));

    return sortedData;
  };

  const chartData = processReviewData();
  const totalReviews = chartData.reduce((sum, item) => sum + item.count, 0);
  const avgPerMonth = totalReviews > 0 ? (totalReviews / chartData.length).toFixed(1) : 0;

  const chartConfig = {
    count: {
      label: "Reviews",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Frequency</CardTitle>
        <CardDescription>
          Reviews per month • Avg {avgPerMonth}/month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              allowDecimals={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="count"
              fill="hsl(var(--primary))"
              radius={[8, 8, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ReviewFrequencyChart;
