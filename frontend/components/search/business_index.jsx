import React from 'react';
import BusinessIndexItem from './business_index_item';

const BusinessIndex = ({ businesses }) => (
        <div>
            <h2>BEST IN TOWN</h2>   
      
            {businesses.map(business => (
                <BusinessIndexItem
                    business={business}
                    key={business.id}
                    // selectReviewsForBusiness={selectReviewsForBusiness}
                    // businesses={businesses}
               
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

