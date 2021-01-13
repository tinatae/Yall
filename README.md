# README

### yallr is a Yelp Clone

#### Running:
* Ruby on Rails (5.2.3)
* React
* Redux 
* PostgreSQL (11.6)
* Google Maps API
* AWS S3

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
  ##### For adding new businesses, the form asks for a phone number input in the 10-digit format: 5101234567. While the placeholder models the desired format, the code below renders input in tandem with user entry --serving as a visual guide. This prevents numbers from getting entered with/without area codes, country codes, parentheses, dashes, etc. without throwing errors at form submission time. A green check mark appears when the number is entered correctly.

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

##### An additional check is placed on new business address inputs. Google Map geocoder translates the address inputs into latitude & longitude coordinates which are then set to state. Once state updates, the complete address is spelled-out on two lines and the coordinate set is rendered on a Google Map with a map marker to verify location. This check occurs at time of entry.

    <label id="createbizaddress">
        <div>Business Address</div>
            <input id="address" size="60" type="text" placeholder="123 Sesame Street" value={address1} onChange={this.update('address1')} />
        <div id="address2">
            <input size="30" type="text" placeholder="San Francisco" value={city} onChange={this.update('city')} />
            <input size="10" type="text" placeholder="CA" value={state} onChange={this.update('state')} />
            <input size="20" type="text" placeholder="12345" value={zipcode} onChange={this.update('zipcode')} />
        </div>
    </label>

    {this.updateLatLng()} 

    {this.state.lat && this.state.lng && (
        <div id="checked-info">
            <div><i className="far fa-check-circle"></i>{this.state.address1}</div>
            <div>{this.state.city}, {this.state.state} {this.state.zipcode}</div>
        </div>
    )}

    {this.state.lat && this.state.lng && (
        <BusinessMap 
            addBusiness={true}
            lat = {this.state.lat}
            lng = {this.state.lng}
        />
    )}

  ##### Filter Form
  ##### An additional UI feature to show which search filters are in place. Tags are rendered for Search Word, Search City, Search Category, Businesses Open Now, Delivery Available, & Takeout Available.

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
* Business photo carousel
* More robust search
