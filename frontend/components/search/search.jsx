import React from 'react';
import BusinessMap from '../business_map/business_map';
import BusinessIndex from './business_index';
import FilterForm from './filter_form';

const Search = ({ businesses, minPricepoint, maxPricepoint, updateFilter }) => (
    <div className="indexpage">
        <div className="indexpage-filters">
            <h3>What are you Looking For?</h3>
                <FilterForm 
                    minPricepoint={minPricepoint}
                    maxPricepoint={maxPricepoint}
                    updateFilter={updateFilter}
                />
        </div>
        <div className="indexpage-grid">
            <div className="indexpage-businesses">
                <BusinessIndex businesses={businesses} />
            </div>
            <div className="indexpage-map">
                <h3>Click Map to Add a New Business!</h3>
                <BusinessMap
                    businesses={businesses}
                    updateFilter={updateFilter}
                    singleBusiness={false}
                />
            </div>
        </div>   
    </div>
);

export default Search;
