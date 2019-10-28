import React, { Component }  from 'react';

class Groups extends Component {
  constructor() {
    super();
    this.state = {
        recommended: [],
        groups: []
    };
    this.state.groups = fetchGroupList();
    this.state.recommended = getRecommendations(this.state.groups);
  }

  render() {
    return(
      <div>
        Groups content goes here
      </div>
    );
  }

  fetchGroupList() {
    // Preconditions: This.props.user is not null (user is signed in)
    // Postconditions: Groups array is populated with group data and returned
    let groups = []
    return groups;
  }

  getRecommendations(groupsList) {
    /* Preconditions: This.props.user is not null (user is signed in)
                      The passed groups array is populated with group data
       Postconditions: Recommendations array contains recommended groups and
                       returned
    */
    let recommendations = [];
    return recommendations;
  }
}

export default Groups;
