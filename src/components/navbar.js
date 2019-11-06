import React, { Component }  from "react";
import { Link } from "react-router-dom";

import * as routes from "../constants/routes";

import "./css/navbar.css";

class Navbar extends Component {
  render() {
    return(
      <div className="navigation-bar">
        <div className="nav-group" />
        <div className="nav-group-main">
          <div className="logo-group nav-group">
            <Link to={routes.SPLASH}>
              <div className="logo" />
            </Link>
            <h1 className="nav-title"><span className="nav-friend">Friend</span><span className="nav-ly">.ly</span></h1>
          </div>
          <div className="nav-group-inner-main" />
          <div className="icon-group nav-group">
            <Link to={routes.GROUPS}>
              <div className="home icon" />
            </Link>
            <div className="search icon" />
            <Link to={routes.CREATE_GROUP}>
              <div className="create icon" />
            </Link>
            <Link to={routes.ACCOUNT + '/123'}>
              <div className="account icon" />
            </Link>
          </div>
        </div>
        <div className="nav-group" />
      </div>
    );
  }
}

export default Navbar;
