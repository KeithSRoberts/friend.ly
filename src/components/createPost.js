import React, { Component }  from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

class CreatePost extends Component {
 

  // Pre: User is signed in and member of group
  // Post: Updates new post in firebase database
  handleNewPost(post) {
    if(  post.title.length !== 0 &&
        post.text.length !== 0
        // post.author.length !== 0
      ) {
        this.props.createNewPost(post);
      } else {
        console.log("invalid post");
      }

    // render() {
    //   return(
    //     <div>
    //       Create Post content goes here
    //     </div>
    //   );
    // }

  }

  render() {
    let newPost = {
      title: "",
      text: "",
      author: "",
    }

    function handleChange(event) {
      let field = event.target.name;
      let value = event.target.value;
      newPost[field] = value;
      console.log(newPost);
    }

    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader>Create a post</ModalHeader>
        <ModalBody id="create-post-body">
          <Input id="post-title-form" placeholder="Title" name="title"
                 onChange={(e) => handleChange(e)}/>
          <Input id="post-text-form" placeholder="Text" name="text"
                 onChange={(e) => handleChange(e)}/>
        </ModalBody>
        <ModalFooter>
          <div className="modal-buttons">
            <Button id="submit-post-button" onClick={() => this.handleNewPost(newPost)}>Submit Post</Button>
            <Button id="cancel-post-button" onClick={this.props.toggle}>Cancel</Button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default CreatePost;
