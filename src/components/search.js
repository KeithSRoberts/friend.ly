import React, { Component }  from "react";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class Search extends Component {
  constructor(props){
    super();
  }
  onChangeInput = (event) => {
    this.query = event.target.value;

  }
  handleClick = (event) => {
    this.props.callBackToNavbar(this.query);
  }

  render() {
    return(
      <div className="search-box">
        <InputGroup id="yuge">
          <Input placeholder="Look for groups!" onChange={this.onChangeInput}/>
          <InputGroupAddon addonType="append">
            <Button id="search-button" onClick={this.handleClick}>Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
