import React, { Component }  from "react";

class membersBoard extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    }
    this.state.members = this.getMembers();
  }

  // pre: user must be logged in order to see posts (this.props.user != null)
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  getMembers() {
    let members = [];
    return members;
  }


  render() {
    return(
      <div>
        Members list content goes here
      </div>
    );
  }





}

export default membersBoard;
