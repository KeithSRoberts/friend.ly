import React, { Component }  from "react";
import MembersBoard from "./membersBoard";
import DiscussionBoard from "./discussionBoard";

import "./css/viewGroup.css";

class ViewGroup extends Component {
  constructor() {
    super();
    this.state = {
      showMembers: true,
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

  changeContent() {
    this.setState({
      showMembers: !this.state.showMembers
    })
  }

  render() {
    return(
      <div id="groups-page">
        <div id="groups-content">
          <div id="group-heading">
            <div id="group-pic">
              <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/short-haired-dogs-boston-terrier-1563206936.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*" alt="Dog"/>
            </div>
            <div id="group-desc">
              This is the view for group number { this.props.match.params.groupId }
            </div>
          </div>
          <div id="content-select">
            <button onClick={this.changeContent.bind(this)}>Members</button>
            <button onClick={this.changeContent.bind(this)}>Discussion</button>
          </div>
          <div id="content-view">
            { this.state.showMembers ? (
                <MembersBoard />
            ) : (
                <DiscussionBoard />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewGroup;
