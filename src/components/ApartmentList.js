import React from "react";
import Apartment from "./Apartment";
import { Box} from "@material-ui/core";

const ApartmentsList = ({ apartments }) => {
  if (apartments.length === 0) {
    return (
      <Box style={{fontFamily: 'Open Sans, sans-serif', display:'flex', justifyContent:'center', paddingTop:'2rem'}}>
        <h4>Unfortunately not available apartments for your search</h4>
      </Box>
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
