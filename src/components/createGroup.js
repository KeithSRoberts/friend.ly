import React, { Component }  from "react";
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
      groupLinks: [],
      groupMembers: [],
      formImages: [
        [ music, art ],
        [ sports, theater],
        [ video_games, food ],
        [ travel, books ],
        [ politics, board_games ],
        [ instagram, other ]
      ]
    }
  }

  // Pre: User is signed in (this.props.user is not null)
  // Post: Updates new group in firebase database
  createNewGroup() {
  }

  createFormRows() {
    let rows = this.state.formImages.map((row) => {
      return <div class="interest-row">
              <div class="interest-category">
                  <div class="interest-img">
                    <img src={row[0]} alt=""/>
                  </div>
                  <div class="interest-input">
                    <textarea cols="9" rows="3">
                    </textarea>
                  </div>
              </div>
              <div class="interest-category">
                  <div class="interest-img">
                    <img src={row[1]} alt=""/>
                  </div>
                  <div class="interest-input">
                    <textarea cols="9" rows="3">
                    </textarea>
                  </div>
              </div>
            </div>
    })
    return rows;
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
              <textarea id="title-input" rows="1" placeholder="Name">
              </textarea>
              <textarea id="desc-input" rows="5" placeholder="Descriptions...">
              </textarea>
            </div>
          </div>
          <h5>Your Group&#39;s Interests</h5>
          <div id="create-interests">
            { this.createFormRows() }
          </div>
          <button id="create-group-btn">Create Group</button>
        </div>
      </div>
    );
  }
}

export default CreateGroup;
