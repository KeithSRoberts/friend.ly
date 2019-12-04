import React, { Component }  from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import profile from "../constants/icons/Profile.png";
import { withFirebase } from '../firebase';
import ChipInput from 'material-ui-chip-input';

import * as routes from "../constants/routes";

import "./css/account.css";

class Account extends Component {
  
  constructor(props) {
    super(props);

    if (global.userId === -1) {
      this.props.history.push(routes.SPLASH);
    }

    let path = window.location.hash.split('/');

    let userId = path[path.length - 1];

    let readOnly = true;

    if (global.userId === userId) {
      readOnly = !readOnly;
    }

    this.state = {
      id: userId,
      email: "",
      username: "",
      password: "",
      usernames: [],
      emails: [],
      readOnly: readOnly,
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
      avatar: profile,
      modal: false,
      previewError: false,
      errorText: "",
      urlInput: "",
    }
  }

  componentDidUpdate() {
    if (global.userId === -1) {
      this.props.history.push(routes.SPLASH);
    }
  }

  componentDidMount() {
    const { media, interests, id } = this.state;
    const { firebase } = this.props;

    firebase.db.ref('usernames').once("value", (snapshot) => {
      let usernames = snapshot.val()

      this.setState({ usernames })
    });

    firebase.db.ref('users/' + id).once("value", (snapshot) => {
      let value = snapshot.val();

      if (!!value) {
        Object.keys(value).forEach((key) => {
          if (key === 'media') {
            let newMedia = Object.assign({}, media);

            Object.keys(value[key]).forEach((innerKey) => {
              newMedia[innerKey] = value[key][innerKey];
            })

            this.setState({ media: newMedia });
          } else if (key === 'interests') {
            let newInterests = Object.assign({}, interests);

            Object.keys(value[key]).forEach((innerKey) => {
              newInterests[innerKey] = value[key][innerKey];
            })

            this.setState({ interests: newInterests});
          } else {
            if (key === 'avatar') {
              if (!!value[key]) {
                this.setState({ [key]: value[key] });
              }
            } else {
              this.setState({ [key]: value[key] });
            }
          }
        })
      }
    });
  }

  updateFacebook = (e) => {
    const { media } = this.state;

    const newMedia = Object.assign({}, media);

    newMedia['facebook'] = e;

    this.setState({ media: newMedia });
  }

  updateInstagram = (e) => {
    const { media } = this.state;

    const newMedia = Object.assign({}, media);

    newMedia['instagram'] = e;

    this.setState({ media: newMedia });
  }

  updateSnapchat = (e) => {
    const { media } = this.state;

    const newMedia = Object.assign({}, media);

    newMedia['snapchat'] = e;

    this.setState({ media: newMedia });
  }

  updateTwitter = (e) => {
    const { media } = this.state;

    const newMedia = Object.assign({}, media);

    newMedia['twitter'] = e;

    this.setState({ media: newMedia });
  }

