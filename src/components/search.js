import React, { Component }  from "react";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class Search extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchResults: []
  //   }
  //   this.state.results = this.getResults();


  // }
  // Pre: searchterm is provided to search groups with
  // Post: groups with all relevant matching names are returned.
  // getResults = (searchTerm) => {
  //   groupMatch = [];
  //   //filter by searchterm
  //   return groupMatch
  // }

  // // Pre: there are groups to show
  // // Post: results are populated into the DOM
  // populateResults = (groupMatch) => {

  // }

  render() {
    return(
      <div className="search-box">
        <InputGroup className="d-flex p-2 flex-row search-bar"> 
          <Input placeholder="Look for groups!" />
          <InputGroupAddon addonType="append">
            <Button id="search-button">Search</Button>
          </InputGroupAddon>

        </InputGroup>
      </div>
    );
  }
}

export default Search;
