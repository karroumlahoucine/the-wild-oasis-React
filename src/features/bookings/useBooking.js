import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBooking() {
  const { bookingId } = useParams();
  const {
    data: booking,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    retry: false, // react query retry 3 times in case the first one failed
  });
  return { booking, error, isLoading };
}

export default useBooking;
