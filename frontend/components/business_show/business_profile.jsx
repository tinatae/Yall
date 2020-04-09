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
        return (<img className="profile-pic" key={idx} src={photoUrl} />)                               // DO I NEED TO ADD KEY? I DID BUT WAS REPEAT
    });

    const timeConversion = {
        0:"12AM", 1:"1AM", 2:"2AM", 3:"3AM", 4: "4AM", 5:"5AM", 6:"6AM", 7:"7AM", 8:"8AM", 9:"9AM", 10:"10AM", 11:"11AM", 12:"12PM", 
        13:"1PM", 14:"2PM", 15: "3PM", 16:"4PM", 17:"5PM", 18:"6PM", 19:"7PM", 20:"8PM", 21:"9PM", 22:"10PM", 23:"11PM"
    };

    return (
      <div className="profile">
        <div id="profile-pics-holder">
          <div id="profile-pics">{photos}</div>
        </div>
        <div className="profile-minus-pics">
          <div className="profile-name-section">
            <div id="bizname">{business.name}</div>
            <div id="bizrating-section">
              <span id="bizrating">
                {business.average_rating ||
                  "No reviews yet. Be the first to write one!"}
              </span>
              <span id="bizreviewcount">{business.reviewcount}</span>
            </div>

            <span id="bizpricepoint">{business.dollarmaker}</span>
            <span id="bullet">•</span>
            <span id="bizcategory">{business.category}</span>

            <div className="business-review-link">
              <button>
                <ReviewLink
                  style={{ textDecoration: "none" }}
                  component={ReviewFormContainer}
                  to={`/businesses/${businessId}/review`}
                  label="★ Write a Review"
                />
                <ProtectedRoute
                  path="/businesses/:businessId/review"
                  component={ReviewFormContainer}
                />
              </button>
            </div>
          </div>

          <div className="profile-attributes">
         
            <div id="row">
                <div>
                  <i className="far fa-paper-plane"></i>
                  Delivery&nbsp;:&nbsp;{business.delivery}
                </div>
                <div>
                  <i className="fas fa-shoe-prints"></i>
                  Takeout&nbsp;:&nbsp;{business.takeout}
                </div>
                <div>
                <i className="far fa-calendar-check"></i>
                  Takes&nbsp;Reservations&nbsp;:&nbsp;{business.takesreservation}
                </div>
                <div>
                  <i className="far fa-credit-card"></i>
                  Accepts&nbsp;Credit&nbsp;Card&nbsp;:&nbsp;{business.creditcard}
                </div>
            </div>

            <div id="row">
              <div>
                <i className="fab fa-google"></i>
                Accepts&nbsp;Googlepay&nbsp;:&nbsp;{business.googlepay}
              </div>
              <div>
                <i className="fab fa-cc-apple-pay"></i>
                Accepts&nbsp;Applepay&nbsp;:&nbsp;{business.applepay}
              </div>
              <div>
                <i className="fas fa-leaf"></i>
                Vegetarian&nbsp;:&nbsp;{business.vegetarian}
              </div>
              <div>
                <i className="fas fa-seedling"></i>
                Vegan&nbsp;:&nbsp;{business.vegan}
              </div>
            </div>
            
            <div id="row">
              <div>
                <i className="fas fa-wifi"></i>
                Wi-Fi&nbsp;:&nbsp;{business.wifi}
              </div>
              <div>
                <i className="fas fa-parking"></i>
                Parking&nbsp;:&nbsp;{business.parking}
              </div> 
              <div>
                <i className="fas fa-wheelchair"></i>
                Wheelchair&nbsp;Accessible:&nbsp;{business.wheelchair}
              </div>
            </div>

            <div id="row">
              <div>
                <i className="fas fa-transgender"></i>
                Gender&nbsp;Neutral&nbsp;Restrooms&nbsp;:&nbsp;{business.genderneutralrestroom}
              </div>
              <div>
                <i className="fas fa-baby-carriage"></i>
                Good&nbsp;for&nbsp;Kids&nbsp;:&nbsp;{business.goodforkids}
              </div> 
              <div>
                <i className="fas fa-check"></i>
                Family&nbsp;Owned&nbsp;:&nbsp;{business.familyown}
              </div>
              <div>
                <i className="fas fa-check"></i>
                Women&nbsp;Owned&nbsp;:&nbsp;{business.womenown}
              </div>
            </div>
        
            <div id="row">
              <div>
                <i className="fas fa-cloud-sun"></i>
                Outdoor&nbsp;Seating&nbsp;:&nbsp;{business.outdoor}
              </div>
              <div>
                <i className="fas fa-users"></i>
                Good&nbsp;for&nbsp;Groups&nbsp;:&nbsp;{business.goodforgroups}
              </div>
              <div>
                <i className="fas fa-dog"></i>
                Dogs&nbsp;Allowed&nbsp;:&nbsp;{business.dogsallowed}
              </div>   
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
              <span>
                Monday: {timeConversion[business.monopen]} -{" "}
                {timeConversion[business.monclose]}
              </span>
              <span>
                Tuesday: {timeConversion[business.tuesopen]} -{" "}
                {timeConversion[business.tuesclose]}
              </span>
              <span>
                Wednesday: {timeConversion[business.wedopen]} -{" "}
                {timeConversion[business.wedclose]}
              </span>
              <span>
                Thursday: {timeConversion[business.thursopen]} -{" "}
                {timeConversion[business.thursclose]}
              </span>
              <span>
                Friday: {timeConversion[business.friopen]} -{" "}
                {timeConversion[business.friclose]}
              </span>
              <span>
                Saturday: {timeConversion[business.satopen]} -{" "}
                {timeConversion[business.satclose]}
              </span>
              <span>
                Sunday: {timeConversion[business.sunopen]} -{" "}
                {timeConversion[business.sunclose]}
              </span>
            </div>

            <div className="profile-info">
              <span id="bizwebsite">{business.website}</span>
              <span id="bizphonenumber">{business.phonenumber}</span>
              <span id="bizaddress1">{business.address1}</span>
              <span id="bizaddress2">{business.city}, {business.state} {business.zipcode}</span>
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