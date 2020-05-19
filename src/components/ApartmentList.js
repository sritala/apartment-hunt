import React from "react";
import Apartment from "./Apartment";
import { Box} from "@material-ui/core";

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
      <Box>
        {apartments.map(item => {
          return <Apartment key={item.id} apartment={item} />;
        })}
      </Box>
    </section>
  );
};

export default ApartmentsList;
