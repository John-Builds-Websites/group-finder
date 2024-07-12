
import { formatTime } from "@/lib/time";

export default function Time({ isoDate }: { isoDate: string }) {
  const formattedTime = formatTime(isoDate);
  return <time  dateTime={isoDate}>{formattedTime}</time>;
}