import React from "react";
import { Link } from "react-router-dom";
//import Introduction from '../components/Introduction';
//import DisplayedApartments from '../components/DisplayedApartments';
import ApartmentsContainer from "../components/ApartmentsContainer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
        <Banner>
          <Link to="/apartments">
            Rent apartment!
          </Link>
        </Banner>
        <ApartmentsContainer />
    </>
  );
};

export default Home;
