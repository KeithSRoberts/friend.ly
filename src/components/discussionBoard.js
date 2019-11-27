import React, { Component }  from "react";
import { Button} from 'reactstrap';
import "./css/discussionBoard.css";
import { withFirebase } from '../firebase';
import CreatePost from "./createPost";
import Post from './post';
// import app from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database'


// import * as routes from '../constants/routes';

class discussionBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isModalOpen: false,
      groupIndex: 0 //this.props.groupIndex
    }
    // this.state.posts = this.fetchPosts();
    this.toggle = this.toggle.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
    this.createNewPost = this.createNewPost.bind(this);
    this.state.posts = props.posts;

    // this.postsRef = withFirebase.ref('groups/' + this.state.groupIndex + '/groupDiscussion');
    
  }

  // pre: user must be logged in order to see posts (this.props.user != null)
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  fetchPosts = () => {
    const { firebase } = this.props;

    firebase.doRenderPosts(this.state.groupIndex).then((allPosts) => {
      this.setState({posts : allPosts});
    });
  }

  renderPosts() {
    // setTimeout(function() {
      this.fetchPosts();
    // }, 2000)


    let posts = this.state.posts.map((p, index) => {
      return(
        <Post key={"post-" + index} post={p} />
      )
    })
    return posts
  }

  renderModal() {
    return(
      <CreatePost isOpen={this.state.isModalOpen} toggle={this.toggle} createNewPost={this.createNewPost}/>
    )
  }

  createNewPost = (post) => { 
    const { firebase } = this.props;
    console.log(post);

    post['groupIndex'] = this.state.groupIndex;
    post['author'] = "Bojack";
    post['upvotes'] = 0;
    firebase.doCreatePost(post, this.state.groupIndex)

  }
    
 


  toggle() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }


  render() {

    // let posts = this.renderPosts();
 
    return(
      <div>
        <div className="discussion-body">
          <div className="create-post-button-area">
            <Button id="create-post-button" onClick={this.toggle}>New Post</Button>
            {this.renderModal()}
          </div>
          <div className="discussion-content">
            {this.renderPosts()}
          </div>
        </div>
      </div>       
    );
  }





}

export default withFirebase(discussionBoard);
