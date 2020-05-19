import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Apartments from "./pages/Apartments"
import SingleApartment from "./pages/SingleApartment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/apartments/" component={Apartments} />
        <Route exact path="/apartments/:slug" component={SingleApartment} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;