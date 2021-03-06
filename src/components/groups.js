import React, { Component }  from "react";
import { withFirebase } from '../firebase';
import * as routes from "../constants/routes";
import "./css/groups.css";

class Groups extends Component {
  constructor(props) {
    super(props);

    if (global.userId === -1) {
      this.props.history.push(routes.SPLASH);
    }
    
    const {firebase} = props
    this.state = {
        groups: [],
    };
    this.fetchGroupList(firebase)
  }
  UNSAFE_componentWillReceiveProps(props) {
    const {firebase} = this.props
    if (props.queryFromApp !== "" && props.location.search !== "?reload") {
      this.searchGroup(firebase, props.queryFromApp)
    } else {
      this.fetchGroupList(firebase);
    }
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
    if (groupCards.length < 1) {
        groupCards = <h4>No results found...</h4>;
    }
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

  searchGroup = (firebase, query) => {
    let titleMatch = [];
    let descMatch = [];
    firebase.fetchGroups().then((data)=> {
      data.forEach(group => {
        if (group.groupTitle.toLowerCase().includes(query.toLowerCase())) {
          titleMatch.push(group);
        } else if (group.groupDescription.toLowerCase().includes(query.toLowerCase())) {
          descMatch.push(group);
        }
      });
    
    this.setState({
      groups: titleMatch.concat(descMatch)
    })
    });
  }
}

export default withFirebase(Groups);
