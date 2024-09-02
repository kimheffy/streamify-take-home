import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RecentStreamsTable() {
  return (
    <Table>
      <TableCaption>A list of recent streams.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Song Name</TableHead>
          <TableHead>Artist</TableHead>
          <TableHead>Date Streamed</TableHead>
          <TableHead>Stream Count</TableHead>
          <TableHead>User ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
