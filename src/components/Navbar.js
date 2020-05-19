import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { Box, makeStyles, Hidden, Button } from "@material-ui/core/"


const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
  },
  menu: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: "2rem",
  },
  appBar: {
    background: "transparent",
  },
  link: {
    "&:active": {
      color: "grey",
    },
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <Fragment>
      <Hidden xsDown={true}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box>
            <Button>
              <Link
                className={classes.link}
                style={{ textDecoration: "none", color: "black" }}
                to="/"
              >
                Home
              </Link>
            </Button>
          </Box>
          <Box style={{ paddingLeft: "1rem" }}>
            <Button>
              <Link
                className={classes.link}
                style={{ textDecoration: "none", color: "black" }}
                to="/apartments"
              >
                Apartments
              </Link>
            </Button>
          </Box>
        </Box>
      </Hidden>
    </Fragment>
  )
}
