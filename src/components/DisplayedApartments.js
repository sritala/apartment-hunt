import React, { Component } from "react";
import Title from "./Title";
import { ApartmentContext } from "../context";
import Apartment from "./Apartment";
import Loading from "./Loading";

export default class DisplayedApartments extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, displayedApartments: apartments } = this.context;

    apartments = apartments.map(apartment => {
      return <Apartment key={apartment.id} apartment={apartment} />;
    });
    return (
      <section className="featured-apartments">
        <Title title="featured apartments" />
        <div>
          {loading ? <Loading /> : apartments}
        </div>
      </section>
    );
  }
}
