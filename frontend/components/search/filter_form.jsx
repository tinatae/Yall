import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm =({ minPricepoint, maxPricepoint, updateFilter }) => (
    <div>
        <span>Let's sort this shall we. Filter Results:</span> 
        <br/>
        <label>Min Pricepoint
            <input type="number" value={minPricepoint} onChange={handleChange('minPricepoint', updateFilter)} />
        </label>
        <br/>
        <label>Max Pricepoint
            <input type="number" value={maxPricepoint} onChange={handleChange('maxPricepoint', updateFilter)} />
        </label>
    </div>

);

export default FilterForm;
