import styled from "styled-components";
import { useRecentBooking } from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1, numDays } = useRecentBooking(); //we get bookings from the last X days to now  7 is default
  const { isLoading: isLoading2, confirmedStays } = useRecentStays(); // they are bookings that are checked in or checked out
  const { cabins, isLoading: isLoading3 } = useCabins(); // we get all cabins
  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        cabinCount={cabins.length}
        numDays={numDays} //last X days
        bookings={bookings}
        confirmedStays={confirmedStays}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart numDays={numDays} bookings={bookings} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
