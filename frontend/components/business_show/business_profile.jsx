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
        0:"12:00AM", 1:"1:00AM", 2:"2:00AM", 3:"3:00AM", 4: "4:00AM", 5:"5:00AM", 6:"6:00AM", 7:"7:00AM", 8:"8:00AM", 9:"9:00AM", 10:"10:00AM", 11:"11:00AM", 12:"12:00PM", 
        13:"1:00PM", 14:"2:00PM", 15: "3:00PM", 16:"4:00PM", 17:"5:00PM", 18:"6:00PM", 19:"7:00PM", 20:"8:00PM", 21:"9:00PM", 22:"10:00PM", 23:"11:00PM"
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
            <div id="fakeh4">Amenities</div>
         
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
                <div>
                  <i className="fas fa-wifi"></i>
                  Wi-Fi&nbsp;:&nbsp;{business.wifi}
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
                <i className="fas fa-parking"></i>
                Parking&nbsp;:&nbsp;{business.parking}
              </div> 
              <div>
                <i className="fas fa-wheelchair"></i>
                Wheelchair&nbsp;Accessible:&nbsp;{business.wheelchair}
              </div>
              <div>
                <i className="fas fa-transgender"></i>
                Gender&nbsp;Neutral&nbsp;Restrooms&nbsp;:&nbsp;{business.genderneutralrestroom}
              </div>
            </div>
        
            <div id="row">
              <div>
                <i className="fas fa-cloud-sun"></i>
                Outdoor&nbsp;Seating&nbsp;:&nbsp;{business.outdoor}
              </div>
              <div>
                <i className="fas fa-baby-carriage"></i>
                Good&nbsp;for&nbsp;Kids&nbsp;:&nbsp;{business.goodforkids}
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
              <div id="fakeh4">Hours of Operation</div>
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
              <div id="fakeh4">Location & Contact</div>
              <span id="bizwebsite">{business.website}</span>
              <span id="bizphonenumber">({business.phonenumber.slice(0, 3)}){business.phonenumber.slice(3, 6)}-{business.phonenumber.slice(6, 10)}</span>
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