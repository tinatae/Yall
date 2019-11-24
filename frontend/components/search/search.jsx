import React from 'react';
import BusinessMap from '../business_map/business_map';
import BusinessIndex from './business_index';
import FilterForm from './filter_form';

const Search = ({ businesses, searchCategory, updateFilter }) => (
    <div>
        <div>
            <h3>Help Us Grow Our Map of Cool Places to Check-Out! Click Map to Add a New Business!</h3>
            <BusinessMap 
                businesses={businesses} 
                updateFilter={updateFilter}
                singleBusiness={false}
            />
        </div>
        <div>
            <h3>What are you Looking For?</h3>
                <FilterForm 
                    searchCategory={searchCategory}
                    updateFilter={updateFilter}
                />
                <BusinessIndex businesses={businesses} />
        </div>
    </div>
);

export default Search;
