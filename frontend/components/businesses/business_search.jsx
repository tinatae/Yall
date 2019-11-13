import React from 'react';
import BusinessMap from './business_map'
import BusinessIndex from './business_index'

const Search = ({ businesses, fetchBusinesses }) => (
    <div>
        <h3>Map of Places to Check-Out!</h3>
        <BusinessMap businesses={businesses} />
        <h3>Here they are by name!</h3>
        <BusinessIndex businesses={businesses} fetchBusinesses={fetchBusinesses} />
    </div>
);

export default Search;
