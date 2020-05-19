import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  telephone: {
    display: "flex",
    paddingTop: "8rem",
    color: "#949494",
    justifyContent: "center",
    fontFamily: "Manrope, sans-serif",

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      paddingTop: "2rem",
      color: "#949494",
      justifyContent: "center",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      textAlign: "center",
      fontFamily: "Manrope, sans-serif",
    },
  },
  email: {
    display: "flex",
    paddingTop: "1rem",
    color: "#949494",
    justifyContent: "center",
    fontFamily: "Manrope, sans-serif",

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      paddingTop: "2rem",
      color: "#949494",
      justifyContent: "center",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      textAlign: "center",
      fontFamily: "Manrope, sans-serif",
    },
  },
  root:{

  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <p className={classes.telephone}>Telephone: +123456789</p>
      <p className={classes.email}>Email: apartmenthunt@gmail.com</p>
    </Box>
  );
}
