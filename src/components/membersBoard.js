import React, { Component }  from "react";
import "./css/membersBoard.css";

class membersBoard extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    }
    let testMember = {
        name: "Member Name",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id nisi placerat, luctus nisi ac, semper tellus. Aenean tristique auctor quam    ,     vitae accumsan enim posuere sit amet.",
        image: "https://t2conline.com/wp-content/uploads/2017/12/vizslasf4.jpg"
    }
    this.state.members[0] = testMember;
    this.state.members[1] = testMember;
    this.state.members[2] = testMember;
  }

  componentDidMount() {
    this.state.members = this.props.members;
  }

  // pre: user must be logged in order to see posts (this.props.user != null)
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  getMembers() {
    let members = [];
    return members;
  }

  createCards() {
    let cards = this.state.members.map((member) => {
      return(
        <div>
          <div class="member-card">
            <div class="member-pic">
              <img src={member.image} />
            </div>
            <div class="member-desc">
              <h5 class="member-title"> {member.name} </h5>
              <p class="member-text"> {member.text} </p>
            </div>
          </div>
        </div>
      );
    })

    return cards;
  }

  render() {
    return(this.createCards());
  }
}

export default membersBoard;
