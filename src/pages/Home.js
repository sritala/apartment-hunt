import React from "react";
import { Link } from "react-router-dom";
//import Introduction from '../components/Introduction';
//import DisplayedApartments from '../components/DisplayedApartments';
import Banner from "../components/Banner";
import { Button, makeStyles, Box, Typography } from "@material-ui/core";



const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
 
  },
  button: {
    color: "white",
    fontSize: "1.2rem",
    background:'#D1B7A0',
    position: 'absolute',
    top: '80%',
    left: '50%',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
  },
  title:{
    color: "black",
    fontSize: "4rem",
    position: 'absolute',
    top: '60%',
    left: '50%',
    cursor: 'pointer',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Poiret one, cursive',
  },
  box:{
    display: 'flex',
    justifyContent:'center',
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.wrapper} />
      <Banner>
        <Box className={classes.box}>
        <img style={{height:'auto', maxWidth:'100%'}} src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1295&q=80"/>       
          <Typography className={classes.title} variant={'h1'}>Apartment hunt</Typography>
          <Link style={{ textDecoration: "none" }} to="/apartments">
            <Button variant={"h2"} variant="contained" className={classes.button}>
              Rent apartment
            </Button>
          </Link>
        </Box>
      </Banner>
      <Box />
    </>
  );
};

export default Home;
