import React from 'react';
import {connect} from 'react-redux';

const Review = ({ review, author }) => {
    const { body, rating, created_at } = review;
    const reviewDate = new Date(created_at).toLocaleDateString("en-US", {year: "2-digit", month: "2-digit", day: "2-digit"});
    // const reviewTime = new Date(created_at).toLocaleTimeString();
   
  const starTable = {
    5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
    4.5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
    4: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
    3.5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
    3: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
    2.5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
    2: <span><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
    1.5: <span><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
    1: <span><i className="fas fa-star"></i></span>,
    0.5: <span><i className="fas fa-star-half"></i></span>,
  }

  function bizStars(avg) {
    if (avg === 5) {
      return starTable[5]
    } else if (avg >= 4.5) {
      return starTable[4.5]
    } else if (avg >= 4) {
      return starTable[4]
    } else if (avg >= 3.5) {
      return starTable[3.5]
    } else if (avg >= 3) {
      return starTable[3]
    } else if (avg >= 2.5) {
      return starTable[2.5]
    } else if (avg >= 2) {
      return starTable[2]
    } else if (avg >= 1.5) {
      return starTable[1.5]
    } else if (avg >= 1) {
      return starTable[1]
    } else if (avg >= 0.5) {
      return starTable[0.5]
    }
  }

    return (
      <div className="reviews-section">

        <div id="userprofile">
          <div><i className="fas fa-user-circle"></i></div>
          <div id="username">{author.username}</div>
        </div>

        <div className="reviews">
          <div id="stars-and-date">
            <div id="stars">{bizStars(rating)}</div>
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