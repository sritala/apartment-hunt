import React, { Component } from "react";
import items from "./data";

const ApartmentContext = React.createContext();

export default class ApartmentProvider extends Component {
  state = {
    apartments: [],
    sortedApartments: [],
    displayedApartments: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    sauna: false,
    balcony: false
  };

  componentDidMount() {
    let apartments = this.formatData(items);
    let displayedApartments = apartments.filter(apartment => apartment.displayed === true);
    //
    let maxPrice = Math.max(...apartments.map(item => item.price));
    let maxSize = Math.max(...apartments.map(item => item.size));
    this.setState({
      apartments,
      displayedApartments,
      sortedApartments: apartments,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let apartment = { ...item.fields, images, id };
      return apartment;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempApartments = [...this.state.apartments];
    const apartment = tempApartments.find(apartment => apartment.slug === slug);
    return apartment;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterApartments
    );
  };
  filterApartments = () => {
    let {
      apartments,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      sauna,
      balcony
    } = this.state;

    let tempApartments = [...apartments];

    capacity = parseInt(capacity);
    price = parseInt(price);

    if (type !== "all") {
      tempApartments = tempApartments.filter(apartment => apartment.type === type);
    }

    if (capacity !== 1) {
      tempApartments = tempApartments.filter(apartment => apartment.capacity >= capacity);
    }

    tempApartments = tempApartments.filter(apartment => apartment.price <= price);

    tempApartments = tempApartments.filter(
      apartment => apartment.size >= minSize && apartment.size <= maxSize
    );

    if (sauna) {
      tempApartments = tempApartments.filter(apartment => apartment.sauna === true);
    }

    if (balcony) {
      tempApartments = tempApartments.filter(apartment => apartment.balcony === true);
    }
    this.setState({
      sortedApartments: tempApartments
    });
  };
  render() {
    return (
      <ApartmentContext.Provider
        value={{
          ...this.state,
          getApartment: this.getApartment,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ApartmentContext.Provider>
    );
  }
}
const ApartmentConsumer = ApartmentContext.Consumer;

export { ApartmentProvider, ApartmentConsumer, ApartmentContext };

export function withApartmentConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ApartmentConsumer>
        {value => <Component {...props} context={value} />}
      </ApartmentConsumer>
    );
  };
}
