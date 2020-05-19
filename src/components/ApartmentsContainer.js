import React from "react";
import { withApartmentConsumer } from "../context";
import Loading from "./Loading";
import ApartmentsFilter from "./ApartmentsFilter";
import ApartmentList from "./ApartmentList";

function ApartmentsContainer({ context }) {
  const { loading, sortedApartments, apartments } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ApartmentsFilter apartments={apartments} />
      <ApartmentList apartments={sortedApartments} />
    </>
  );
}
export default withApartmentConsumer(ApartmentsContainer);