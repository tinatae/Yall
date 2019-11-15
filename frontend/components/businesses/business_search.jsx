import React from 'react';
import BusinessMap from './business_map';
import BusinessIndex from './business_index';
// import FilterForm from '/filter_form';

const Search = ({ businesses, fetchBusinesses }) => (
// const Search = ({ businesses, updateFilter }) => (
    <div>
        <div>
            <h3>Map of Places to Check-Out!</h3>
            <BusinessMap 
                businesses={businesses} 
                fetchBusinesses={ fetchBusinesses }
                // updateFilter={updateFilter}
            />
        </div>
        <br></br>
        <div>
       
            <h3>Here they are by name!</h3>
            <BusinessIndex businesses={businesses} fetchBusinesses={fetchBusinesses} />
        </div>
    </div>
);

export default Search;
