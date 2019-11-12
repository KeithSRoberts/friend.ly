import React, { Component }  from "react";
import { Button, Input } from 'reactstrap';

import * as routes from "../constants/routes";

import "./css/splash.css";

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmPassword: "",
      email: "",
      interests: {
        music: [],
        sports: [],
        video_games: [],
        travel: [],
        politics: [],
        photography: [],
        art: [],
        theater: [],
        food: [],
        books: [],
        board_games: [],
        other: []
      },
      header: "",
      loggedIn: false,
      register: false,
      finish: false,
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

  showEmail = (register) => {
    this.setState({ register })
  }

  validateEmail = () => {
    this.setState({ validEmail: true, header: "Tell us your interests!" });
  }

  finish = () => {
    this.setState({ finish: true, header: "You can add social links to connect with people and groups" });
  }

  register = () => {
    this.props.history.push(routes.GROUPS);
  }

  updateUsername = (userName) => {
    this.setState({ userName });
  }

  updateConfirmPassword =  (confirmPassword) => {
    this.setState({ confirmPassword });
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
          <Button id="splash-button-signup" onClick={() => this.showEmail(true)}>Signup</Button>
          <Button id="splash-button-signin" onClick={() => this.signIn()}>Login</Button>
        </div>
      </div>
    );
  }

  renderEmail = () => {
    const { userName, confirmPassword, password, email } = this.state;

    return(
      <div className="splash-form-email">
        <Input id="splash-username" onChange={(e) => this.updateUsername(e.target.value)} placeholder="Username" value={userName} />
        <Input id="splash-password" onChange={(e) => this.updatePassword(e.target.value)} placeholder="Password" type="password" value={password} />
        <Input id="splash-confirm-password" onChange={(e) => this.updateConfirmPassword(e.target.value)} placeholder="Confirm Password" type="password" value={confirmPassword} />
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
    const { interests } = this.state;
    let interestRows = [];
    let interestKeys = Object.keys(interests);

    for (let i = 0; i < 2; i++) {
      let interestDivs = [];

      for (let j = 0; j < 6; j++) {
        interestDivs.push(
          <div key={(6 * i) + j} className="interest" tabIndex="0">
            <div 
              id={`splash-${interestKeys[(6 * i) + j]}`}
              key={(6 * i) + j}
              className="interest-icon"
            />
          </div>
        );
      }

      interestRows.push(<div className="interestRow" key={i}>{interestDivs}</div>);
    }

    return(
      <div className="splash-form-interests">
        {interestRows}
        <Button id="splash-button-social" onClick={() => this.finish()}>Next: social links</Button>
      </div>
    );
  }

  renderSocial = () => {
    return(
      <div className="splash-form-social">
        <div className='splash-mediaWrapper'>
          <div id="splash-facebookPic" className='splash-mediaIcon' />
          <Input id="splash-facebook" placeholder="Facebook profile" />
        </div>
        <div className='splash-mediaWrapper'>
          <div id="splash-instaPic" className='splash-mediaIcon' />
          <Input id="splash-insta"placeholder="Instagram profile" />
        </div>
        <div className='splash-mediaWrapper'>
          <div id="splash-twitterPic" className='splash-mediaIcon' />
          <Input id="splash-twitter" placeholder="Twitter profile" />
        </div>
        <div className='splash-mediaWrapper'>
          <div id="splash-snapPic" className='splash-mediaIcon' />
          <Input id="splash-snap" placeholder="Snapchat profile" />
        </div>
        <Button id="splash-button-register" onClick={() => this.register()}>Finish signup</Button>
      </div>
    )
  }
  
  render() {
    const { finish, header, register, validEmail } = this.state;

    let form;

    if (finish) {
      form = this.renderSocial();
    } else if (validEmail) {
      form = this.renderInterests();
    } else if (register) {
      form = this.renderEmail();
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
