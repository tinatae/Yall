import React from 'react';
import {Link} from 'react-router-dom'
import BusinessProfile from './business_profile';
import { render } from 'react-dom';

const BusinessShow = ({ business, businessId, fetchBusiness, reviews }) => {
    const businesses = {
        [businessId]: business
    };

    return(     
        <div className="all-business-show">
            <div id="button-link-to-index">
                <Link to="/businesses">
                    <button>
                        Back
                    </button>
                </Link>
            </div>  
            
            <div className="business-show-profile">
                <BusinessProfile 
                    business={business} 
                    reviews={reviews} 
                    businesses={businesses}
                    businessId={businessId}
                    singleBusiness={true}
                    fetchBusiness={fetchBusiness}
                />
            </div>
        </div>
    )
};

export default BusinessShow;