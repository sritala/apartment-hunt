import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/apartmentcityview.jpg";
import PropTypes from "prop-types";
import { memo } from "react";

const Apartment = memo(({ apartment }) => {
  const { name, slug, images, price } = apartment;

  return (
    <article>
      <div>
        <img src={images[0] || defaultImg} alt="one room" style={{maxWidth: 1000}}/>
        <div>
          <h6>€{price}</h6>
          <p>per month</p>
        </div>
        <Link to={`/apartments/${slug}`}>
          Features
        </Link>
      </div>
      <p >{name}</p>
    </article>
  );
});

Apartment.propTypes = {
  apartment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Apartment;
