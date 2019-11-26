import React, { Component }  from "react";
import "./css/membersBoard.css";

class membersBoard extends Component {
  constructor(props) {
    super();
    this.state = {
      members: props.members
    }
  }

  shouldComponentUpdate(previousProps, previousState) {
    if (previousProps.data !== this.props.data) {
        this.setState({ members: this.props.members });
        return true;
    }
    return false;
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.data !== this.props.data) {
        this.setState({ members: this.props.members });
    }
  }

  // pre: user must be logged in order to see posts (this.props.user != null)
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  getMembers() {
    let members = [];
    return members;
  }

  createCards() {
    let cards = this.state.members.map((member, index) => {
      return(
        <div key={index}>
          <div className="member-card">
            <div className="member-pic">
              <img src={member.image} alt=""/>
            </div>
            <div className="member-desc">
              <h5 className="member-title"> {member.name} </h5>
              <p className="member-text"> {member.text} </p>
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
