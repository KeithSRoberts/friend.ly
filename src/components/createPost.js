import React, { Component }  from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// class CreatePost extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "",
//       content: "",
//       links: ""
//     }
//   }

//   // Pre: User is signed in and member of group
//   // Post: Updates new post in firebase database
//   createNewPost() {
//   }


//   render() {
//     return(
//       <div>
//         Create Post content goes here
//       </div>
//     );
//   }

// }

// export default CreatePost;
class createPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        {/* <Button id="create-post-button" onClick={this.toggle}>New Post</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader>Create a post</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button onClick={this.toggle}>Submit Post</Button>{' '}
                <Button onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal> */}
      </div>
    );
  }
}

export default <createPost buttonLabel='open modal' />;
