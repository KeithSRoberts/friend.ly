import React, { Component }  from "react";

class Signin extends Component {
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
      <div>
        Sign-in form
      </div>
    );
  }
}

export default Signin;
