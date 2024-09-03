"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";

export default function SingleCalendar({
  date,
  setDate,
}: {
  date: Date | undefined;
  setDate: (newDate: Date | undefined) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <CalendarIcon className="mr-2 size-4" /> {date?.toDateString()}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => setDate(date)}
        />
      </PopoverContent>
    </Popover>
  );
}
