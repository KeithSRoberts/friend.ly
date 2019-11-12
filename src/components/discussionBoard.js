import React, { Component }  from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./css/discussionBoard.css";
import createPost from "./createPost";

// import * as routes from '../constants/routes';

class discussionBoard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      modal: false
    }
    this.state.posts = this.fetchPosts();
    this.toggle = this.toggle.bind(this);
  }

  // componentDidMount() {
    // this.state.posts = 
  // }

  // pre: user must be logged in order to see posts (this.props.user != null)
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  fetchPosts() {
    let posts = [];
    let testPost = {
      author: "Bojack",
      upvotes: 9,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id nisi placerat, luctus nisi ac, semper tellus. Aenean tristique auctor quam    ,     vitae accumsan enim posuere sit amet.",
      // image: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/vcta1kcxdr5y5xyulxel.png"
      // image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/short-haired-dogs-boston-terrier-1563206936.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
      image: "https://t2conline.com/wp-content/uploads/2017/12/vizslasf4.jpg"
    }
    posts.push(testPost);
    posts.push(testPost);
    return posts;
  }

  renderPosts() {
    let posts = this.state.posts.map((p) => {
      return(
        <div className="post-container">
          <div className="post-buttons">
            <Button className="button-upvote"
              />
            <h3>{p.upvotes}</h3>
            <Button className="button-downvote"/>
          </div>
          <div className="post-content">
            <div className="post-author-info">
              <div className="post-image">
                <img src={p.image} alt={p.author}/>
              </div>
              <div className="post-author">
                <h5>{p.author}</h5>
              </div>
            </div>
            <div className="post-text">
              <p>{p.description}</p>
            </div>
          </div>
        </div>
      )
    })
    return posts;
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {

    // let posts = this.renderPosts();

    // const [modal, setModal] = useState(false);

    // const toggle = () => setModal(!modal);
 
    return(
      <div>
        <div className="discussion-body">
          <div className="create-post-button-area">
            <Button id="create-post-button" onClick={this.toggle}>New Post</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader>Create a post</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <div className="modal-buttons">
                  <Button onClick={this.toggle}>Submit Post</Button>
                  <Button onClick={this.toggle}>Cancel</Button>
                </div>
              </ModalFooter>
            </Modal>
          </div>
          <div className="discussion-content">
            {this.renderPosts()}
          </div>
        </div>
      </div>        
    );
  }





}

export default discussionBoard;
