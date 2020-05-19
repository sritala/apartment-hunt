import React from "react";
import ApartmentsContainer from "../components/ApartmentsContainer";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
 
  },

  title:{
    color: "black",
    fontSize: "2rem",
    textAlign:'center',
    paddingTop:'2rem',
    fontFamily: 'Poiret one, cursive',
  },
}));

const Apartments = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title} variant={'h1'}>Our apartments</Typography>
      <ApartmentsContainer />
    </Box>
  );
};

export default Apartments;
