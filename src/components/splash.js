import React, { Component }  from "react";
import { Button, Input } from 'reactstrap';

import "./css/splash.css";

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userID: 0,
      userName: ""
    }
  }

  // Pre: Username and password provided from user
  // Post: Authenticates username and password, returns true if sucessful login,
  // otherwise returns false
  signIn(providedUserName, providedPass) {
    //firebase signin authentication
    return true
  }
  
  render() {
    return(
      <div className="splash-bg">
        <div id="splash-blur"></div>
        <div className="splash-logo"></div>
        <div className="splash-content">
          <Input id="splash-username" placeholder="Username" />
          <Input id="splash-password" placeholder="Password" type="password" />
          <div className="splash-button-group">
            <Button id="splash-button-signup">Signup</Button>
            <Button id="splash-button-signin">Login</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
