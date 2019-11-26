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
                <img src={business.photoUrls[1]} /> 
                <li>Name: {business.name}</li>
                <li>Rating: {business.average_rating || 'No reviews yet. Be the first to write one!'}</li> 
                <li>Category: {business.category}</li>
                <li>Website: {business.website}</li>
                <li>Phone Number: {business.phonenumber}</li>
                <li>Address1: {business.address1}</li>
                <li>Address2: {business.address2}</li>
                <li>Pricepoint: {business.pricepoint}</li>
            </ul>
            <br/>
            <div>
                <h3>Reviews</h3>
                {reviewList(reviews)}
            </div>

        </div>
    );
};

export default BusinessProfile;

{/* <li>Latitude: {business.lat}</li>
<li>Longitude: {business.lng}</li> */}