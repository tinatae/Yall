import React from 'react';
import ReviewListItemContainer from './review_list_item_container';

const reviewList = (reviews) => (
    reviews.map(review => (
        <ReviewListItemContainer
            review={review}
            key={review.id} 
        />
    ))
);

const BusinessProfile = ({ business, reviews }) => {
    return (
        <div>
            <ul>    
                <li>{business.name}</li>
                <li>{business.rating || 'No reviews yet. Be the first to write one!'}</li>
                <li>{business.category}</li>
                <li>{business.website}</li>
                <li>{business.phonenumber}</li>
                <li>{business.address1}</li>
                <li>{business.address2}</li>
            </ul>
            <div>
                <h3>REVIEWS</h3>
                {reviewList(reviews)}
            </div>

        </div>
    );
};

export default BusinessProfile;

