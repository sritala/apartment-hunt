import React, { Component } from "react";
import defaultBcg from "../images/apartmentcityview.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ApartmentContext } from "../context";

export default class SingleApartment extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }
  static contextType = ApartmentContext;

  render() {
    const { getApartment } = this.context;
    const apartment = getApartment(this.state.slug);

    if (!apartment) {
      return (
        <div className="error">
          <h3> No such apartment could be found...</h3>
          <Link to="/apartments">
            Back to apartments
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      balcony,
      sauna,
      images,
    } = apartment;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <Banner title={`${name} room`}>
          <Link to="/apartments">
            Back to apartments
          </Link>
        </Banner>
        <section>
          <div>
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div>
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{balcony ? "balcony" : "no balcony"}</h6>
              <h6>{sauna && "sauna"}</h6>
            </article>
          </div>
        </section>
        <section>
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
