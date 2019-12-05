import React, { Component }  from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import Search from "../components/search"

import * as routes from "../constants/routes";

import "./css/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentPage:"",
    };
  }
  searchCallBack = (dataFromSearch) => {
    this.props.callBackToApp(dataFromSearch);
    this.props.history.push(routes.GROUPS, {query: "test"} )
  }
  render() {
    return(
      // Navbar
      <div className="navigation-bar">
        <div className="navigation-bar-inside d-flex flex-row">
          <div className="logo-group nav-group nav-icon">
              <Link to={routes.GROUPS}>
                <div className="logo" />
                </Link>
              <h1 className="nav-title"><span className="nav-friend">Friend</span><span className="nav-ly">.ly</span></h1>
            </div>
          <Nav pills className="navbar navbar-expand-lg nav-buttons d-flex justify-content-center">
            <NavItem>
              <Link to={routes.GROUPS} id="nav-pill">Dashboard</Link>
            </NavItem>
            
            <NavItem>
              <Link to={routes.ACCOUNT + '/' + global.userId} id="nav-profile">My Profile</Link>
            </NavItem>
            <NavItem>
              <Link to={routes.CREATE_GROUP} id="nav-pill">Create Group</Link>
            </NavItem>
          </Nav>
          <Search id="search-bar" callBackToNavbar={this.searchCallBack}>
          </Search>
        </div>
    </div>

    );
  }
}

export default withRouter(Navbar);