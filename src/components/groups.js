import React, { Component }  from "react";

class Groups extends Component {
  constructor() {
    super();
    this.state = {
        groups: []
    };
    this.state.groups = this.fetchGroupList();
  }

  render() {
    return(
      <div>
        Groups content goes here
      </div>
    );
  }

  fetchGroupList = () => {
    // Preconditions: This.props.user is not null (user is signed in)
    // Postconditions: Groups array is populated with group data and returned
    let groups = []
    return groups;
  }
}

export default Groups;
