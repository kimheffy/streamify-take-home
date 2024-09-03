import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Star, TrendingUp, Users, Zap } from "lucide-react";

function getCardLabels(key: string) {
  const title = key.split("_").join(" ");

  switch (key) {
    case "total_users":
      return {
        title,
        description: "The total number of registered users on the platform.",
        icon: Users,
      };
    case "active_users":
      return {
        title,
        description:
          "The number of users who have streamed at least one song in the last 30 days.",
        icon: Zap,
      };
    case "total_streams":
      return {
        title,
        description: "The total number of songs streams on the platform.",
        icon: TrendingUp,
      };
    case "revenue":
      return {
        title,
        description:
          "The total revenue generated from subscriptions and advertisements.",
        icon: DollarSign,
      };
    case "top_artist":
      return {
        title,
        description: "The artist with the most streams in the past 30 days.",
        icon: Star,
      };
    default:
      return {
        title,
        description: "The artist with the most streams in the past 30 days.",
      };
  }
}

export default function MetricCard({
  metric,
  value,
}: {
  metric: string;
  value: number | string;
}) {
  const { title, description, icon: Icon } = getCardLabels(metric);

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="capitalize md:text-lg lg:text-base">{title}</div>
            {Icon && <Icon className="md:size-6 lg:size-5" />}
          </div>
        </CardTitle>
        <CardDescription className="md:text-sm lg:text-xs">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="font-semibold text-xl md:text-lg lg:text-base">
          {value}
        </span>
      </CardContent>
    </Card>
  );
}
