import React, { Component }  from "react";
import { Button, Input } from 'reactstrap';
import Profile from '../constants/icons/Profile.png'

import "./css/account.css";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
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
      }
    }
  }

  // updates the user"s email
  // pre-condition: user must make changes to their email and
  // the new email must be valid and not already be in the database
  // post-condition: the changed email is displayed until the
  // user leaves the profile page
  updateEmail = () => {
    
  }

  // updates the user"s username
  // pre-condition: user must make changes to their username and
  // the new username must not already be in the database
  // post-condition: the changed username is displayed until the
  // user leaves the profile page
  updateUsername = () => {

  }

  // updates the user"s password
  // pre-condition: user must make changes to their password
  // post-condition: the changed password is displayed until the
  // user leaves the profile page
  updatePassword = () => {

  }

  // updates the user"s interests
  // pre-condition: user must make changes to their interests
  // post-condition: the changed interests are displayed until the
  // user leaves the profile page
  updateInterests = () => {

  }

  // saves any changes the user made to their profile
  // pre-condition: the user must have made changes to their profile
  // post-condition: the user"s changes must persist even after the
  // user leaves the profile page
  saveChanges = () => {

  }
  
  renderInterests = () => {
    const { interests } = this.state;
    let interestRows = [];
    let interestKeys = Object.keys(interests);

    for (let i = 0; i < 6; i++) {
      let interestDivs = [];

      for (let j = 0; j < 2; j++) {
        interestDivs.push(
          <div key={(2 * i) + j} className="profile-interest" tabIndex="0">
            <div 
              id={`profile-${interestKeys[(2 * i) + j]}`}
              key={(2 * i) + j}
              className="profile-interest-icon"
            />
            <Input />
          </div>
        );
      }

      interestRows.push(<div className="interestRow" key={i}>{interestDivs}</div>);
    }

    return(
      <div className="profile-interests">
        {interestRows}
      </div>
    );
  }
  // renders user profile
  // pre-condition: user must be logged in
  // post-condition: user"s profile form must be displayed on page with 
  // current user details filled in
  render() {
    return(
        <div id="cardWrapper">
          <div id="accountHeader">
            <div id='profilepic' className='profileIcon' />
            <div id='profileInputWrapper'>
              <Input id="account-username" className="profile-input" placeholder="Username" />
              <Input id="account-password" className="profile-input"  placeholder="Password" type="password" />
            </div>
          </div>
          <h2>Your Interests</h2>
          {this.renderInterests()}
          <h2 id="socialHeader">Your Social Links</h2>
          <div>
            <div className='mediaWrapper'>
              <div id="facebookPic" className='mediaIcon' />
              <Input id="account-facebook" className="profile-input" placeholder="Facebook profile" />
            </div>
            <div className='mediaWrapper'>
              <div id="instaPic" className='mediaIcon' />
              <Input id="account-insta" className="profile-input" placeholder="Instagram profile" />
            </div>
            <div className='mediaWrapper'>
              <div id="twitterPic" className='mediaIcon' />
              <Input id="account-twitter" className="profile-input" placeholder="Twitter profile" />
            </div>
            <div className='mediaWrapper'>
              <div id="snapPic" className='mediaIcon' />
              <Input id="account-snap" className="profile-input" placeholder="Snapchat profile" />
            </div>
          </div>
          <Button id="saveChanges">Save Changes</Button>
        </div>
    );
  }
}

export default Account;
