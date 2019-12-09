import React from 'react';
import BusinessIndexItem from './business_index_item';
// import {withRouter} from 'react-router-dom';

const BusinessIndex = ({ businesses, searchQuery, updateFilter }) => (
        <div>
            <h2>BEST IN TOWN</h2>   
      
            {businesses.map(business => (
                <BusinessIndexItem
                    searchQuery={searchQuery}
                    updateFilter={updateFilter}
                    business={business}
                    key={business.id}   
                />
            ))}
        </div>
);

export default BusinessIndex;


// selectReviewsForBusiness

// export const selectReviewsForBusiness = ({ businesses, reviews }, business) => {
//     return business.reviewIds.map(reviewId => reviews[reviewId]);
// };


// let reviews = [];

// {businesses.map(business => (
//     reviews.push(selectReviewsForBusiness(businesses, business)))
// )};

