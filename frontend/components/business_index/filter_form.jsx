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

const showLabel = (searchQuery, searchCity, filterCategory, filterOpenNow, filterDelivery, filterTakeout) => {
  return (searchQuery || searchCity || filterCategory !== "All" || filterOpenNow !== "Always" || filterDelivery !== "All" || filterTakeout !== "All") ? (<div id="showing-filters">Showing Filters:</div>) : (null)
}

const selectQuery = (searchQuery) => {
  return searchQuery ? (<div id="query-italic">"{searchQuery}"</div>) : (null)
};

const selectCity = (searchCity) => {
  return searchCity ? (<div id="query-italic">"{searchCity}"</div>) : (null)
};

const selectCategory = (filterCategory) => {
  return (filterCategory !== "All") ? (<div>{filterCategory}</div>) : (null)
};

const selectOpen = (filterOpenNow) => {
  return (filterOpenNow !== "Always") ? (<div>Open Now</div>) : (null)
};

const selectDelivery = (filterDelivery) => {
  return (filterDelivery !== "All")  ? (<div>Delivery</div>) : (null)
};

const selectTakeout = (filterTakeout) => {
  return (filterTakeout !== "All") ? (<div>Takeout</div>) : (null)
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