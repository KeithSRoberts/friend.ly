import React, { Component }  from "react";
import { Button } from 'reactstrap';

// This class component renders a single post in the Discussion component of the viewGroup feature. 
// It renders the post's author, title, description, and author description
class Post extends Component {


  render() {
    return (
      <div className="post-container">
          <div className="post-buttons">
            <Button className="button-upvote"
              />
            <h3>{this.props.post.upvotes}</h3>
            <Button className="button-downvote"/>
          </div>
          <div className="post-content">
            <div className="post-author-info">
              <div className="post-image">
                <img src={this.props.post.image} alt={this.props.post.author}/>
              </div>
              <div className="post-author">
                <h5>{this.props.post.title}</h5>
              </div>
            </div>
            <div className="post-text">
              <p>{this.props.post.text}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Post;
