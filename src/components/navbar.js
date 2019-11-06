import React, { Component }  from "react";
import { Link } from "react-router-dom";

import * as routes from "../constants/routes";

import "./css/navbar.css";

class Navbar extends Component {
  render() {
    return(
      <div className="navigation-bar">
        <div className="nav-group"></div>
        <div className="nav-group-main">
          <div className="logo-group nav-group">
            <Link to={routes.SPLASH}>
              <div className="logo"></div>
            </Link>
          </div>
          <div className="nav-group-inner-main"></div>
          <div className="icon-group nav-group">
            <Link to={routes.GROUPS}>
              <div className="home icon"></div>
            </Link>
            <div className="search icon"></div>
            <Link to={routes.CREATE_GROUP}>
              <div className="create icon"></div>
            </Link>
            <div className="account icon"></div>
          </div>
        </div>
        <div className="nav-group"></div>
      </div>
    );
  }
}

export default Navbar;
