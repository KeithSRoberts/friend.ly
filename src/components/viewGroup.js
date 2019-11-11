import React, { Component }  from "react";
import MembersBoard from "./membersBoard";
import DiscussionBoard from "./discussionBoard";

import "./css/viewGroup.css";

class ViewGroup extends Component {
  constructor() {
    super();
    this.state = {
      showMembers: true,
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/short-haired-dogs-boston-terrier-1563206936.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*",
      title: "Group Title ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id nisi placerat, luctus nisi ac, semper tellus. Aenean tristique auctor quam,     vitae accumsan enim posuere sit amet. Vivamus porta nulla quis nisi bibendum, et rutrum leo rutrum. Aenean fermentum lorem odio utrum leo rutrum",
      links: [],
      members: [],
      discussion: ""
    }

    this.state.links = this.fetchLinks();
    this.state.members = this.fetchMembers();
    this.state.discussion = this.fetchDiscussion();
  }

  componentDidMount() {
    this.state.showMembers = true;
    this.refs.discussButton.style.color = "gray";
    this.refs.discussButton.disabled = false;
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
    if (this.state.showMembers) {
        this.refs.memberButton.style.color = "gray";
        this.refs.discussButton.style.color = "black";
        this.refs.discussButton.disabled = true;
        this.refs.memberButton.disabled = false;
    } else {
        this.refs.memberButton.style.color = "black";
        this.refs.discussButton.style.color = "gray";
        this.refs.discussButton.disabled = false;
        this.refs.memberButton.disabled = true;
    }
  }

  render() {
    return(
      <div id="groups-page">
        <div id="groups-content">
          <div id="group-heading">
            <div id="group-pic">
              <img src={this.state.image} />
            </div>
            <div id="group-desc">
                <h3>{ this.state.title }{ this.props.match.params.groupId }</h3>
                <p>{ this.state.description }</p>
                <button>Join</button>
            </div>
          </div>
          <div id="content-select">
            <button id="member-button" ref="memberButton" onClick={this.changeContent.bind(this)}>Members</button>
            <button id="discuss-button" ref="discussButton" onClick={this.changeContent.bind(this)}>Discussion</button>
          </div>
          <div id="content-view">
            { this.state.showMembers ? (
                <MembersBoard members={this.state.members}/>
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
