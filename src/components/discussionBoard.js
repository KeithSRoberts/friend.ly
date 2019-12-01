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
      posts: [],//this.props.posts.posts,
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
    let numPosts = this.props.posts.numPosts;
    console.log(data)
    console.log(numPosts);

    for (let i = 1; i <= numPosts; i++) {
      allPosts.push(data['post-' + i])
    }

    this.setState({
      posts: allPosts
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

  // pre: user must be logged in order to see posts (this.props.user != null)
  // post: returns an array of posts that can be viewed on the user interface from the viewGroup
  //       component
  renderPosts = () => {    
    let posts = this.state.posts.map((p, index) => {
      return (
        <Post key={"post-" + index} post={p} />
      )
    })
    return posts.reverse();
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
    console.log(this.state.numPosts);
    firebase.doCreatePost(post, this.state.groupId)
    this.toggle();
    this.setState({
      numPosts: this.state.posts.length
    });
    this.props.fetchData(firebase);
    console.log(this.state.numPosts);
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
