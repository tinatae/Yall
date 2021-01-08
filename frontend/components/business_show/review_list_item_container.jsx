import React from 'react';
import {connect} from 'react-redux';
import {deleteReview} from '../../actions/business_actions';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: this.props.review,
    }

    this.canDelete = this.canDelete.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  canDelete(authorId, currentUserId, reviewId) {
    if (authorId === currentUserId && reviewId) {
      return <div id="delete-review-option" onClick={(e)=> this.handleDelete(e, reviewId)} >
                <i className="far fa-times-circle"></i>
            </div>
    } else {
      return null
    }
  }

  handleDelete(e, reviewId) {
    e.preventDefault();
    this.props.deleteReview(reviewId)
  }

  render() {
      const reviewDate = new Date(this.props.review.created_at).toLocaleDateString("en-US", {year: "2-digit", month: "2-digit", day: "2-digit"});
    
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

      function bizStars(rating) {
        if (rating === 5) {
          return starTable[5]
        } else if (rating >= 4.5) {
          return starTable[4.5]
        } else if (rating >= 4) {
          return starTable[4]
        } else if (rating >= 3.5) {
          return starTable[3.5]
        } else if (rating >= 3) {
          return starTable[3]
        } else if (rating >= 2.5) {
          return starTable[2.5]
        } else if (rating >= 2) {
          return starTable[2]
        } else if (rating >= 1.5) {
          return starTable[1.5]
        } else if (rating >= 1) {
          return starTable[1]
        } else if (rating >= 0.5) {
          return starTable[0.5]
        }
      }

      return (
        <div className="reviews-section">

            <div id="userprofile">
              <div><i className="fas fa-user-circle"></i></div>
              <div id="username">{this.props.author.username}</div>
            </div>

            <div className="reviews">
              <div id="stars-and-date">
                <div>
                  <div id="stars">{bizStars(this.props.review.rating)}</div>
                  <div id="created_at">{reviewDate}</div>
                </div>
                
                <div>{this.canDelete(this.props.author.id, this.props.currentUserId, this.props.review.id)}</div>
                
              </div>

              <div id="comment">{this.props.review.body}</div>
            </div>

        </div>
    );
  }
}

const mSTP = (state, {review}) => {
    return { 
        author: state.entities.users[review.author_id],
        currentUserId: state.session.id
    };
};

const mDTP = dispatch => ({
    deleteReview: id => dispatch(deleteReview(id))
});

export default connect(mSTP, mDTP)(Review);
