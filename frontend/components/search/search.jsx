import React from 'react';
import BusinessMap from '../business_map/business_map';
import BusinessIndex from './business_index';
import FilterForm from './filter_form';

const Search = ({ businesses, minPricepoint, maxPricepoint, updateFilter }) => (
    <div>
        <div className="search-map">
            <h3>Click Map to Add a New Business!</h3>
            <BusinessMap 
                businesses={businesses} 
                updateFilter={updateFilter}
                singleBusiness={false}
            />
        </div>
        <div>
            <h3>What are you Looking For?</h3>
                <FilterForm 
                    minPricepoint={minPricepoint}
                    maxPricepoint={maxPricepoint}
                    updateFilter={updateFilter}
                />
                <BusinessIndex businesses={businesses} />
        </div>
    </div>
);

export default Search;
