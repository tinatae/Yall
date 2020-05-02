import React from 'react';
import {withRouter} from 'react-router';
import BusinessMap from '../business_map/business_map';

class BusinessForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            category: '',
            lat: '',
            lng: '',
            website: '',
            phonenumber: '',
            address1: '',
            city: '',
            state: '',
            zipcode: '',
            pricepoint: '',
            monopen: '',
            monclose: '',
            tuesopen: '',
            tuesclose: '',
            wedopen: '',
            wedclose: '',
            thursopen: '',
            thursclose: '',
            friopen: '',
            friclose: '',
            satopen: '',
            satclose: '',
            sunopen: '',
            sunclose: '',
            delivery: '',
            takeout: '',

            vegetarian: "No",
            vegan: "No",
            takesreservation: "No",
            creditcard: "No",
            googlepay: "No",
            applepay: "No",
            parking: "No",
            wheelchair: "No",
            goodforkids: "No",
            goodforgroups: "No",
            outdoor: "No",
            wifi: "No",
            dogsallowed: "No",
            genderneutralrestroom: "No",

            photoFiles: null,
            photoUrls: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.updateCheckBox = this.updateCheckBox.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.updateLatLng = this.updateLatLng.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState) {  // DON'T DO THIS. FREEZES INPUTS AFTER MAP RENDER
    //     if (this.state.lat !== "" && this.state.lat === nextState.lat && this.state.lng === nextState.lng) {
    //         return false
    //     } else {return true}
    // }  

    navigateToSearch() {
        this.props.history.push('/businesses');
    };

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    updateCheckBox(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({photoFiles: file, photoUrls: [fileReader.result]})
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    };

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

    updateLatLng() {
        if (this.state.address1 && this.state.city && this.state.state && this.state.zipcode) {

            const geocoder = new google.maps.Geocoder();
            const lookup = `${this.state.address1}, ${this.state.city}, ${this.state.state}`;
    
            geocoder.geocode({'address': lookup}, (results, status) => {
                if (status == 'OK') {
                    this.setState({lat: results[0].geometry.location.lat()});
                    this.setState({lng: results[0].geometry.location.lng()});         
                } else { 
                    console.log(status)
                };
            })      
        } else {return null}
    };

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append('business[name]', this.state.name);
        formData.append('business[category]', this.state.category);
        formData.append('business[lat]', this.state.lat);
        formData.append('business[lng]', this.state.lng);
        formData.append('business[website]', this.state.website);
        formData.append('business[phonenumber]', this.state.phonenumber);
        formData.append('business[address1]', this.state.address1);
        formData.append('business[city]', this.state.city);
        formData.append('business[state]', this.state.state);
        formData.append('business[zipcode]', this.state.zipcode); 
        formData.append('business[pricepoint]', this.state.pricepoint);
        formData.append('business[monopen]', this.state.monopen);
        formData.append('business[monclose]', this.state.monclose);
        formData.append('business[tuesopen]', this.state.tuesopen);
        formData.append('business[tuesclose]', this.state.tuesclose);
        formData.append('business[wedopen]', this.state.wedopen);
        formData.append('business[wedclose]', this.state.wedclose);
        formData.append('business[thursopen]', this.state.thursopen);
        formData.append('business[thursclose]', this.state.thursclose);
        formData.append('business[friopen]', this.state.friopen);
        formData.append('business[friclose]', this.state.friclose);
        formData.append('business[satopen]', this.state.satopen);
        formData.append('business[satclose]', this.state.satclose);
        formData.append('business[sunopen]', this.state.sunopen);
        formData.append('business[sunclose]', this.state.sunclose);
        formData.append('business[delivery]', this.state.delivery);
        formData.append('business[takeout]', this.state.takeout);

        formData.append('business[vegetarian]', this.state.vegetarian);
        formData.append('business[vegan]', this.state.vegan);
        formData.append('business[takesreservation]', this.state.takesreservation);
        formData.append('business[creditcard]', this.state.creditcard);
        formData.append('business[googlepay]', this.state.googlepay);
        formData.append('business[applepay]', this.state.applepay);
        formData.append('business[parking]', this.state.parking);
        formData.append('business[wheelchair]', this.state.wheelchair);
        formData.append('business[goodforkids]', this.state.goodforkids);
        formData.append('business[goodforgroups]', this.state.goodforgroups);
        formData.append('business[outdoor]', this.state.outdoor);
        formData.append('business[wifi]', this.state.wifi);
        formData.append('business[dogsallowed]', this.state.dogsallowed);
        formData.append('business[genderneutralrestroom]', this.state.genderneutralrestroom);

        // if (this.state.photoFiles) {
        //     for (let i = 0; i < this.state.photoFiles.length; i++) {
        //         formData.append('business[photos][]', this.state.photoFiles[i]);
        //     }
        // };

        // ORIGINAL
        if (this.state.photoFiles) {
            formData.append('business[photos][]', this.state.photoFiles);
        };
    
        this.props.createBusiness(formData);
        console.log(this.state)
        this.navigateToSearch();
     
    };

    render() {
        const { name, category, lat, lng, website, phonenumber, address1, city, state, zipcode, pricepoint } = this.state;
        const { monopen, monclose, tuesopen, tuesclose, wedopen, wedclose, thursopen, thursclose, friopen, friclose, satopen, satclose, sunopen, sunclose } = this.state;
        const { delivery, takeout, vegetarian, vegan, takesreservation, creditcard, googlepay, applepay, parking, wheelchair, goodforkids, goodforgroups, outdoor, wifi, dogsallowed, genderneutralrestroom} = this.state;
        // const preview = this.state.photoUrls ? this.state.photoUrls.map(image => <img height="100px" width="100px" src={image[0]} />) : null;
    //    ORIGINAL 
       const preview = this.state.photoUrls ? <img height="100px" width="100px" src={this.state.photoUrls[0]} /> : null;
       
        return (
            <div className="business-create-form">
                <div className="business-create-header">
                    <h2>New in Town?</h2>
                    <h3>Add Your Business to Our Site!</h3>
                    <h3>Please Fill-out Details Below</h3>
                </div>

            <div className="business-create-body">
                <div id="yellowchair">
                    <img src={window.newbiz1URL}/>
                </div>
               
                <form onSubmit={this.handleSubmit}>

                    <div className="business-create-bizinfo">

                        <label id="createbizname">
                            <div>Name</div>
                            <input size="60" type="text" value={name} onChange={this.update('name')} />
                        </label>

                        <label id="createbizcategory">
                            <div>Category</div>
                            <select name="Please select a Business Category" value={category} onChange={this.update('category')}>
                                <option value="" disabled>- Please select a category -</option>
                                <option value="Restaurants">Restaurants</option>
                                <option value="Coffee & Tea">Coffee & Tea</option>
                                <option value="Bars">Bars</option>
                                <option value="Dessert">Dessert</option>
                            </select>
                        </label>
        
                        <label id="createbizpricepoint">
                            <div>Pricepoint</div>
                            <select name="Pricepoint" value={pricepoint} onChange={this.update('pricepoint')}>
                                <option value="" disabled>- Pricepoint ($) -</option>
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                            </select>
                        </label>

                        <label id="createbizwebsite">
                            <div>Website</div>
                            <span>http: //</span><input size="60" type="text" placeholder="tastytreat.com" value={website} onChange={this.update('website')} />
                        </label>

                        <label id="createbizphonenumber">
                            <div>Phone Number</div>
                            <div id="content">
                                <input size="60" type="text" maxLength={10} placeholder="510 123 4567" value={phonenumber} onChange={this.update('phonenumber')} />
                            </div>
                        </label>

                        {this.handleNumber()}

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
                    </div>

                    <h3>Business Hours</h3>
                    <div className="business-create-bizhours">                   
                        <div className="bizhours-grid1">
                            <label>
                                <div>Monday Open:</div>
                                <select name="Monday Open" value={monopen} onChange={this.update('monopen')}>
                                    <option value="" disabled>- Open -</option>
                                    <option value="-100">Closed</option>
                                    <option value="0">12 AM</option>
                                    <option value="1">1 AM</option>
                                    <option value="2">2 AM</option>
                                    <option value="3">3 AM</option>
                                    <option value="4">4 AM</option>
                                    <option value="5">5 AM</option>
                                    <option value="6">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Tuesday Open:</div>
                                <select name="Tuesday Open" value={tuesopen} onChange={this.update('tuesopen')}>
                                    <option value="" disabled>- Open -</option>
                                    <option value="-100">Closed</option>
                                    <option value="0">12 AM</option>
                                    <option value="1">1 AM</option>
                                    <option value="2">2 AM</option>
                                    <option value="3">3 AM</option>
                                    <option value="4">4 AM</option>
                                    <option value="5">5 AM</option>
                                    <option value="6">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Wednesday Open:</div>
                                <select name="Wednesday Open" value={wedopen} onChange={this.update('wedopen')}>
                                    <option value="" disabled>- Open -</option>
                                    <option value="-100">Closed</option>
                                    <option value="0">12 AM</option>
                                    <option value="1">1 AM</option>
                                    <option value="2">2 AM</option>
                                    <option value="3">3 AM</option>
                                    <option value="4">4 AM</option>
                                    <option value="5">5 AM</option>
                                    <option value="6">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Thursday Open:</div>
                                <select name="Thursday Open" value={thursopen} onChange={this.update('thursopen')}>
                                    <option value="" disabled>- Open -</option>
                                    <option value="-100">Closed</option>
                                    <option value="0">12 AM</option>
                                    <option value="1">1 AM</option>
                                    <option value="2">2 AM</option>
                                    <option value="3">3 AM</option>
                                    <option value="4">4 AM</option>
                                    <option value="5">5 AM</option>
                                    <option value="6">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Friday Open:</div>
                                <select name="Friday Open" value={friopen} onChange={this.update('friopen')}>
                                    <option value="" disabled>- Open -</option>
                                    <option value="-100">Closed</option>
                                    <option value="0">12 AM</option>
                                    <option value="1">1 AM</option>
                                    <option value="2">2 AM</option>
                                    <option value="3">3 AM</option>
                                    <option value="4">4 AM</option>
                                    <option value="5">5 AM</option>
                                    <option value="6">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Saturday Open:</div>
                                <select name="Saturday Open" value={satopen} onChange={this.update('satopen')}>
                                    <option value="" disabled>- Open -</option>
                                    <option value="-100">Closed</option>
                                    <option value="0">12 AM</option>
                                    <option value="1">1 AM</option>
                                    <option value="2">2 AM</option>
                                    <option value="3">3 AM</option>
                                    <option value="4">4 AM</option>
                                    <option value="5">5 AM</option>
                                    <option value="6">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Sunday Open:</div>
                                <select name="Sunday Open" value={sunopen} onChange={this.update('sunopen')}>
                                    <option value="" disabled>- Open -</option>
                                    <option value="-100">Closed</option>
                                    <option value="0">12 AM</option>
                                    <option value="1">1 AM</option>
                                    <option value="2">2 AM</option>
                                    <option value="3">3 AM</option>
                                    <option value="4">4 AM</option>
                                    <option value="5">5 AM</option>
                                    <option value="6">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>
                        </div>


                        <div className="bizhours-grid2">
                            <label>
                                <div>Monday Close:</div>
                                <select name="Monday Close" value={monclose} onChange={this.update('monclose')}>
                                    <option value="" disabled>- Close -</option>
                                    <option value="-100">Closed</option>
                                    <option value="24">12 AM</option>
                                    <option value="25">1 AM</option>
                                    <option value="26">2 AM</option>
                                    <option value="27">3 AM</option>
                                    <option value="28">4 AM</option>
                                    <option value="29">5 AM</option>
                                    <option value="30">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>                 
                            <label>
                                <div>Tuesday Close:</div>
                                <select name="tuesday Close" value={tuesclose} onChange={this.update('tuesclose')}>
                                    <option value="" disabled>- Close -</option>
                                    <option value="-100">Closed</option>
                                    <option value="24">12 AM</option>
                                    <option value="25">1 AM</option>
                                    <option value="26">2 AM</option>
                                    <option value="27">3 AM</option>
                                    <option value="28">4 AM</option>
                                    <option value="29">5 AM</option>
                                    <option value="30">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>  
                            <label>
                                <div>Wednesday Close:</div>
                                <select name="Wednesday Close" value={wedclose} onChange={this.update('wedclose')}>
                                    <option value="" disabled>- Close -</option>
                                    <option value="-100">Closed</option>
                                    <option value="24">12 AM</option>
                                    <option value="25">1 AM</option>
                                    <option value="26">2 AM</option>
                                    <option value="27">3 AM</option>
                                    <option value="28">4 AM</option>
                                    <option value="29">5 AM</option>
                                    <option value="30">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>   
                            <label>
                                <div>Thursday Close:</div>
                                <select name="Thursday Close" value={thursclose} onChange={this.update('thursclose')}>
                                    <option value="" disabled>- Close -</option>
                                    <option value="-100">Closed</option>
                                    <option value="24">12 AM</option>
                                    <option value="25">1 AM</option>
                                    <option value="26">2 AM</option>
                                    <option value="27">3 AM</option>
                                    <option value="28">4 AM</option>
                                    <option value="29">5 AM</option>
                                    <option value="30">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>       
                            <label>
                                <div>Friday Close:</div>
                                <select name="Friday Close" value={friclose} onChange={this.update('friclose')}>
                                    <option value="" disabled>- Close -</option>
                                    <option value="-100">Closed</option>
                                    <option value="24">12 AM</option>
                                    <option value="25">1 AM</option>
                                    <option value="26">2 AM</option>
                                    <option value="27">3 AM</option>
                                    <option value="28">4 AM</option>
                                    <option value="29">5 AM</option>
                                    <option value="30">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>   
                            <label>
                                <div>Saturday Close:</div>
                                <select name="Saturday Close" value={satclose} onChange={this.update('satclose')}>
                                    <option value="" disabled>- Close -</option>
                                    <option value="-100">Closed</option>
                                    <option value="24">12 AM</option>
                                    <option value="25">1 AM</option>
                                    <option value="26">2 AM</option>
                                    <option value="27">3 AM</option>
                                    <option value="28">4 AM</option>
                                    <option value="29">5 AM</option>
                                    <option value="30">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>   
                            <label>
                                <div>Sunday Close:</div>
                                <select name="Sunday Close" value={sunclose} onChange={this.update('sunclose')}>
                                    <option value="" disabled>- Close -</option>
                                    <option value="-100">Closed</option>
                                    <option value="24">12 AM</option>
                                    <option value="25">1 AM</option>
                                    <option value="26">2 AM</option>
                                    <option value="27">3 AM</option>
                                    <option value="28">4 AM</option>
                                    <option value="29">5 AM</option>
                                    <option value="30">6 AM</option>
                                    <option value="7">7 AM</option>
                                    <option value="8">8 AM</option>
                                    <option value="9">9 AM</option>
                                    <option value="10">10 AM</option>
                                    <option value="11">11 AM</option>
                                    <option value="12">12 PM</option>
                                    <option value="13">1 PM</option>
                                    <option value="14">2 PM</option>
                                    <option value="15">3 PM</option>
                                    <option value="16">4 PM</option>
                                    <option value="17">5 PM</option>
                                    <option value="18">6 PM</option>
                                    <option value="19">7 PM</option>
                                    <option value="20">8 PM</option>
                                    <option value="21">9 PM</option>
                                    <option value="22">10 PM</option>
                                    <option value="23">11 PM</option>
                                </select>
                            </label>   
                        </div>
                    </div>      

                    <h3>Services & Amenities</h3>
                    <div className="amenities">                  
                        <div className="checkboxes">                         
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="delivery"
                                    value="Yes"
                                    onClick={this.updateCheckBox("delivery")}
                                />
                                <span>Delivery</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="takeout"
                                    value="Yes"
                                    onClick={this.updateCheckBox("takeout")}
                                />
                                <span>Take-Out</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="reservations"
                                    value="Yes"
                                    onClick={this.updateCheckBox("takesreservation")}
                                />
                                <span>Takes&nbsp;Reservations</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="vegetarian"
                                    value="Yes"
                                    onClick={this.updateCheckBox("vegetarian")}
                                />
                                <span>Vegetarian</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="vegan"
                                    value="Yes"
                                    onClick={this.updateCheckBox("vegan")}
                                />
                                <span>Vegan</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="creditcard"
                                    value="Yes"
                                    onClick={this.updateCheckBox("creditcard")}
                                />
                                <span>Accepts&nbsp;Credit&nbsp;Card</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="googlepay"
                                    value="Yes"
                                    onClick={this.updateCheckBox("googlepay")}
                                />
                                <span>Accepts&nbsp;Google&nbsp;Pay</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="applepay"
                                    value="Yes"
                                    onClick={this.updateCheckBox("applepay")}
                                />
                                <span>Accepts&nbsp;Apple&nbsp;Pay</span>
                            </label>
                        </div>
                        <div className="checkboxes">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="parking"
                                    value="Yes"
                                    onClick={this.updateCheckBox("parking")}
                                />
                                <span>Parking</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="wheelchair"
                                    value="Yes"
                                    onClick={this.updateCheckBox("wheelchair")}
                                />
                                <span>Wheelchair&nbsp;Accessible</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="goodforkids"
                                    value="Yes"
                                    onClick={this.updateCheckBox("goodforkids")}
                                />
                                <span>Good&nbsp;For&nbsp;Kids</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="goodforgroups"
                                    value="Yes"
                                    onClick={this.updateCheckBox("goodforgroups")}
                                />
                                <span>Good&nbsp;For&nbsp;Groups</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="outdoor"
                                    value="Yes"
                                    onClick={this.updateCheckBox("outdoor")}
                                />
                                <span>Outdoor&nbsp;Seating</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="wifi"
                                    value="Yes"
                                    onClick={this.updateCheckBox("wifi")}
                                />
                                <span>Wi-Fi</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="dogsallowed"
                                    value="Yes"
                                    onClick={this.updateCheckBox("dogsallowed")}
                                />
                                <span>Dogs&nbsp;Allowed</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="genderneutralrestroom"
                                    value="Yes"
                                    onClick={this.updateCheckBox("genderneutralrestroom")}
                                />
                                <span>Gender&nbsp;Neutral&nbsp;Restrooms</span>
                            </label>
                        </div>
                    </div>

                    <div className="business-create-bizphoto">
                        <h3>Image Preview</h3>
                            {preview}
                        <h3>Add a Picture</h3>
                            {/* <input type="file" onChange={e => this.setState({ photos: e.target.files})} multiple/>  */}
                            <input type="file" onChange={this.handleFile.bind(this)} /> 
                    </div>

                    <div id="business-create-button">
                        <input type="submit" value="Create Newest Spot In Town!"/>
                    </div>
                </form>
                    <div id="coffeecups">
                        <img src={window.newbiz2URL} />
                    </div>         
                </div>
            </div>
        )
    }
}

export default withRouter(BusinessForm);

    // ADD MULTI PHOTO SOMEDAY

    //  for (let i = 0; i < this.files.length; i++) {
    //             this.photoUrls.push(URL.createObjectURL(this.files[i]))
    //         }
    //         this.setState({ photoFiles: this.files[i], photoUrls: fileReader.result })

    // {(this.photoUrls || []).map(url => (
    //         <img height="200px" width="200px" src={url} />
    //     ))}

    //     <input type="file" onChange={this.handleMultipleFiles} multiple />
    //     <button type="button" onClick={this.handleFiles}>Upload</button>



//     if (this.state.photoFiles) {
//         formData.append('business[photos][]', this.state.photoFiles);
//     };
