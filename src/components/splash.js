import React, { Component }  from "react";
import { Button, Input } from 'reactstrap';

import * as routes from "../constants/routes";

import "./css/splash.css";

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      header: "",
      loggedIn: false,
      register: false,
      password: "",
      userID: 0,
      userName: "",
      validEmail: false,
    }
  }

  // Pre: Username and password provided from user
  // Post: Authenticates username and password, returns true if sucessful login,
  // otherwise returns false
  signIn = (providedUserName, providedPass) => {
    //firebase signin authentication
    this.props.history.push(routes.GROUPS);
  }

  showEmail = () => {
    this.setState({ register: true });
  }

  validateEmail = () => {
    this.setState({ validEmail: true, header: "Tell us your interests!" });
  }

  updateUsername = (userName) => {
    this.setState({ userName });
  }

  updatePassword =  (password) => {
    this.setState({ password });
  }

  updateEmail = (email) => {
    this.setState({ email });
  }

  renderChoice = () => {
    const { userName, password } = this.state;

    return(
      <div className="splash-form-choice">
        <Input id="splash-username" onChange={(e) => this.updateUsername(e.target.value)} placeholder="Username" value={userName} />
        <Input id="splash-password" onChange={(e) => this.updatePassword(e.target.value)} placeholder="Password" type="password" value={password} />
        <div className="splash-button-group">
          <Button id="splash-button-signup" onClick={() => this.showEmail()}>Signup</Button>
          <Button id="splash-button-signin" onClick={() => this.signIn()}>Login</Button>
        </div>
      </div>
    );
  }

  renderEmail = () => {
    const { userName, password, email } = this.state;

    return(
      <div className="splash-form-email">
        <Input id="splash-username" onChange={(e) => this.updateUsername(e.target.value)} placeholder="Username" value={userName} />
        <Input id="splash-password" onChange={(e) => this.updatePassword(e.target.value)} placeholder="Password" type="password" value={password} />
        <Input id="splash-email" onChange={(e) => this.updateEmail(e.target.value)} placeholder="Email" value={email} />
        <div className="splash-button-group">
          <Button id="splash-button-interests" onClick={() => this.validateEmail()}>Next: Interests</Button>
        </div>
      </div>
    );
  }

  reset = () => {
    window.location.reload();
  }

  renderInterests = () => {
    return(
      <div className="splash-form-email">
        <div>
        </div>
      </div>
    );
  }
  
  render() {
    const { header, register, validEmail } = this.state;

    let form;

    if (validEmail) {
      form = this.renderInterests();
    } else if (register) {
      form = this.renderEmail()
    } else {
      form = this.renderChoice();
    }
    
    return(
      <div className="splash-bg">
        <div className="splash-top">
          <div className="splash-logo" onClick={this.reset} />
          <h1 className="splash-header">{header}</h1>
        </div>
        <div className="splash-content">
          {form}
        </div>
      </div>
    );
  }
}

export default Splash;
