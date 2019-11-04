import React, { Component }  from "react";

class CreateGroup extends Component {
  constructor() {
    super();
    this.state = {
      groupTitle: "",
      groupDescr: "",
      groupLinks: [],
      groupMembers: []
    }
  }

  // Pre: User is signed in (this.props.user is not null)
  // Post: Updates new group in firebase database
  createNewGroup() {
    
  }


  render() {
    return(
      <div>
        Create group content goes here
      </div>
    );
  }





}

export default CreateGroup;
