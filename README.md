# README

### yallr is a Yelp Clone

#### Running:
* Ruby on Rails (5.2.3)
* React-Redux 
* PostgreSql (11.6)
* Google Maps API
* AWS

#### Functionalities: 
* Typed-input searchbar that queries database by business name, category, city
* Dropdown/Button Filters that cross-query by pricepoint, delivery, takeout, 'open now'
* Google Map API with location markers & geocoding to verify 'New Business' address
* Slideshow homepage for featured businesses

* 'Add Your Business' sign-up form
* Business review form
* Login, Signup, Signout Functionality

#### Sample Code:
  ##### 'Add Business' Page
  ##### For adding new businesses, the form asks for a phone number input in the 10-digit format: 5101234567. While the input placeholder models this desired format, it seemed inevitable that numbers would get entered with or without area codes, country codes, parentheses, dashes, etc.--ultimately breaking the formatting logic built for a ten-digit-only input later down the road. In terms of user experience, we didn't want to call an error when the user was done typing the full number--making them re-type their information twice--and we didn't want to call an error when they were done filling-out the entire form either. So our solution was the code below which renders the user's input in tandem as they type, adding formatting as it goes to guide the user to the desired input. A green check mark appears when the number is entered correctly.

    handleNumber() {
        if (this.state.phonenumber.length === 0) {
            return null
        } else if (this.state.phonenumber.length === 10) {
            return (<div id="checked-info"><i className="far fa-check-circle"></i>({this.state.phonenumber.slice(0, 3)}){this.state.phonenumber.slice(3, 6)}-{this.state.phonenumber.slice(6)}</div>)
        } else if (this.state.phonenumber.length > 6) { 
            return (<div id="phone-check">({this.state.phonenumber.slice(0, 3)}){this.state.phonenumber.slice(3, 6)}-{this.state.phonenumber.slice(6)}</div>)
        } else if (this.state.phonenumber.length > 3 && this.state.phonenumber.length <= 6) {
            return (<div id="phone-check">({this.state.phonenumber.slice(0,3)}){this.state.phonenumber.slice(3)}</div>)
        } else if (this.state.phonenumber.length > 0 && this.state.phonenumber.length <= 3) {
            return <div id="phone-check">({this.state.phonenumber})</div>
        }
    }

  ##### Filter Form
  ##### This is meant to be a visual aid specifically for when the user selects a combination of filters and maybe forgets which filters are in place. Prior to building this feature, we made the mistake ourselves of typing "Bars" into the searchbar with the 'Category' filter button set to "Coffee & Tea" from a prior test--it was 8PM on a weekday and there were no bars open.. so we thought it was weird but figured it was just the searchbar acting up! The filter tags are there to show all the filters impacting the results.

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

        ##### ...
        ##### return ...

        <div className="filter-tags">
            {showLabel(searchQuery, searchCity, filterCategory, filterOpenNow, filterDelivery, filterTakeout)}
            {selectQuery(searchQuery)}
            {selectCity(searchCity)}
            {selectCategory(filterCategory)}
            {selectOpen(filterOpenNow)}
            {selectDelivery(filterDelivery)}
            {selectTakeout(filterTakeout)}
        </div>


#### Future add-ons:
* User Profiles
* Edit reviews (though from a business ethics perspective, we're split on this. If not edit, definitely delete)
* Business photo carousel
* More robust search
