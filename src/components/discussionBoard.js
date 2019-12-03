import React, { Component }  from "react";
import { Button} from 'reactstrap';
import "./css/discussionBoard.css";
import { withFirebase } from '../firebase';
import CreatePost from "./createPost";
import Post from './post';

class discussionBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], 
      numPosts: 0, 
      isModalOpen: false,
      groupId: props.groupId
    }

    this.toggle = this.toggle.bind(this);
    this.createNewPost = this.createNewPost.bind(this);
    
  }

  componentDidMount() {
    let allPosts = [];
    let data = this.props.posts.posts;

    for (let i = 1; i <= this.props.posts.numPosts; i++) {
      allPosts.push(data['post-' + i])
    }

    this.setState({
      posts: allPosts
    })

  }

  // pre: user must join the group in order to post
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  renderPosts = () => {    
    let posts = this.state.posts.map((p, i) => {
      return (
        <Post key={"post-" + i} name={"post-" + (i + 1)} post={p} updateScore={this.updatePostScore}/>
      )
    })
    return posts.reverse();
  }
  
  updatePostScore = (post) => {
    const { firebase } = this.props;

    firebase.doUpdatePostScore(post, this.state.groupId);
  }
  
  // pre: user must enter valid text into createPost input fields
  // post: creates a new post in the group that renders immediately at the top of discussion board
  createNewPost = (post) => { 
    const { firebase } = this.props;

    post['groupIndex'] = this.state.groupId;
    post['author'] = "Bojack";
    post['upvotes'] = 0;
    firebase.doCreatePost(post, this.state.groupId)
    this.toggle();
    this.setState({
      numPosts: this.state.posts.length
    });
    this.props.fetchData(firebase);
  }

  // pre: user must click on 'Create Post' button for modal to render and post
  // post: renders a modal object in which user can input text and a title to make a new post
  renderModal() {
    return(
      <CreatePost isOpen={this.state.isModalOpen} 
                  toggle={this.toggle} 
                  createNewPost={this.createNewPost}/>
    )
  }

  toggle() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return(
      <div>
        <div className="discussion-body">
          <div className="create-post-button-area">
            {this.props.canPost ?
              <Button id="create-post-button" onClick={this.toggle}>New Post</Button> : ""}
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
