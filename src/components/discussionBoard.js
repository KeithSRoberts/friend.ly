import React, { Component }  from "react";
import { Button } from 'reactstrap';
import "./css/discussionBoard.css";

// import * as routes from '../constants/routes';

class discussionBoard extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
    this.state.posts = this.fetchPosts();
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
      author: "Member Name",
      upvotes: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id nisi placerat, luctus nisi ac, semper tellus. Aenean tristique auctor quam    ,     vitae accumsan enim posuere sit amet.",
      // image: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/vcta1kcxdr5y5xyulxel.png"
      // image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/short-haired-dogs-boston-terrier-1563206936.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
      image: "https://t2conline.com/wp-content/uploads/2017/12/vizslasf4.jpg"
    }
    posts.push(testPost);
    return posts;
  }

  createPosts() {
    let posts = this.state.posts.map((p) => {
      return(
        <div className="post-container">
          <div className="post-buttons">
            <Button className="button-upvote">
              <img src="../../img/button-upvote.png"/>
              </Button>
            {p.upvotes}
            <Button className="button-downvote">
              <img src="../../img/button-downvote"/>
              </Button>  
          </div>
          <div className="post-content">
            <div className="post-author-info">
              <div className="post-image">
                <img src={p.image} />
              </div>
              <div className="post-author">
                {p.author}
              </div>
            </div>
            <div className="post-text">
              {p.description}
            </div>
          </div>
        </div>
      )
    })
    return posts;
  }


  render() {

    // let posts = this.renderPosts();

    // const [modal, setModal] = useState(false);

    // const toggle = () => setModal(!modal);
 
    return(
      <div>
        <Button id="create-post-button">New Post</Button>
        {/* <Modal onClick={toggle}>
          <ModalBody>
            Make a post
          </ModalBody>
        </Modal> */}
        <div className="discussion-body">
          <div className="discussion-content">
            {this.createPosts()}
          </div>
        </div>
      </div>        
    );
  }





}

export default discussionBoard;
