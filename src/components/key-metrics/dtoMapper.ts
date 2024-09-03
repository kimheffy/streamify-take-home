import type { IRawData } from "@/app/_types";
import type { IMetric } from "./types";

export function dtoMapper(data: IRawData): IMetric {
  return {
    total_users: data.total_users,
    active_users: data.active_users,
    total_streams: new Intl.NumberFormat().format(data.total_streams),
    revenue: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(data.revenue),
    top_artist: data.top_artist,
  };
}
