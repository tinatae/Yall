import React from 'react';
import BusinessIndexItem from './business_index_item';
// import {withRouter} from 'react-router-dom';

const BusinessIndex = ({ businesses, searchQuery, updateFilter, clearFilter }) => {

    function noBusinesses() {
        if (businesses.length === 0) {
            return <div id="no-biz-message">Sorry, we could not find any businesses that match your query</div>
        } else { return null}
    }

    return (
        <div>
            <h2>BEST IN TOWN</h2>   
        
            {noBusinesses()}
            
            {businesses.map(business => (
                <BusinessIndexItem
                    searchQuery={searchQuery}
                    updateFilter={updateFilter}
                    clearFilter={clearFilter}
                    business={business}
                    key={business.id}  
                />
            ))}
        </div>
    )
};

export default BusinessIndex;


// selectReviewsForBusiness

// export const selectReviewsForBusiness = ({ businesses, reviews }, business) => {
//     return business.reviewIds.map(reviewId => reviews[reviewId]);
// };


// let reviews = [];

// {businesses.map(business => (
//     reviews.push(selectReviewsForBusiness(businesses, business)))
// )};

