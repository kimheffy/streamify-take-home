"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with a label";

const chartConfig = {
  total_users: {
    label: "Total Users",
    color: "hsl(var(--chart-1))",
  },
  active_users: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Component({
  chartData,
}: {
  chartData: {
    id: string;
    total_users: number;
    active_users: number;
    month: string;
  }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="md:text-lg lg:text-base">
          User Growth Chart
        </CardTitle>
        <CardDescription className="md:text-sm lg:text-xs">
          January - December 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="total_users"
              type="natural"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-1)" }}
            />
            <Line
              dataKey="active_users"
              type="natural"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-2)" }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm md:text-xs">
        <div className="leading-none text-muted-foreground">
          Displaying the growth in the number of total users and active users
          over the past 12 months.
        </div>
      </CardFooter>
    </Card>
  );
}