  // saves any changes the user made to their profile
  // pre-condition: the user must have made changes to their profile
  // post-condition: the user"s changes must persist even after the
  // user leaves the profile page
  saveChanges = () => {
    const { firebase } = this.props;

    const { username, password, email, interests, usernames, media, avatar } = this.state;

    if (username.length === 0) {
      alert("Username must not be empty")
    } else if (password.length < 8) {
      alert("Passwords must be at least 8 characters long")
    } else if (!!usernames && usernames.indexOf(username) !== -1 && usernames[global.userId] !== username) {
      alert("That username is taken");
    } else {
      firebase.db.ref('users/' + global.userId).set({
        username,
        password,
        email,
        interests,
        media,
        avatar
      });

      alert('Changes have been saved!')
    }
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
    
    let newInterests = Object.assign({}, interests);

    newInterests[interestKeys[index]].splice(i, 1);

    this.setState({ interests: newInterests });
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

            <ChipInput
              className="accountChipInput"
              value={interests[interestKeys[(2 * i) + j]]}
              onAdd={(e) => this.addInterest((2 * i) + j, e)}
              onDelete={(e, index) => this.removeInterest((2 * i) + j, e, index)}
            />
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

  inputChange = (urlInput) => {
    this.setState({ urlInput });
  }

  error = () => {
    this.setState({
      previewError: true,
      errorText: "Picture URL could not be loaded"
    });
  }

  loadImage = () => {
    const { urlInput } = this.state;

    let changed = true;

    let image = document.getElementById("previewImage");
    let source = image.src;

    if (source === profile) {
      changed = !changed;
    }

    image.onerror = () => {
      if (changed) {
        image.src = profile;
      } else {
        image.src = source;
      }

      this.error();

      image.onload = this.error();
    }

    image.onload = this.setState({ previewError: false, errorText: "" });

    image.src = urlInput;
  }

  validImage = () => {
    const { previewError, urlInput } = this.state;

    if (!previewError && urlInput.length > 0 && document.getElementById("previewImage").src !== profile) {
      return true;
    }

    return false;
  }

  confirmImage = () => {
    if (this.validImage()) {
      let avatar = document.getElementById("image-input").value;
      this.setState({ avatar });
      this.toggle()
    }
  }

  renderImageModal = () => {
    const { modal, avatar, errorText } = this.state;

    return (
      <Modal isOpen={modal} toggle={this.toggle} >
        <ModalHeader id="image-preview">
          <div id="preview-container">
            <img id="previewImage" src={avatar} alt="preview"/>
          </div>
          <p>Image URL:</p>
        </ModalHeader>
        <ModalBody>
          <input id="image-input" onChange={(e) => this.inputChange(e.target.value)}></input>
        </ModalBody>
        <p id="error-message">{errorText}</p>
        <ModalFooter id="modal-buttons">
          <Button color="primary" onClick={this.loadImage}>Load Image</Button>
          <Button color="success" id="confirm-button" onClick={this.confirmImage}>Confirm</Button>
          <Button color="danger" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      previewError: false,
      errorText: "",
      urlInput: "",
    });
  }

  updateUsername = (username) => {
    this.setState({ username });
  }

  updatePassword = (password) => {
    this.setState({ password });
  }

  renderReadOnly = () => {
    return(
      <div id='readOnly'>

      </div>
    )
  }

  // renders user profile
  // pre-condition: user must be logged in
  // post-condition: user"s profile form must be displayed on page with 
  // current user details filled in
  render() {
    const {
      avatar,
      password,
      username,
      media,
      readOnly
    } = this.state;

    return(
      <div id="cardWrapper">
        {readOnly ? this.renderReadOnly() : <div />}
        {this.renderImageModal()}
        <div id="accountHeader">
          <img id='profilepic' alt='profilepic' className='profileIcon' src={avatar} onClick={() => this.toggle()} />
          <div id='profileInputWrapper'>
            <Input id="account-username" className="profile-input" onChange={(e) => this.updateUsername(e.target.value)} placeholder="Username" value={username} />
            <Input id="account-password" className="profile-input" onChange={(e) => this.updatePassword(e.target.value)} placeholder="Password" type="password" value={password} />
          </div>
        </div>
        <h2>Interests</h2>
        {this.renderInterests()}
        <h2 id="socialHeader">Social Links</h2>
        <div>
          <div className='mediaWrapper'>
            <div id="facebookPic" className='mediaIcon' />
            <Input id="account-facebook" className="profile-input" onChange={(e) => this.updateFacebook(e.target.value)} placeholder="Facebook profile" value={media['facebook']} />
          </div>
          <div className='mediaWrapper'>
            <div id="instaPic" className='mediaIcon' />
            <Input id="account-insta" className="profile-input" onChange={(e) => this.updateInstagram(e.target.value)} placeholder="Instagram profile" value={media['instagram']} />
          </div>
          <div className='mediaWrapper'>
            <div id="twitterPic" className='mediaIcon' />
            <Input id="account-twitter" className="profile-input" onChange={(e) => this.updateTwitter(e.target.value)} placeholder="Twitter profile" value={media['twitter']} />
          </div>
          <div className='mediaWrapper'>
            <div id="snapPic" className='mediaIcon' />
            <Input id="account-snap" className="profile-input" onChange={(e) => this.updateSnapchat(e.target.value)} placeholder="Snapchat profile" value={media['snapchat']} />
          </div>
        </div>
        { !readOnly ? <Button id="saveChanges" onClick={this.saveChanges}>Save Changes</Button> : <div /> }
      </div>
    );
  }
}

export default withFirebase(Account);
