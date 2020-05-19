import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/apartmentcityview.jpg";
import PropTypes from "prop-types";
import { memo } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  price: {
    display: "flex",
    justifyContent: "center",
    paddingTop:'1rem',
  },
  wrapper: {
    paddingTop:'1rem',
  }
}));

const Apartment = memo(({ apartment }) => {
  const { name, slug, images, price, extras,size } = apartment;
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box>
        <img
          src={images[0] || defaultImg}
          alt="one room"
          style={{ maxWidth: "100%" }}
        />
        <Box className={classes.price}>
          <Typography
            style={{ fontFamily: "Open Sans, sans-serif", paddingRight:'0.5rem' }}
            variant={"h6"}
          >
            {name}
          </Typography>
          <Typography
            style={{ fontFamily: "Open Sans, sans-serif"}}
            variant={"h6"}
          >
            {size}m²
          </Typography>

        </Box>
        <Box className={classes.price}>
          <Typography
            variant={"h7"}
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            € {price} /m
          </Typography>
        </Box>
        <Box className={classes.price}>
          <Typography
            style={{ fontFamily: "Open Sans, sans-serif" }}
            variant={"h7"}
          >
        {extras}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
});

Apartment.propTypes = {
  apartment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
export default Apartment;
