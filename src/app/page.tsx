import KeyMetrics from "@/components/key-metrics";
import { dtoMapper } from "@/components/key-metrics/dtoMapper";
import mockData from "@/mock.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <KeyMetrics metric={dtoMapper(mockData.months[0])} />
    </main>
  );
}
