import React, { Component }  from "react";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      interests: {
        art: [],  
        foods: [],
        movies: [],
        music: [],
        other: [],
        politics: [],
        readings: [],
        shows: [],
        sports: [],
        tabletop_games: [],
        theater: [],
        travel: [],
        video_games: []
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
  
  // renders user profile
  // pre-condition: user must be logged in
  // post-condition: user"s profile form must be displayed on page with 
  // current user details filled in
  render() {
    return(
      <div>
        User profile goes here
      </div>
    );
  }
}

export default Account;
