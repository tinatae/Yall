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

const handleDeliveryChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

const handleTakeoutChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

function showLabel(searchQuery, searchCity, filterCategory, filterOpenNow, filterDelivery, filterTakeout) {
  if (searchQuery || searchCity || filterCategory !== "All" || filterOpenNow !== "Always" || filterDelivery !== "All" || filterTakeout !== "All") {
    return <div id="showing-filters">Showing Filters:</div>
  } else {return null}
}

function selectQuery(searchQuery) {
  if (searchQuery) {
    return <div id="query-italic">"{searchQuery}"</div>
  } else { return null }
};

function selectCity(searchCity) {
  if (searchCity) {
    return <div id="query-italic">"{searchCity}"</div>
  } else { return null }
};

function selectCategory(filterCategory) {
  if (filterCategory !== "All") {
    return <div>{filterCategory}</div>
  } else { return null }
};

function selectOpen(filterOpenNow) {
  if (filterOpenNow !== "Always") {
    return <div>Open Now</div>
  } else { return null }
};

function selectDelivery(filterDelivery) {
  if (filterDelivery !== "All") {
    return <div>Delivery</div>
  } else { return null }
};

function selectTakeout(filterTakeout) {
  if (filterTakeout !== "All") {
    return <div>Takeout</div>
  } else { return null }
};

const FilterForm = ({
  minPricepoint,
  maxPricepoint,
  filterCategory,
  filterOpenNow,
  filterRating,
  filterDelivery,
  filterTakeout,
  updateFilter,
  searchQuery,
  searchCity,
  refreshFilter
}) => (
  <div>
    <div className="filtered-firstline">Filter Results By:</div>

    <div className="filters">
      <div id="minmax-pair">
        <span>Min&nbsp;Pricepoint&nbsp;</span>
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

        <span id="maxpricepoint"> Max&nbsp;Pricepoint&nbsp;</span>
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

      <label id="category-filter">
        <span>Category&nbsp;</span>
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
            
     
        <div id="clear-filters">
            <button onClick={refreshFilter}>
                <span id="filter-writing">Clear Filters</span>
            </button>
        </div>        
    </div>
    <div className="filter-tags">
      {showLabel(searchQuery, searchCity, filterCategory, filterOpenNow, filterDelivery, filterTakeout)}
      {selectQuery(searchQuery)}
      {selectCity(searchCity)}
      {selectCategory(filterCategory)}
      {selectOpen(filterOpenNow)}
      {selectDelivery(filterDelivery)}
      {selectTakeout(filterTakeout)}
    </div>
  </div>
);

export default FilterForm;


// const handleRatingChange = (filter, updateFilter) => e => (
//     updateFilter(filter, e.currentTarget.value)
// );