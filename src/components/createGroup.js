import React, { Component }  from "react";
import ChipInput from 'material-ui-chip-input';
import { withFirebase } from '../firebase';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./css/createGroup.css"
import art from "../constants/icons/art.png";
import board_games from "../constants/icons/board_games.png";
import books from "../constants/icons/books.png";
import food from "../constants/icons/food.png";
import photography from "../constants/icons/photography.png";
import music from "../constants/icons/music.png";
import other from "../constants/icons/other.png";
import travel from "../constants/icons/travel.png";
import politics from "../constants/icons/politics.png";
import sports from "../constants/icons/sports.png";
import theater from "../constants/icons/theater.png";
import video_games from "../constants/icons/video_games.png";
import create from "../constants/icons/Create_fill.png";

import * as routes from "../constants/routes";

class CreateGroup extends Component {
  constructor(props) {
    super(props);

    if (global.userId === -1) {
      this.props.history.push(routes.SPLASH);
    }

    this.state = {
      userId: global.userId,
      modal: false,
      previewError: false,
      urlInput: "",
      errorText: " ",
      groupTitle: "",
      groupDescr: "",
      groupImage: create,
      groupLinks: [],
      groupMembers: [],
      groupDiscussion: "",
      formImages: [
        [ music, art ],
        [ sports, theater],
        [ video_games, food ],
        [ travel, books ],
        [ politics, board_games ],
        [ photography, other ]
      ],
      categories: ['music', 'art', 'sports', 'theater', 'video_games',
                   'food', 'travel', 'books', 'politics', 'board_games',
                   'photography', 'other'],
      music: [],
      art: [],
      sports: [],
      theater: [],
      video_games: [],
      food: [],
      travel: [],
      books: [],
      politics: [],
      board_games: [],
      photography: [],
      other: []
    }
    this.toggle = this.toggle.bind(this);
    this.loadImage = this.loadImage.bind(this);
    this.confirmImage = this.confirmImage.bind(this);
    this.validImage = this.validImage.bind(this);
  }

  // Pre: User is signed in (this.props.user is not null)
  // Post: Updates new group in firebase database
  createNewGroup() {
    const { firebase } = this.props;

    if (!this.validForm()) {
      let payload = {
          groupId: 0,
          groupTitle: this.state.groupTitle,
          groupDescription: this.state.groupDescr,
          groupImage: this.state.groupImage,
          groupInterests: {
            music: this.state.music,
            art: this.state.art,
            sports: this.state.sports,
            theater: this.state.theater,
            video_games: this.state.video_games,
            food: this.state.food,
            travel: this.state.travel,
            books: this.state.books,
            politics: this.state.politics,
            board_games: this.state.board_games,
            photography: this.state.photography,
            other: this.state.other
          },
          groupMembers: {
              [this.state.userId]: {
                  userId: this.state.userId
              }
          },
          groupDiscussion: {
            numPosts: 0,
            posts: ""
          }
      }
      firebase.createNewGroup(payload);
      alert("New group successfully created!");
      this.props.history.push('/groups');
    } else {
      alert("You are required to include a description, title, and image in order to create group.")
    }
  }

  createFormRows() {
    let count = -2;
    let rows = this.state.formImages.map((row, key) => {
      count += 2;
      let name1 = this.state.categories[count];
      let name2 = this.state.categories[count + 1];
      return <div className="interest-row" key={key}>
              <div className="profile-interest">
                  <div className="interest-img">
                    <img src={row[0]} alt={this.state.categories[count]}/>
                  </div>
                  <ChipInput
                    className="accountChipInput"
                    placeholder={`Press Enter to add ${this.state.categories[count]}`}
                    onChange={(chips) => this.handleChange(chips, name1)}
                  />
              </div>
              <div className="profile-interest">
                  <div className="interest-img">
                    <img src={row[1]} alt={this.state.categories[count + 1]}/>
                  </div>
                  <ChipInput
                    className="accountChipInput"
                    placeholder={`Press Enter to add ${this.state.categories[count + 1]}`}
                    onChange={(chips) => this.handleChange(chips, name2)}
                  />
              </div>
            </div>
    })
    return rows;
  }

  handleChange(chips, val) {
    this.setState({[val]: chips});
  }

  validForm() {
    return (this.state.groupTitle === "" ||
            this.state.groupDescr === "" ||
            this.state.groupImage === create);
  }

  changeImage() {
    this.toggle();
  }

  toggle() {
    this.setState({
        modal: !this.state.modal,
        previewError: false,
        errorText: "",
        urlInput: "",
    });
  }

  validImage() {
    if (!this.state.previewError && this.state.urlInput.length > 0 && document.getElementById("preview-image").src !== create) {
        return true;
    } else {
        return false;
    }
  }

  confirmImage() {
    if (this.validImage()) {
      let url = document.getElementById("image-input").value;
      this.setState({
          groupImage: url
      });
      this.toggle()
    }
  }

  loadImage() {
    let unChanged = false;
    let originalSource = document.getElementById("preview-image").src;
    if (document.getElementById("preview-image").src === create) {
        unChanged = true;
    }
    let url = document.getElementById("image-input").value;
    let image = document.getElementById("preview-image");
    image.onerror = (msg) => {
        if (unChanged) {
          image.src = create;
        } else {
          image.src = originalSource;
        }
        this.setState({
            previewError: true,
            errorText: "Picture URL could not be loaded"
        });
        image.onload = () => {
            this.setState({
                previewError: true,
                errorText: "Picture URL could not be loaded"
            });
        }

    }

    image.onload = () => {
        this.setState({
            previewError: false,
            errorText: ""
        });
    }

    image.src = url;
    this.inputChange(url);
  }

  inputChange(e) {
    this.setState({
        urlInput: e
    });
  }

  render() {
    return(
      <div id="create-page">
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader id="image-preview">
            <div id="preview-container">
              <img id="preview-image" src={this.state.groupImage} alt="preview"/>
            </div>
            <p>Image URL:</p>
          </ModalHeader>
          <ModalBody>
            <input id="image-input" onChange={(e) => this.inputChange(e.target.value)}></input>
          </ModalBody>
          <p id="error-message">{this.state.errorText}</p>
          <ModalFooter id="modal-buttons">
            <Button color="primary" onClick={this.loadImage}>Load Image</Button>
            <Button color="success" id="confirm-button" onClick={this.confirmImage}>Confirm</Button>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <div id="create-content">
          <div id="create-desc">
            <div id="create-img">
              <img src={this.state.groupImage} alt="" onClick={() => this.changeImage()}/>
            </div>
            <div id="create-title">
              <textarea id="title-input" rows="1" placeholder="Name" onChange={(event) => this.handleChange(event.target.value, "groupTitle")} maxLength="40">
              </textarea>
              <textarea id="desc-input" rows="5" placeholder="Descriptions..." onChange={(event) => this.handleChange(event.target.value, "groupDescr")} maxLength="200">
              </textarea>
            </div>
          </div>
           <h5>Your Group&#39;s Interests</h5>
          <div id="create-interests">
            { this.createFormRows() }
          </div>
          <p id="sub-text">Note: You are required to include a description, title, and image in order to create group.</p>
          <div id="create-button">
            <button id="create-group-btn" onClick={() => this.createNewGroup()}>Create Group</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(CreateGroup);
