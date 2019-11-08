import React, { Component, useState }  from "react";
import { Button, Modal, ModalBody, Input } from 'reactstrap';

import * as routes from '../constants/routes';

class discussionBoard extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
    this.state.posts = this.renderPosts();
  }

  // pre: user must be logged in order to see posts (this.props.user != null)
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  renderPosts() {
    posts = [];
    return posts;
  }


  render() {

    posts = this.renderPosts();

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
      <div>
        {/* <Button>Create Post</Button>
        <Modal onClick={toggle}>
          <ModalBody>
            Make a post
          </ModalBody>
        </Modal> */}
        <div className="discussion-body">
          Discussion Board content
          <div className="discussion-content">
            <div className="discussion-posts">
              {posts}
              Posts go here
            </div>
          </div>
        </div>
      </div>        
    );
  }





}

export default discussionBoard;
