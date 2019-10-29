import React, { Component }  from 'react';

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      links: ""
    }
  }

  // Pre: User is signed in and member of group
  // Post: Updates new post in firebase database
  createNewPost() {
  }


  render() {
    return(
      <div>
        Create Post content goes here
      </div>
    );
  }

}

export default CreatePost;
