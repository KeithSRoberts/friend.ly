import React, { Component }  from 'react';

class discussionBoard extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
    this.state.posts = this.getPosts();
  }

  // pre: user must be logged in order to see posts (this.props.user != null)
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  getPosts() {
    posts = [];
    return posts;
  }


  render() {
    return(
      <div>
        Discussion Board content goes here
      </div>
    );
  }





}

export default discussionBoard;
