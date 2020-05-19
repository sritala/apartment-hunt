import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ApartmentsContainer from "../components/ApartmentsContainer";

const Apartments = () => {
  return (
    <>
        <Banner title="Our apartments">
          <Link to="/">
            return home
          </Link>
        </Banner>
        <ApartmentsContainer />
    </>
  );
};

export default Apartments;
