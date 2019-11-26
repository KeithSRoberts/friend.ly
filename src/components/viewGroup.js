import React, { Component }  from "react";
import MembersBoard from "./membersBoard";
import DiscussionBoard from "./discussionBoard";
import { withFirebase } from '../firebase';

import "./css/viewGroup.css";

class ViewGroup extends Component {
  constructor(props) {
    super();
    this.state = {
      userId: 1,
      showMembers: true,
      image: "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png",
      title: String.fromCharCode(160),
      description: String.fromCharCode(160),
      links: [],
      members: [],
      groupId: props.match.params.groupId,
      discussion: ""
    }

    this.state.links = this.fetchLinks();
    this.state.members = this.fetchMembers();
    this.state.discussion = this.fetchDiscussion();
    const { firebase } = props;
    this.fetchGroupData(firebase);
    this.forceUpdate();
  }

  componentDidMount() {
    this.refs.discussButton.style.color = "gray";
    this.refs.discussButton.disabled = false;
  }

  fetchGroupData(firebase) {
    firebase.fetchGroup(this.state.groupId).then((data) => {
        if (data != null) {
            this.setState({
                title: data.groupTitle,
                description: data.groupDescription,
                image: data.groupImage,
                discussion: data.groupDiscussion,
                members: data.groupMembers
            });
        } else {
            this.setState({
                title: "This group does not exist",
                description: "No group could be found for groupID: " + this.state.groupId
            });
        }
    });
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
              <img src={this.state.image} alt=""/>
            </div>
            <div id="group-desc">
                <h3>{ this.state.title }</h3>
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
                <MembersBoard key={this.state.title} members={this.state.members}/>
            ) : (
                <DiscussionBoard />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(ViewGroup);
