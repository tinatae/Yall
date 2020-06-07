# README

### yallr is a Yelp Clone

#### Running:
* Ruby on Rails (5.2.3)
* React-Redux 
* Webpack
* Postgresql (11.6)
* Google Maps API
* AWS

#### Functionalities: 
* Typed-input searchbar which queries database by business name, category, city
* Filters that cross-query by pricepoint, delivery, takeout, 'open now'
* Google Map API with location markers & geocoding to verify 'New Business' Address
* Slideshow Homepage for featured businesses

* 'Add Your Business' sign-up form
* Business review form
* Login, Signup, Signout Functionality

<div style="width:260px;max-width:100%;"><div style="height:0;padding-bottom:46.54%;position:relative;"><iframe width="260" height="121" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/449z1i"></iframe></div></div>

#### Sample Code:
  ##### Business Model
  
        def average_rating
            avgrev = reviews.average(:rating)
            
            if avgrev == 0 || avgrev.nil?
                avgrev = 0
            else
                avgrev 
            end
        end

        def dollarmaker
            "$"*self.pricepoint
        end

        def reviewcount
            return 'No Reviews' if self.reviews.nil?
            if self.reviews.length == 1
                return "1 review"
            else
                self.reviews.length.to_s + " reviews"
            end
        end

        def self.in_bounds(bounds)
            self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
        end

        def self.open           
            if Time.now.wday == 0
                self.sunhours
            elsif Time.now.wday == 1
                self.monhours
            elsif Time.now.wday == 2
                self.tueshours
            elsif Time.now.wday == 3
                self.wedhours
            elsif Time.now.wday == 4
                self.thurshours
            elsif Time.now.wday == 5
                self.frihours
            else
                self.sathours
            end
        end
        
  ##### Business Reducer

      import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS, RECEIVE_REVIEW } from '../actions/business_actions';

      const businessesReducer = (state = {}, action) => {
          Object.freeze(state)

          switch(action.type) {
              case RECEIVE_BUSINESSES:
                  return action.businesses;
              case RECEIVE_BUSINESS:
                  const newBusiness = { [action.business.id]: action.business };
                  return Object.assign({}, state, newBusiness);
              case RECEIVE_REVIEW:
                  const {review, average_rating} = action;
                  const newState = Object.assign({}, state);
                  newState[review.business_id].reviewIds.push(review.id);
                  newState[review.business_id].average_rating = average_rating;
                  return newState;
              default:
                  return state;
          }
      };

      export default businessesReducer;

#### Future add-ons:
* User Profiles
* Edit reviews (though from a business ethics perspective, I'm split on this. If not Edit, definitely a Delete option)
* Photo carousel
