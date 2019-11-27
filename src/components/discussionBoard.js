import React, { Component }  from "react";
import { Button} from 'reactstrap';
import "./css/discussionBoard.css";
import { withFirebase } from '../firebase';
import CreatePost from "./createPost";
import Post from './post';
// import globals from  '../constants/globals'
// import app from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database'


// import * as routes from '../constants/routes';

class discussionBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],//this.props.posts.posts,
      numPosts: 0, //this.props.posts.numPosts,
      isModalOpen: false,
      groupIndex: 0//this.props.groupId
    }
    // this.state.posts = this.fetchPosts();
    this.toggle = this.toggle.bind(this);
    this.createNewPost = this.createNewPost.bind(this);
    console.log(this.props);

    // this.postsRef = withFirebase.ref('groups/' + this.state.groupIndex + '/groupDiscussion');
    
  }

  // pre: user must be logged in order to see posts (this.props.user != null)
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  // fetchPosts = () => {
  //   const { firebase } = this.props;

  //   firebase.doRenderPosts(this.state.groupIndex).then((allPosts) => {
  //     this.setState({posts : allPosts});
  //   });
  // }

  renderPosts() {
    console.log(this.state.posts);
    console.log(this.state.numPosts);

    let allPosts = [];

    for(let i = 1; i <= this.state.numPosts; i++) {
      console.log(this.state.posts['post-' + i]);
      // allPosts.push(
      //     <Post key={"post-" + i} post={this.state.posts['post-' + i]} />
      // )
    }
    console.log(allPosts);

    // let posts = this.state.posts.posts.map((p, index) => {
      // return(
      //   <Post key={"post-" + index} post={p} />
      // )
      // console.log(p);
    // }
    // return posts
    // this.setState({
    //   posts: allPosts
    // })
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
    this.toggle();
  }
    
 


  toggle() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }


  render() {

    // let posts = this.renderPosts();
    let posts = [];
 
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
