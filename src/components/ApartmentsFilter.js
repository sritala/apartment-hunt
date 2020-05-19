import React from "react";
import { useContext } from "react";
import { ApartmentContext } from "../context";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const ApartmentsFilter = ({ apartments }) => {
  const context = useContext(ApartmentContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    balcony,
    sauna,
  } = context;

  let types = getUnique(apartments, "type");

  types = ["all", ...types];

  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  let people = getUnique(apartments, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section>
      <form>
        <div>
          <label>Apartment type</label>
          <select name="type" id="type" onChange={handleChange} value={type}>
            {types}
          </select>
        </div>
        <div>
          <label>People</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            value={capacity}
          >
            {people}
          </select>
        </div>
        <div>
          <label htmlFor="price">Apartment price €{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Apartment size </label>
          <div>
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <input
              type="checkbox"
              name="balcony"
              id="balcony"
              checked={balcony}
              onChange={handleChange}
            />
            <label>balcony</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="sauna"
              checked={sauna}
              onChange={handleChange}
            />
            <label>sauna</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ApartmentsFilter;
