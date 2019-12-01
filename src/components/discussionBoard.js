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
      numPosts: props.posts.numPosts,
      isModalOpen: false,
      groupIndex: props.groupId
    }
    // this.state.posts = this.fetchPosts();
    this.toggle = this.toggle.bind(this);
    this.createNewPost = this.createNewPost.bind(this);
    
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

  componentDidMount() {
    let allPosts = [];
    let data = this.props.posts.posts;
    let numPosts = this.props.posts.numPosts;
    console.log(data)
    console.log(numPosts);

    for (let i = 1; i <= numPosts; i++) {
      allPosts.push(data['post-' + i])
    }

    this.setState({
      posts: allPosts
      // numPosts: posts.length
    })

  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.posts !== this.props.posts) {
        this.setState({ posts: this.props.posts });
    }
    console.log(previousProps.posts);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     posts: nextProps.posts
  //   })
  // }

  renderPosts = () => {    
    let posts = this.state.posts.map((p, index) => {
      return (
        <Post key={"post-" + index} post={p} />
      )
    })
    return posts;
  }

  renderModal() {
    return(
      <CreatePost isOpen={this.state.isModalOpen} 
                  toggle={this.toggle} 
                  createNewPost={this.createNewPost}/>
    )
  }

  createNewPost = (post) => { 
    const { firebase } = this.props;

    post['groupIndex'] = this.state.groupIndex;
    post['author'] = "Bojack";
    post['upvotes'] = 0;
    firebase.doCreatePost(post, this.state.groupIndex)
    this.toggle();
    this.setState({
      numPosts: this.state.numPosts + 1
    });
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
