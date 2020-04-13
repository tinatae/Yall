import React from 'react';

const handlePricepointChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const handleCategoryChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

const handleOpenNow = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

// const handleRatingChange= (filter, updateFilter) => e => (
//     updateFilter(filter, e.currentTarget.value)
// );

const handleDeliveryChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

const handleTakeoutChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);


const FilterForm = ({
  minPricepoint,
  maxPricepoint,
  filterCategory,
  filterOpenNow,
  filterRating,
  filterDelivery,
  filterTakeout,
  updateFilter,
  refreshFilter
}) => (
  <div>
    <div className="filtered-firstline">Filter Results By:</div>

    <div className="filters">
      <div id="minmax-pair">
        <span>Min Pricepoint </span>
        <select
          name="Min Pricepoint"
          value={minPricepoint}
          onChange={handlePricepointChange("minPricepoint", updateFilter)}
        >
          <option disabled value="">
            - $ -
          </option>
          <option value="1"> $</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>

        <span id="maxpricepoint"> Max Pricepoint </span>
        <select
          name="Max Pricepoint"
          value={maxPricepoint}
          onChange={handlePricepointChange("maxPricepoint", updateFilter)}
        >
          <option disabled value="">
            - $$$$ -
          </option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>

      <label>
        <span> Category </span>
        <select
          name="Category"
          value={filterCategory}
          onChange={handleCategoryChange("filterCategory", updateFilter)}
        >
          <option value="All">Showing All</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Coffee & Tea">Coffee & Tea</option>
          <option value="Bars">Bars</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <label>
        <button
          value="Yes"
          onClick={handleOpenNow("filterOpenNow", updateFilter)}
        >
            <i className="far fa-clock"></i>
            <span id="filter-writing">Open Now</span>
        </button>
      </label>

      <label id="delivery-button">
        <button
          value="Yes"
          onClick={handleDeliveryChange("filterDelivery", updateFilter)}
        >
            <i className="far fa-paper-plane"></i>
            <span id="filter-writing">Delivery</span>
        </button>
      </label>

      <label>
        <button
          value="Yes"
          onClick={handleTakeoutChange("filterTakeout", updateFilter)}
        >
            <i className="fas fa-shoe-prints"></i>
            <span id="filter-writing">Takeout</span>
        </button>
      </label>

      {/* <label>
        <button value="go" onClick={handleRatingChange('filterRating', updateFilter)}>
          Sort by Rating (h-l)
        </button>
      </label> */}
            
     
        <div id="clear-filters">
            <button onClick={refreshFilter}>
                <span id="filter-writing">Clear All Filters</span>
            </button>
        </div>
        
    </div>
  </div>
);

export default FilterForm;


// const handleRatingChange = (filter, updateFilter) => e => (
//     updateFilter(filter, e.currentTarget.value)
// );