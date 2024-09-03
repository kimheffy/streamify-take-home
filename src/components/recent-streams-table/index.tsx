"use client";

import type { Stream } from "./types";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const STREAMS: Stream[] = [
  {
    title: "Hollow",
    artist: "Habin, Cri Wachi",
    date_streamed: "May 23, 2023",
    stream_count: 1000000,
    user_id: "habin",
  },
  {
    title: "Islands",
    artist: "8Lions",
    date_streamed: "Aug 2, 2018",
    stream_count: 1000000000,
    user_id: "8lions",
  },
  {
    title: "Hyperreal",
    artist: "Yakari",
    date_streamed: "Jan 2, 2024",
    stream_count: 85423,
    user_id: "yarkai",
  },
  {
    title: "dashstar*",
    artist: "Slap2",
    date_streamed: "Nov 11, 2023",
    stream_count: 9000000,
    user_id: "slap",
  },
  {
    title: "Ground Shake",
    artist: "KrankBat",
    date_streamed: "April 15, 2024",
    stream_count: 218912,
    user_id: "krankbat",
  },
];

export default function RecentStreamsTable() {
  return <DataTable columns={columns} data={STREAMS} />;
}
