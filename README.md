# README

### yallr is a Yelp Clone

#### Running:
* Ruby on Rails (5.2.3)
* React-Redux 
* Webpack
* Postgresql (11.6)
* Google Maps API
* AWS

#### Functionalities: 
* Typed-input searchbar which queries database by business name, category, city
* Dropdown/Button Filters that cross-query by pricepoint, delivery, takeout, 'open now'
* Google Map API with location markers & geocoding to verify 'New Business' address
* Slideshow homepage for featured businesses

* 'Add Your Business' sign-up form
* Business review form
* Login, Signup, Signout Functionality

#### Sample Code:
  ##### 'Add Business' Page
  ##### Functionality: Ok this is fun: for the 'Add Business' page, we wanted phone number input in the 10-character format '5101234567'--not '15101234567' or for even the politest users who add their own parentheses & dashes: '(510)123-4567' (13 characters!). So the below code snippet renders the user's input in tandem with the user typing, and formats as it goes to guide the user to the desired phone format. A green check mark appears when the number is inputted correctly.

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
  ##### Functionality: The code below complements the filter functionality and return visual tags for filters that are in-place. This is meant to be a visual aid specifically for when the user queries a combination of features/names that might not have matching results. So while an entered searchword might be "Bars" (which would show-up as a tag), a following filter tag would say "Coffee & Tea" indicating that this second filter is (accidentally?) cross-querying the results.

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
* Edit reviews (though from a business ethics perspective, I'm split on this. If not edit, definitely delete)
* Business photo carousel
