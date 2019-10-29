import React, { Component }  from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    }
    this.state.results = this.getResults();


  }
  // Pre: searchterm is provided to search groups with
  // Post: groups with all relevant matching names are returned.
  getResults(searchTerm) {
    groupMatch = [];
    //filter by searchterm
    return groupMatch
  }

  // Pre: there are groups to show
  // Post: results are populated into the DOM
  populateResults(groupMatch){

  }
  render() {
    return(
      <div>
        show search results cards
      </div>
    );
    }
}

export default Search;
