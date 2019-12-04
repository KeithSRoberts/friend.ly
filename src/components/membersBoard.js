import React, { Component }  from "react";
import { withFirebase } from '../firebase';
import * as routes from "../constants/routes";
import { withRouter } from "react-router-dom";
import "./css/membersBoard.css";

class membersBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: props.members,
      placeholder: "https://ra.ac.ae/wp-content/uploads/2017/02/user-icon-placeholder.png"
    }
  }

  membersPage(member) {
    this.props.history.push(routes.ACCOUNT + "/" + member)
  }

  createCards() {
    let cards = Object.keys(this.state.members).map((member, index) => {
      return(
        <div key={index} onClick={() => this.membersPage(member)}>
          <div className="member-card">
            <div className="member-pic">
              <img src={this.state.members[member].data !== undefined ? (this.state.members[member].data.avatar !== "" ? this.state.members[member].data.avatar : this.state.placeholder) : this.state.placeholder } alt=""/>
            </div>
            <div className="member-desc">
              <h5 className="member-title"> {this.state.members[member].data !== undefined ? this.state.members[member].data.username : "User"} </h5>
              <p className="member-text"> {this.state.members[member].data !== undefined ? this.state.members[member].data.email : "Text"} </p>
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

export default withFirebase(withRouter(membersBoard));
