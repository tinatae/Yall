import React from 'react';
import {connect} from 'react-redux';

const Review = ({ review, author }) => {
    const { starmaker, body, created_at } = review;
    const reviewDate = new Date(created_at).toLocaleDateString("en-US", {year: "2-digit", month: "2-digit", day: "2-digit"});
    // const reviewTime = new Date(created_at).toLocaleTimeString();

    return (
      <div className="reviews-section">
        <div id="userprofile">
          <i className="fas fa-user-circle"></i>
          <div id="username">{author.username}</div>
        </div>
        <div className="reviews">
          <div id="stars-and-date">
            <div id="stars">{starmaker}</div>
            <div id="created_at">{reviewDate}</div>
          </div>

          <div id="comment">{body}</div>
        </div>
      </div>
    );
};

const mSTP = ({entities: { users }}, { review }) => {
    return { 
        author: users[review.author_id]
    };
};

export default connect(mSTP)(Review);