import React from 'react';

const handlePricepointChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const handleCategoryChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

const handleRatingChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
)

const FilterForm =({ searchQuery, minPricepoint, maxPricepoint, filterCategory, filterRating, updateFilter }) => (
    <div>
        <span>Let's sort this shall we. Filter Results:</span> 
        <br/>
        <label>
            <span>Min Pricepoint </span>
            <select name="Min Pricepoint" value={minPricepoint} onChange={handlePricepointChange('minPricepoint', updateFilter)}>
                <option selected disabled value="">- Min Pricepoint -</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
        </label>
        <label>
            <span> Max Pricepoint </span>
            <select name="Max Pricepoint" value={maxPricepoint} onChange={handlePricepointChange('maxPricepoint', updateFilter)}>
                <option selected disabled value="">- Max Pricepoint -</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
        </label>
        <label>
            <span> Category </span>
            <select name="Category" value={filterCategory} onChange={handleCategoryChange('filterCategory', updateFilter)}>
                {/* <option selected disabled value="">- Category -</option> */}
                <option value="All">Showing All</option>
                <option value="Restaurants">Restaurants</option>
                <option value="Coffee & Tea">Coffee & Tea</option>
                <option value="Bars">Bars</option>
            </select>
        </label>
        <label>
            <span> Rating </span>
            <button value={filterRating} onClick={handleRatingChange('filterRating', updateFilter)}>Sort by Rating (h-l)</button>
        </label>
    </div>

);

export default FilterForm;


{/* <label id="createbizpricepoint">
    <span>Pricepoint</span>
    <br />
    <select name="Pricepoint" value={pricepoint} onChange={this.update('pricepoint')}>
        <option selected disabled value="">- Pricepoint ($) -</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
    </select>
</label> */}
