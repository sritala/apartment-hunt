import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav>
        <div>
          <div>
            <Link to="/">

            </Link>
            <button
              type="button"
              onClick={this.handleToggle}
            >
    
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/apartments">Apartments</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
