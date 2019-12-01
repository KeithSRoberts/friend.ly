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
      posts: [], //this.props.posts.posts,
      numPosts: 0, //props.posts.numPosts,
      isModalOpen: false,
      groupId: props.groupId
    }

    // this.state.posts = this.fetchPosts();
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

  // componentDidUpdate(previousProps, previousState) {
  //   if (previousProps.posts !== this.props.posts) {
  //       this.setState({ posts: this.props.posts.posts });
  //   }
  // }

  // pre: user must be logged in order to see posts (this.props.user != null)
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  renderPosts = () => {    
    // if (this.state.posts !== null) {

      let posts = this.state.posts.map((p, index) => {
        return (
          <Post key={"post-" + index} post={p} />
        )
      })
      return posts.reverse();

    // } else {
    //   return "";
    // }
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
    
 


  toggle() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }


  render() {

    // let posts = this.renderPosts();
    let posts = [];
    console.log(this.props.canPost)
 
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
