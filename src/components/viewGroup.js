import React, { Component }  from "react";

class ViewGroup extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      links: [],
      members: [],
      discussion: ""
    }

    this.state.links = this.fetchLinks();
    this.state.members = this.fetchMembers();
    this.state.discussion = this.fetchDiscussion();
  }

  // Pre: Param newDescription is different than the current title
  // Post: The group"s description state will be updated and displayed on the user interface
  updateDescription = (newDescription) => {
    this.setState({
      description: newDescription
    })
  }

  // Pre: This.props.user is not null (user is signed in)
  // Post: Returns an array with all the links associated with this Group"s component
  fetchLinks = () => {
    let links = [];
    return links;
  }

  // Pre: this.props.user is not null (user is signed in) 
  //      and Member list is not 0
  // Post: returns an array with name of every member within the group
  fetchMembers = () => {
    let members = [];
    return members;
  }

  // Pre: newMember is a user who exists within the database
  // Post: updates the list of members within the group and adds the new member to the group
  updateMembers = (newMember) => {
    let groupMembers = this.fetchMembers();
    this.setState({
      members: groupMembers
    })
  }

  // This function is for the viewGroup component to be able to communicate with the discussion 
  // component and display all the posts within discussion to the user
  // Pre: User is signed in (this.props.user is not null) 
  // Post: fetches the posts made in the group from the firebase database and displays them to 
  //       the user
  fetchDiscussion = () => {

  }

  
  render() {
    return(
      <div classname="group">
        View Group content goes here
      </div>
    );
  }
}

export default ViewGroup;
