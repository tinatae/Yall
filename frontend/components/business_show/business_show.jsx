import React from 'react';
import {Link} from 'react-router-dom'

import BusinessProfile from './business_profile';
import BusinessMap from '../business_map/business_map';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';

const BusinessShow = ({ business, businessId, fetchBusiness, reviews }) => {
    const businesses = {
        [businessId]: business
    };

    return(
        <div>
            <div>
                <Link to="/">Back to Businesses Index</Link>
                <BusinessMap 
                    businesses={businesses} 
                    businessId={businessId} 
                    singleBusiness={true} 
                    fetchBusiness={fetchBusiness} 
                />
            </div>
            <div>
                <BusinessProfile 
                    business={business} 
                    reviews={reviews} 
                />
                <ReviewLink component={ ReviewFormContainer } 
                    to={`/businesses/${businessId}/review`} 
                    label="Leave a Review!" 
                />
                <ProtectedRoute 
                    path='/businesses/:businessId/review' 
                    component={ReviewFormContainer} 
                />
            </div>     
        </div>
    )
};

export default BusinessShow;