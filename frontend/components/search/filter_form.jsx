import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm =({ minPricepoint, maxPricepoint, updateFilter }) => (
    <div>
        <span>Let's sort this shall we. Filter Results:</span> 
        <br/>
        <label>
            <span>Min Pricepoint</span>
            <select name="Min Pricepoint" value={minPricepoint} onChange={handleChange('minPricepoint', updateFilter)}>
                <option selected disabled value="">- Min Pricepoint -</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
        </label>
        <label>
            <span>Max Pricepoint</span>
            <select name="Max Pricepoint" value={maxPricepoint} onChange={handleChange('maxPricepoint', updateFilter)}>
                <option selected disabled value="">- Max Pricepoint -</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
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
