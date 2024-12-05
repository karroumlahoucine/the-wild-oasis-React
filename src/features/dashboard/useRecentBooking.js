import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { subDays } from "date-fns";

export function useRecentBooking() {
  const [searchParams] = useSearchParams();

  const numDays = searchParams.get("last")
    ? Number(searchParams.get("last"))
    : 7;

  // IT WILL GET THE EXACT SAME DAY WITH THE TIME OF YOUR REQUEST
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { bookings, isLoading, numDays };
}
