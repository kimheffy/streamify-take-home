import type { IRawData } from "@/app/_types";
import type { IMetric } from "./types";

export function dtoMapper(data: IRawData): IMetric {
  return {
    total_users: data.total_users,
    active_users: data.active_users,
    total_streams: data.total_streams,
    revenue: `$ ${data.revenue}`,
    top_artist: data.top_artist,
  };
}
