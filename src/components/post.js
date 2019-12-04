import React, { Component }  from "react";
import { Button } from 'reactstrap';

// This class component renders a single post in the Discussion component of the viewGroup feature. 
// It renders the post's author, title, description, and author description
class Post extends Component {

  constructor(props) {
    super();
    this.state = {
      data: props.post,
      name: props.name,
      upvotes: props.post.upvotes,
      author: props.post.author,
      image: "https://ra.ac.ae/wp-content/uploads/2017/02/user-icon-placeholder.png"
    }
  }

  incrementScore(event) {
    this.setState({
      upvotes: this.state.upvotes + 1
    },
    function() {this.props.updateScore(this.state)});
    console.log(this.state.image);
  }

  decrementScore(event) {
    this.setState({
      upvotes: this.state.upvotes - 1
    }, 
    function() {this.props.updateScore(this.state)});
    console.log(this.state.author);
  }


  render() {
    return (
      <div className="post-container">
          <div className="post-buttons">
            <Button className="button-upvote"
                    name={this.state.name}
                    onClick={(e) => this.incrementScore(e)}/>
            <h3>{this.state.upvotes}</h3>
            <Button className="button-downvote"
                    name={this.state.name}
                    onClick={(e) => this.decrementScore(e)}/>
          </div>
          <div className="post-content">
            <div className="post-author-info">
              <div className="post-image">
                <img src={this.state.image} alt={this.state.author}/>
              </div>
              <div className="post-author">
                <h5>{this.state.data.title}</h5>
              </div>
            </div>
            <div className="post-text">
              <p>{this.state.data.text}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Post;
