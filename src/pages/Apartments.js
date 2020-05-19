import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Apartments = () => {
  return (
    <>
        <Banner title="Our apartments">
          <Link to="/">
            return home
          </Link>
        </Banner>

    </>
  );
};

export default Apartments;
