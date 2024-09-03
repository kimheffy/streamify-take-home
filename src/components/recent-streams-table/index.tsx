"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const STREAMS = [
  {
    name: "Hollow",
    artist: "Habin, Cri Wachi",
    date_streamed: "May 23, 2023",
    stream_count: 1000000,
    user_id: "habin",
  },
  {
    name: "Islands",
    artist: "8Lions",
    date_streamed: "Aug 2, 2018",
    stream_count: 1000000000,
    user_id: "8lions",
  },
  {
    name: "Hyperreal",
    artist: "Yakari",
    date_streamed: "Jan 2, 2024",
    stream_count: 85423,
    user_id: "yarkai",
  },
  {
    name: "dashstar*",
    artist: "Slap2",
    date_streamed: "Nov 11, 2023",
    stream_count: 9000000,
    user_id: "slap",
  },
  {
    name: "Ground Shake",
    artist: "KrankBat",
    date_streamed: "April 15, 2024",
    stream_count: 218912,
    user_id: "krankbat",
  },
];

export default function RecentStreamsTable() {
  return (
    <Table className="w-full">
      <TableCaption>A list of recent streams.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Song Name</TableHead>
          <TableHead>Artist</TableHead>
          <TableHead>Date Streamed</TableHead>
          <TableHead>Stream Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {STREAMS.map((stream) => (
          <TableRow key={stream.user_id}>
            <TableCell className="font-medium">{stream.name}</TableCell>
            <TableCell>{stream.artist}</TableCell>
            <TableCell>{stream.date_streamed}</TableCell>
            <TableCell>{stream.stream_count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
