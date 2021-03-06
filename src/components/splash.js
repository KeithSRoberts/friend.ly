import React, { Component }  from "react";
import { Button, Input } from 'reactstrap';
import ChipInput from 'material-ui-chip-input';
import { withFirebase } from '../firebase';

import * as routes from "../constants/routes";

import "./css/splash.css";

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmPassword: "",
      email: "",
      usernames: [],
      emails: [],
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
      media: {
        facebook: "",
        instagram: "",
        snapchat: "",
        twitter: ""
      },
      header: "",
      loggedIn: false,
      register: false,
      interestIndex: -1,
      finish: false,
      password: "",
      userID: 0,
      username: "",
      validEmail: false,
    }
  }

  componentDidMount() {
    const { firebase } = this.props;

    firebase.db.ref('usernames').once("value", (snapshot) => {
      let usernames = snapshot.val()

      this.setState({ usernames })
    });

    firebase.db.ref('emails').once("value", (snapshot) => {
      let emails = snapshot.val()

      this.setState({ emails })
    });
  }

  // Pre: Username and password provided from user
  // Post: Authenticates username and password, returns true if sucessful login,
  // otherwise returns false
  signIn = () => {
    const { firebase } = this.props;
    const { username, password } = this.state;

    firebase.doSignInUser(username, password, () => {
      if (global.userId !== -1) {
        this.props.history.push(routes.GROUPS);
      } else {
        alert("Invalid login credentials");
      }
    });
  }

  showEmail = (register) => {
    const { username, usernames, password } = this.state;

    if (username.length === 0) {
      alert("Username must not be empty")
    } else if (password.length < 8) {
      alert("Passwords must be at least 8 characters long")
    } else if (!!usernames && usernames.indexOf(username) !== -1) {
      alert("That username is taken");
    } else {
      this.setState({ register });
    }
  }

  testEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

  validateEmail = () => {
    const { username, password, confirmPassword, usernames, email, emails } = this.state;
    
    if (username.length === 0) {
      alert("Username must not be empty")
    } else if (password.length < 8) {
      alert("Passwords must be at least 8 characters long")
    } else if (!this.testEmail(email)) {
      alert("Must enter a valid email")
    } else if (!!usernames && usernames.indexOf(username) !== -1) {
      alert("That username is taken");
    } else if (!!emails && emails.indexOf(email) !== -1) {
      alert("That email already belongs to an account");
    } else if (password !== confirmPassword) {
      alert("Passwords must match")
    } else {
      this.setState({ validEmail: true, header: "Tell us your interests!" });
    }
  }

  finish = () => {
    this.setState({ finish: true, header: "You can add social links to connect with people and groups" });
  }

  register = () => {
    const { username, password, email, interests, media } = this.state;
    const { firebase } = this.props;

    firebase.doCreateUser(username, password, email, interests, media, "", () => firebase.doSignInUser(username, password, () => {
      if (global.userId !== -1) {
        this.props.history.push(routes.GROUPS);
      } else {
        alert("Something went wrong");
      }
    }));
  }

  updateUsername = (username) => {
    this.setState({ username });
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
    const { username, password } = this.state;

    return(
      <div className="splash-form-choice">
        <Input id="splash-username" onChange={(e) => this.updateUsername(e.target.value.trim())} placeholder="Username" value={username} />
        <Input id="splash-password" onChange={(e) => this.updatePassword(e.target.value.trim())} placeholder="Password" type="password" value={password} />
        <div className="splash-button-group">
          <Button id="splash-button-signup" onClick={() => this.showEmail(true)}>Signup</Button>
          <Button id="splash-button-signin" onClick={() => this.signIn()}>Login</Button>
        </div>
      </div>
    );
  }

  updateMedia = (val, key) => {
    const { media } = this.state;

    let newMedia = Object.assign({}, media);

    newMedia[key] = val;

    this.setState({ media: newMedia });
  }

  renderEmail = () => {
    const { username, confirmPassword, password, email } = this.state;

    return(
      <div className="splash-form-email">
        <Input id="splash-username" onChange={(e) => this.updateUsername(e.target.value.trim())} placeholder="Username" value={username} />
        <Input id="splash-password" onChange={(e) => this.updatePassword(e.target.value.trim())} placeholder="Password" type="password" value={password} />
        <Input id="splash-confirm-password" onChange={(e) => this.updateConfirmPassword(e.target.value.trim())} placeholder="Confirm Password" type="password" value={confirmPassword} />
        <Input id="splash-email" onChange={(e) => this.updateEmail(e.target.value.trim())} placeholder="Email" value={email} />
        <div className="splash-button-group">
          <Button id="splash-button-interests" onClick={() => this.validateEmail()}>Next: Interests</Button>
        </div>
      </div>
    );
  }

  reset = () => {
    window.location.reload();
  }

  setInterest = (interestIndex) => {
    this.setState({ interestIndex });
  }

  addInterest = (index, e) => {
    const { interests } = this.state;
    let interestKeys = Object.keys(interests);
    
    let newInterests = Object.assign({}, interests);

    newInterests[interestKeys[index]].push(e);

    this.setState({ interests: newInterests });
  }

  removeInterest = (index, e, i) => {
    const { interests } = this.state;
    let interestKeys = Object.keys(interests);
    
    let newInterests = Object.assign({}, interests);;

    newInterests[interestKeys[index]].splice(i, 1);

    this.setState({ interests: newInterests });
  }

  // renderInterest = () => {
  //   const { interests, interestIndex } = this.state;
  //   let interestKeys = Object.keys(interests);

  //   return(
  //     <div id="chipDiv">
  //       <div id="chipIcon" className="interest">
  //         <div 
  //           id={`splash-${interestKeys[interestIndex]}`}
  //           className="interest-icon"
  //         />
  //       </div>
  //       <ChipInput
  //         className="chipInput"
  //         value={interests[interestKeys[interestIndex]]}
  //         onAdd={(e) => this.addInterest(interestIndex, e)}
  //         onDelete={(e, i) => this.removeInterest(interestIndex, e, i)}
  //       />
  //       <Button id="done" onClick={() => this.setState({ interestIndex: -1 })}>Done</Button>
  //     </div>
  //   );
  // }

  // renderInterests = () => {
  //   const { interests } = this.state;
  //   let interestRows = [];
  //   let interestKeys = Object.keys(interests);

  //   for (let i = 0; i < 2; i++) {
  //     let interestDivs = [];

  //     for (let j = 0; j < 6; j++) {
  //       interestDivs.push(
  //         <div key={(6 * i) + j} className="interest" tabIndex="0" onClick={() => this.setInterest((6 * i) + j)}>
  //           <div 
  //             id={`splash-${interestKeys[(6 * i) + j]}`}
  //             key={(6 * i) + j}
  //             className="interest-icon"
  //           />
  //         </div>
  //       );
  //     }

  //     interestRows.push(<div className="interestRow" key={i}>{interestDivs}</div>);
  //   }

  //   return(
  //     <div className="splash-form-interests">
  //       {interestRows}
  //       <Button id="splash-button-social" onClick={() => this.finish()}>Next: social links</Button>
  //     </div>
  //   );
  // }
  renderInterest = () => {
    const { interests, interestIndex } = this.state;
    let interestKeys = Object.keys(interests);

    return(
      <div id="chipDiv">
        <div id="interestParent">
          <div id="chipIcon" className="interest">
            <div 
              id={`splash-${interestKeys[interestIndex]}`}
              className="interest-icon"
            />
          </div>
          <h1 id="coloredheader">{interestKeys[interestIndex]}</h1>
        </div>
        <ChipInput
          className="chipInput"
          placeholder={`Press Enter to add ${interestKeys[interestIndex]} interests`}
          value={interests[interestKeys[interestIndex]]}
          onAdd={(e) => this.addInterest(interestIndex, e)}
          onDelete={(e, i) => this.removeInterest(interestIndex, e, i)}
        />
        <Button id="done" onClick={() => this.setState({ interestIndex: -1 })}>Done</Button>
      </div>
    );
  }

  renderInterests = () => {
    const { interests } = this.state;
    let interestRows = [];
    let interestKeys = Object.keys(interests);

    for (let i = 0; i < 3; i++) {
      let interestDivs = [];

      for (let j = 0; j < 4; j++) {
        interestDivs.push(
          <div key={(4 * i) + j} className="interest wubba" tabIndex="0" onClick={() => this.setInterest((4 * i) + j)}>
            <div 
              id={`splash-${interestKeys[(4 * i) + j]}`}
              key={(4 * i) + j}
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
          <Input id="splash-facebook" placeholder="Facebook profile" onChange={(e) => this.updateMedia(e.target.value.trim(), 'facebook')} />
        </div>
        <div className='splash-mediaWrapper'>
          <div id="splash-instaPic" className='splash-mediaIcon' />
          <Input id="splash-insta"placeholder="Instagram profile" onChange={(e) => this.updateMedia(e.target.value.trim(), 'instagram')} />
        </div>
        <div className='splash-mediaWrapper'>
          <div id="splash-twitterPic" className='splash-mediaIcon' />
          <Input id="splash-twitter" placeholder="Twitter profile" onChange={(e) => this.updateMedia(e.target.value.trim(), 'twitter')} />
        </div>
        <div className='splash-mediaWrapper'>
          <div id="splash-snapPic" className='splash-mediaIcon' />
          <Input id="splash-snap" placeholder="Snapchat profile" onChange={(e) => this.updateMedia(e.target.value.trim(), 'snapchat')}/>
        </div>
        <Button id="splash-button-register" onClick={() => this.register()}>Finish signup</Button>
      </div>
    )
  }
  
  render() {
    const { finish, header, interestIndex, register, validEmail } = this.state;

    let form;

    if (finish) {
      form = this.renderSocial();
    } else if (validEmail) {
      if (interestIndex > -1) {
        form = this.renderInterest();
      } else {
        form = this.renderInterests();
      }
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

export default withFirebase(Splash);
