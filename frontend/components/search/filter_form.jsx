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
                <span> Rating </span>
                <button value="go" onClick={handleRatingChange('filterRating', updateFilter)}>Sort by Rating (h-l)</button>
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


// const openNow = (filter, value) => (dispatch, getState) => {
//     dispatch(updateFilter(filter, value)};
//     c
// const openNow() {
//     const dayOfWeek = { 0: "sun", 1: "mon", 2: "tues", 3: "wed", 4: "thurs", 5: "fri", 6: "sat" }
//     const weekdayNumber = new Date().getUTCDay();
//     const weekday = dayOfWeek[weekdayNumber];

//     const openhour = weekday.concat("open");
//     const openhourapx = weekday.concat("openend");
//     const closehour = weekday.concat("close");
//     const closehourapx = weekday.concat("close");

    // #     if self[openhourapx] == "AM" && self[closehourapx] == "AM"
    // #         return "Yes" if (self[openhour]..self[closehour]).include ? (Time.now.hour)
    // #     elsif self[openhourapx] == "PM" && self[closehourapx] == "PM"
    // #         self[openhour] += 12
    // #         self[closehour] += 12
    // #         return "Yes" if (self[openhour]..self[closehour]).include ? (Time.now.hour)
    // #     elsif self[openhourapx] == "AM" && self[closehourapx] == "PM"
    // #         self[closehour] += 12
    // #         return "Yes" if (self[openhour]..self[closehour]).include ? (Time.now.hour)
    // #     elsif self[openhourapx] == "PM" && self[closehourapx] == "AM"
    // #         if self[openhour] != 12
    // #             self[openhour] += 12
    // #         end

    // #         if Time.now.hour >= 12
    // #             return "Yes" if Time.now.hour > self[openhour]
    // #         elsif Time.now.hour < 12
    // #             return "Yes" if Time.now.hour < self[closehour]
    // #         end
    // #     end

    // #     "No"
    // # end
    // return fetchBusinesses(getState().ui.filters)(dispatch)
// }

// const handleRatingChange = (filter, updateFilter) => e => (
//     updateFilter(filter, e.currentTarget.value)
// );