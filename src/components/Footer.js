import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  telephone: {
    display: "flex",
    color: "black",
    justifyContent: "center",
    fontFamily: "Open Sans, sans-serif",

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      paddingTop: "2rem",
      color: "black",
      justifyContent: "center",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      textAlign: "center",
      fontFamily: "Open Sans, sans-serif",
    },
  },
  email: {
    display: "flex",
    color: "black",
    justifyContent: "center",
    fontFamily: "Open Sans, sans-serif",

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      paddingTop: "2rem",
      color: "black",
      justifyContent: "center",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      textAlign: "center",
      fontFamily: "Open Sans, sans-serif",
    },
  },
  contact: {
    display: "flex",
    color: "black",
    justifyContent: "center",
    fontFamily: "Open Sans, sans-serif",
    paddingTop:'3rem',
  

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      paddingTop: "2rem",
      color: "black",
      justifyContent: "center",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      textAlign: "center",
      fontFamily: "Open Sans, sans-serif",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h3 className={classes.contact}>Contact</h3>
      <p className={classes.telephone}>Telephone: +123456789</p>
      <p className={classes.email}>Email: apartmenthunt@gmail.com</p>
    </Box>
  );
}
