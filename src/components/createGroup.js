import React, { Component }  from "react";
import ChipInput from 'material-ui-chip-input';
import { withFirebase } from '../firebase';
import "./css/createGroup.css"
import art from "../constants/icons/art.png";
import board_games from "../constants/icons/board_games.png";
import books from "../constants/icons/books.png";
import food from "../constants/icons/food.png";
import instagram from "../constants/icons/instagram.png";
import music from "../constants/icons/music.png";
import other from "../constants/icons/other.png";
import travel from "../constants/icons/travel.png";
import politics from "../constants/icons/politics.png";
import sports from "../constants/icons/sports.png";
import theater from "../constants/icons/theater.png";
import video_games from "../constants/icons/video_games.png";
import create from "../constants/icons/Create_fill.png";

class CreateGroup extends Component {
  constructor() {
    super();
    this.state = {
      groupTitle: "",
      groupDescr: "",
      groupImage: "",
      groupLinks: [],
      groupMembers: [],
      formImages: [
        [ music, art ],
        [ sports, theater],
        [ video_games, food ],
        [ travel, books ],
        [ politics, board_games ],
        [ instagram, other ]
      ],
      categories: ['music', 'art', 'sports', 'theater', 'video_games',
                   'food', 'travel', 'books', 'politics', 'board_games',
                   'instagram', 'other'],
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
      instagram: [],
      other: []
    }
  }

  // Pre: User is signed in (this.props.user is not null)
  // Post: Updates new group in firebase database
  createNewGroup() {
    const { firebase } = this.props;
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
          social: this.state.instagram,
          other: this.state.other
        },
        groupMembers: []
    }
    firebase.createNewGroup(payload)
    alert("New group successfully created!");
    this.props.history.push('/groups');
  }

  createFormRows() {
    let count = -2;
    let rows = this.state.formImages.map((row, key) => {
      count += 2;
      let name1 = this.state.categories[count];
      let name2 = this.state.categories[count + 1];
      return <div className="interest-row" key={key}>
              <div className="interest-category">
                  <div className="interest-img">
                    <img src={row[0]} alt={this.state.categories[count]}/>
                  </div>
                  <div className="interest-input">
                    <ChipInput
                      onChange={(chips) => this.handleChange(chips, name1)}
                    />
                  </div>
              </div>
              <div className="interest-category">
                  <div className="interest-img">
                    <img src={row[1]} alt={this.state.categories[count + 1]}/>
                  </div>
                  <div className="interest-input">
                    <ChipInput
                      onChange={(chips) => this.handleChange(chips, name2)}
                    />
                  </div>
              </div>
            </div>
    })
    return rows;
  }

  handleChange(chips, val) {
    this.setState({[val]: chips});
  }

  validForm() {
    return (this.state.groupTitle == "" ||
            this.state.groupDescr == "" ||
            this.state.music.length > 10 ||
            this.state.art.length > 10 ||
            this.state.board_games.length > 10 ||
            this.state.books.length > 10 ||
            this.state.food.length > 10 ||
            this.state.instagram.length > 10 ||
            this.state.other.length > 10 ||
            this.state.politics.length > 10 ||
            this.state.sports.length > 10 ||
            this.state.theater.length > 10 ||
            this.state.travel.length > 10 ||
            this.state.video_games.length > 10);
  }

  render() {
    return(
      <div id="create-page">
        <div id="create-content">
          <div id="create-desc">
            <div id="create-img">
              <img src={create} alt=""/>
            </div>
            <div id="create-title">
              <textarea id="title-input" rows="1" placeholder="Name" onChange={(event) => this.handleChange(event.target.value, "groupTitle")} maxLength="40">
              </textarea>
              <textarea id="desc-input" rows="5" placeholder="Descriptions..." onChange={(event) => this.handleChange(event.target.value, "groupDescr")} maxLength="200">
              </textarea>
            </div>
          </div>
           <h5>Your Group&#39;s Interests (Up to 10 per category)</h5>
          <div id="create-interests">
            { this.createFormRows() }
          </div>
          <button id="create-group-btn" onClick={() => this.createNewGroup()} disabled={this.validForm()}>Create Group</button>
        </div>
      </div>
    );
  }
}

export default withFirebase(CreateGroup);
