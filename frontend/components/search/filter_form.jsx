import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm =({ searchCategory, updateFilter }) => (
    <div>
        <span>Let's sort this shall we. Filter Results:</span> 
        <label>Category
            <input type="text" value={searchCategory} onChange={handleChange('searchCategory', updateFilter)} />
        </label>
    </div>

);

export default FilterForm;
