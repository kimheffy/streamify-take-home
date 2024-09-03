import KeyMetrics from "@/components/key-metrics";
import { dtoMapper } from "@/components/key-metrics/dtoMapper";
import LineChart from "@/components/line-chart";
import BarChart from "@/components/bar-chart";
import PieChart from "@/components/pie-chart";
import RecentStreamsTable from "@/components/recent-streams-table";
import mockData from "@/mock.json";

const MONTHS = [
  "Januray",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getRandom(min: number, max: number) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export default function Home() {
  const userGrowth = mockData.months.map((month, index) => ({
    id: month.id,
    total_users: month.total_users,
    active_users: month.active_users,
    month: MONTHS[index],
  }));

  const month = mockData.months[0];

  const pieData = Object.entries({
    subscriptions: month.revenue_distribution.subscriptions,
    ads: month.revenue_distribution.ads,
  }).map(([revenue, value]) => ({
    revenue,
    value,
  }));

  const barChart = month.top_songs.map((song) => ({
    song,
    streams: getRandom(1, month.total_streams),
  }));

  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <section className="mt-8 mx-8 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
        <KeyMetrics metric={dtoMapper(month)} />
      </section>
      <section className="mt-8 mx-8 flex flex-col gap-8 md:grid md:grid-cols-2">
        <LineChart chartData={userGrowth} />
        <PieChart chartData={pieData} />
        <BarChart chartData={barChart} />
      </section>
      <section className="mt-8 mx-8">
        <RecentStreamsTable />
      </section>
    </main>
  );
}
