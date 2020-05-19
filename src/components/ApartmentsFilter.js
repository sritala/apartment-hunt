import React from "react";
import { useContext } from "react";
import { ApartmentContext } from "../context";
import { Button, makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    fontFamily: 'Roboto',
    paddingTop:'2rem',
    fontSize:'1.2rem',
    fontFamily: 'Open Sans, sans-serif',
    paddingBottom:'1rem',
    paddingLeft:'5%'
  },
  form:{
    display: "flex",
    flexDirection:'row',
  },
  type:{
    paddingLeft:'1rem'
  },
  items:{
    paddingBottom:'0.5rem',
    paddingRight:'1rem'
  },
  select:{
    width:'3.5rem',
    height:'1.8rem',
    border: '1px solid #D1B7A0',
  },
  input:{
    border: '1px solid #D1B7A0',
    width:'4rem',
    display: 'inline-block',
    marginLeft: '0.5rem',
    height:'1.5rem',
    borderRadius:'0.2rem'
  },
  checkbox:{
   
  },

}));


const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const ApartmentsFilter = ({ apartments }) => {
  const classes = useStyles();
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
    <Box className={classes.wrapper}>
      <form className={classes.form}>
        <Box className={classes.items}>
          <label style={{paddingRight:'1rem'}}>
            Apartment type
            </label>
          <select name="type" id="type" onChange={handleChange} value={type} className={classes.select} >
            {types}
          </select>
        </Box>
        <Box className={classes.items}>
          <label style={{paddingRight:'1rem'}}>People</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            value={capacity}
            className={classes.select}
          >
            {people}
          </select>
        </Box>
        <Box className={classes.items}>
          <label style={{paddingRight:'1rem'}}>Apartment price €{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
          />
        </Box>
        <Box className={classes.items}>
          <label style={{paddingLeft:'0.5rem'}}>Apartment size </label>
          <Box>
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className={classes.input}
              
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className={classes.input}
            />
          </Box>
        </Box>
        <Box className={classes.items}>
          <div>
            <input 
              type="checkbox"
              name="balcony"
              id="balcony"
              checked={balcony}
              onChange={handleChange}
              className={classes.checkbox}
            />
            <label style={{paddingLeft:'0.5rem'}}>balcony</label>
          </div>
          <Box>
            <input
              type="checkbox"
              name="sauna"
              checked={sauna}
              onChange={handleChange}
              className={classes.checkbox}
            />
            <label style={{paddingLeft:'0.5rem'}}>sauna</label>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ApartmentsFilter;
