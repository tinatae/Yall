import React from 'react';
import ReviewListItemContainer from './review_list_item_container';
import BusinessMap from '../business_map/business_map';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';


const reviewList = (reviews) => (
    reviews.map(review => (
        <ReviewListItemContainer
            review={review}
            key={review.id} 
        />
    ))
);


const BusinessProfile = ({ business, reviews, businesses, businessId, fetchBusiness }) => {

    let photos = business.photoUrls.map((photoUrl, idx) => {
        return <img className="profile-pic" key={idx} src={photoUrl} />                               // DO I NEED TO ADD KEY? I DID BUT WAS REPEAT
    });

    const timeConversion = {
        0:"12AM", 1:"1AM", 2:"2AM", 3:"3AM", 4: "4AM", 5:"5AM", 6:"6AM", 7:"7AM", 8:"8AM", 9:"9AM", 10:"10AM", 11:"11AM", 12:"12PM", 
        13:"1PM", 14:"2PM", 15: "3PM", 16:"4PM", 17:"5PM", 18:"6PM", 19:"7PM", 20:"8PM", 21:"9PM", 22:"10PM", 23:"11PM"
    };

    return (
        <div className="profile">

            <div id="profile-pics-holder">
                <div id="profile-pics">
                    {photos}
                </div>
            </div>
            <div className="profile-minus-pics">
                <div className="profile-name-section">
                    <div id="bizname">{business.name}</div>
                    <div id="bizrating-section">
                        <span id="bizrating">{business.average_rating || 'No reviews yet. Be the first to write one!'}</span>
                        <span id="bizreviewcount">{business.reviewcount}</span>
                    </div>
                
                    <span id="bizpricepoint">{business.dollarmaker}</span>
                    <span id="bullet">•</span>
                    <span id="bizcategory">{business.category}</span>
                
                    <div className="business-review-link">
                        <button>
                            <ReviewLink
                                style={{ textDecoration: 'none' }}
                                component={ReviewFormContainer}
                                to={`/businesses/${businessId}/review`}
                                label="★ Write a Review" />
                            <ProtectedRoute
                                path='/businesses/:businessId/review'
                                component={ReviewFormContainer}
                            />
                        </button>
                    </div>  
                </div>
                <div className="profile-attributes">
                    <div>
                        <img id="paperplane" src="/paper-plane-regular.svg" />        
                        Delivery&nbsp;:&nbsp;{business.delivery}
                    </div>
                    <div>
                        <img id="shoeprints" src="/shoe-prints-solid.svg" />
                        Takeout&nbsp;:&nbsp;{business.takeout}
                    </div>
                </div>
            
                <div className="profile-map-and-info">

                    <div className="profile-map">
                        <BusinessMap
                            businesses={businesses}
                            businessId={businessId}
                            singleBusiness={true}
                            fetchBusiness={fetchBusiness}
                        />
                    </div>

                    <div className="profile-hours">
                        <span>Monday: {timeConversion[business.monopen]} - {timeConversion[business.monclose]}</span>
                        <span>Tuesday: {timeConversion[business.tuesopen]} - {timeConversion[business.tuesclose]}</span>
                        <span>Wednesday: {timeConversion[business.wedopen]} - {timeConversion[business.wedclose]}</span>
                        <span>Thursday: {timeConversion[business.thursopen]} - {timeConversion[business.thursclose]}</span>
                        <span>Friday: {timeConversion[business.friopen]} - {timeConversion[business.friclose]}</span>
                        <span>Saturday: {timeConversion[business.satopen]} - {timeConversion[business.satclose]}</span>
                        <span>Sunday: {timeConversion[business.sunopen]} - {timeConversion[business.sunclose]}</span>
                    </div>

                    <div className="profile-info">
                        <span id="bizwebsite">{business.website}</span>
                        <span id="bizphonenumber">{business.phonenumber}</span>            
                        <span id="bizaddress1">{business.address1}</span>
                        <span id="bizaddress2">{business.address2}</span>
                    </div>

                </div>
                <div>
                    <h3>Reviews</h3>
                    {reviewList(reviews)}
                </div>
            </div>

        </div>
    );
};

export default BusinessProfile;

{/* <li>Latitude: {business.lat}</li>
<li>Longitude: {business.lng}</li> */}
// <img src={business.photoUrls[1]} /> 