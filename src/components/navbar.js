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
              <NavLink href="dash" active id="nav-pill">Dashboard</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="#" id="nav-pill">asdf</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" id="nav-pill">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#" id="nav-pill">Hello</NavLink>
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
