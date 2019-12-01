import React, { Component }  from "react";
import { withFirebase } from '../firebase';
import * as routes from "../constants/routes";
import "./css/groups.css";

class Groups extends Component {
  constructor(props) {
    super();
    this.state = {
        groups: [],
    };
    const { firebase } = props;
    this.fetchGroupList(firebase);
  }

  render() {
    return (
    <div id="dash-content">
        {this.renderGroupCards()}
    </div>
    );
  }

  renderGroupCards() {
    let groupCards = this.state.groups.map((groups, index) => {
      return (
          <div key={groups.groupId} className="dash-card" onClick={() => this.props.history.push(routes.VIEW_GROUP + "/" + groups.groupId)}>
            <div className="dash-card-image">
              <img src={groups.groupImage} alt=""/>
            </div>
            <div className="dash-card-text">
              <h5 className="dash-card-title">{groups.groupTitle}</h5>
              <p className="dash-card-desc">{groups.groupDescription}</p>
              <button className="dash-card-button">Learn More</button>
            </div>
          </div>
      );
    });
    return groupCards
  }

  fetchGroupList = (firebase) => {
    // Preconditions: This.props.user is not null (user is signed in)
    // Postconditions: Groups array is populated with group data and returned
    firebase.fetchGroups().then((data) => {
      this.setState({
        groups: data
      });
    });
  }
}

export default withFirebase(Groups);
