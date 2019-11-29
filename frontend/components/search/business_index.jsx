import React from 'react';
import BusinessIndexItem from './business_index_item';

const BusinessIndex = ({ businesses }) => (
        <div>
            <h2>Top Spots in Town!</h2>      
            {businesses.map(business => (
                <BusinessIndexItem
                    business={business}
                    key={business.id}
                />
            ))}
        </div>
);

export default BusinessIndex;

