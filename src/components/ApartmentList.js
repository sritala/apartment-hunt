import React from "react";
import Apartment from "./Apartment";
const ApartmentsList = ({ apartments }) => {
  if (apartments.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no apartments matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section>
      <div>
        {apartments.map(item => {
          return <Apartment key={item.id} apartment={item} />;
        })}
      </div>
    </section>
  );
};

export default ApartmentsList;
