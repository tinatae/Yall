import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm =({ searchCategory, updateFilter }) => (
    <div>
        <h4>Filter Results:</h4>
        <br></br>
        <label>Category
            <input type="text" value={searchCategory} onChange={handleChange('searchCategory', updateFilter)} />
        </label>  
    </div>

);

export default FilterForm;
