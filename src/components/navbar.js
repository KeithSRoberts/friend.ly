import React, { Component, useState }  from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap';
import Search from "../components/search"
 
import * as routes from "../constants/routes";

import "./css/navbar.css";

class Navbar extends Component {
  state = { currentPage: this.props.currentPage }

  
  render() {
    const currentPage = this.state.currentPage;
    var pills;
    if (currentPage == "dash") {
      console.log("in dash")
      pills = (     
      <Nav pills className="navbar nav-buttons d-flex justify-content-center .nav-pills">
      <NavItem>
        <Link to={routes.DASH} active id="nav-pill-active">Dashboard</Link>
      </NavItem>
      
      <NavItem>
        <Link to={routes.GROUPS} id="nav-pill">Groups</Link>
      </NavItem>
      <NavItem>
        <Link to={routes.DASH} id="nav-pill">Link</Link>
      </NavItem>
      <NavItem>
        <Link to={routes.DASH} id="nav-pill">Hello</Link>
      </NavItem>
    </Nav>);
    } else if (currentPage == "groups") {
      console.log("in groups")
      pills = (     
        <Nav pills className="navbar nav-buttons d-flex justify-content-center .nav-pills">
        <NavItem>
          <Link to={routes.DASH} id="nav-pill">Dashboard</Link>
        </NavItem>
        
        <NavItem>
          <Link to={routes.GROUPS} id="nav-pill">Groups</Link>
        </NavItem>
        <NavItem>
          <Link to={routes.DASH} id="nav-pill">Link</Link>
        </NavItem>
        <NavItem>
          <Link disabled to={routes.DASH} id="nav-pill">Hello</Link>
        </NavItem>
      </Nav>);
    } else {
      pills = (<div>yo somethings wrong here</div>);
    }
    return(
      
      // Navbar
      <div className="navigation-bar">
        <div className="navigation-bar-inside flex-row">
          <div className="logo-group">
              <Link to={routes.SPLASH}>
                <div className="logo" />
              </Link>
            <h1 className="nav-title"><span className="nav-friend">Friend</span><span className="nav-ly">.ly</span></h1>
          </div>
          {/* Pills */}
          {/* <Nav pills className="navbar navbar-expand-lg nav-buttons d-flex justify-content-center">
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
          </Nav> */}
          
          {/* <ul class="nav nav-buttons ">
            <li class="nav-item nav-pill">
              <a class="nav-link" href={routes.GROUPS} active id="nav-pill">
                <div class="home" />
              </a>
            </li>
            
            <li class="nav-item nav-pill">
              <a class="nav-link" href={routes.SPLASH} id="nav-pill">
                <div class="create" />
              </a>
            </li>
            <li class="nav-item nav-pill">
              <a class="nav-link" href={routes.SPLASH} id="nav-pill">
                <div class="account" />
              </a>
            </li>
            <li class="nav-item nav-pill">
              <a class="nav-link" href={routes.SPLASH} id="nav-pill">
                <div class="search" />
              </a>
            </li>
          </ul> */}

          <div id="icons">
            <div class="nav nav-buttons ">
                <a class="nav-item nav-pill nav-link home" href={routes.GROUPS} active id="nav-pill" />
                <a class="nav-item nav-pill nav-link create" href={routes.CREATE_GROUP} id="nav-pill" />
                <a class="nav-item nav-pill nav-link account" href={routes.ACCOUNT} id="nav-pill" />
                <a class="nav-item nav-pill nav-link search" href={routes.VIEW_GROUP} id="nav-pill" />
            </div>
          </div>

          {/* <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul> */}
          {/* <Search id="search-bar">
          </Search> */}
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
