import React, { Component }  from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup } from 'reactstrap';

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
        alert("Please fill out all fields with valid text");
      }

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
    }

    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader>Create a post</ModalHeader>
        <ModalBody id="create-post-body">
          <InputGroup>
            <Input id="post-title-form" placeholder="Title" name="title" maxLength="50"
                 onChange={(e) => handleChange(e)}/>
          </InputGroup>
          <InputGroup>
            <textarea id="post-text-form" placeholder="Text goes here" name="text" maxLength="400"
                  onChange={(e) => handleChange(e)}></textarea>
          </InputGroup>
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
