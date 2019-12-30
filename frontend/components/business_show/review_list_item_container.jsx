import React from 'react';
import {connect} from 'react-redux';

const Review = ({ review, author }) => {
    const { starmaker, body } = review;
    return (
        <div className="reviews-section">
            <div id="userprofile">
                <img id="userbutton" src="/user-circle-solid.svg" />
                <div id="username">{author.username}</div>
            </div>
            <div className="reviews">
                <div id="stars">{starmaker}</div>
                <div id="comment">{body}</div>
            </div>
        </div>
    )
};

const mSTP = ({entities: { users }}, { review }) => {
    return { 
        author: users[review.author_id]
    };
};

export default connect(mSTP)(Review);