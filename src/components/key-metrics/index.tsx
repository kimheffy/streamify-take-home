"use client";

import MetricCard from "./metric-card";
import type { IMetric } from "./types";

export default function KeyMetrics({ metric }: { metric: IMetric }) {
  return (
    <section>
      {Object.entries(metric).map(([key, value]) => (
        <MetricCard key={`${key}-${value}`} metric={key} value={value} />
      ))}
    </section>
  );
}
