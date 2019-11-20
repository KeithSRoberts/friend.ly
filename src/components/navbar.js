import React, { Component, useState }  from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap';
import Search from "../components/search"

import * as routes from "../constants/routes";

import "./css/navbar.css";

class Navbar extends Component {
  render() {
    return(
      // Navbar
      <div className="navigation-bar">
        <div className="navigation-bar-inside d-flex flex-row">
          <div className="logo-group nav-group nav-icon">
              <Link to={routes.SPLASH}>
                <div className="logo" />
                </Link>
              <h1 className="nav-title"><span className="nav-friend">Friend</span><span className="nav-ly">.ly</span></h1>
            </div>
          {/* Pills */}
          <Nav pills className="navbar navbar-expand-lg nav-buttons d-flex justify-content-center">
            <NavItem>
              <Link to={routes.GROUPS} active id="nav-pill">Dashboard</Link>
            </NavItem>
            
            <NavItem>
              <Link to={routes.SPLASH} id="nav-pill">asdf</Link>
            </NavItem>
            <NavItem>
              <Link to={routes.SPLASH} id="nav-pill">Link</Link>
            </NavItem>
            <NavItem>
              <Link disabled to={routes.SPLASH} id="nav-pill">Hello</Link>
            </NavItem>
          </Nav>
          <Search id="search-bar">
          </Search>
        </div>
    </div>

    );
  }
}

{/* Dropdown Item 
<Dropdown nav isOpen={false} toggle={false}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
*/}

export default Navbar;
