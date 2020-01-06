import React from 'react';
import {withRouter} from 'react-router';

class BusinessForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = {lat: props.lat, lng: props.lng};
        this.state = {
            name: '',
            category: '',
            website: 'www.business.com',
            phonenumber: '(123)456-7890',
            address1: '123 Sesame Street',
            address2: 'San Francisco, CA 12345',
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
            photoFiles: null,
            photoUrls: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    navigateToSearch() {
        this.props.history.push('/businesses');
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
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
    }

    handleSubmit(e) {
        e.preventDefault();
      
        const formData = new FormData();

        formData.append('business[name]', this.state.name);
        formData.append('business[category]', this.state.category);
        formData.append('business[lat]', this.coords['lat']);
        formData.append('business[lng]', this.coords['lng']);
        formData.append('business[website]', this.state.website);
        formData.append('business[phonenumber]', this.state.phonenumber);
        formData.append('business[address1]', this.state.address1);
        formData.append('business[address2]', this.state.address2);
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

        if (this.state.photoFiles) {
            formData.append('business[photos][]', this.state.photoFiles);
        };
    
        this.props.createBusiness(formData);
        this.navigateToSearch();
    };

    render() {
        const { name, category, website, phonenumber, address1, address2, pricepoint } = this.state;
        const { monopen, monclose, tuesopen, tuesclose, wedopen, wedclose, thursopen, thursclose, friopen, friclose, satopen, satclose, sunopen, sunclose } = this.state;
        const { delivery, takeout } = this.state;
        const { lat, lng } = this.coords;
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
                            <br/>
                            <input size="60" type="text" value={name} onChange={this.update('name')} />
                        </label>
                        <br/>
                        <label id="createbizcategory">
                            <div>Category</div>
                            <br/>
                            <select name="Please select a Business Category" value={category} onChange={this.update('category')}>
                                <option selected disabled value="">- Please select a category -</option>
                                <option value="Restaurants">Restaurants</option>
                                <option value="Coffee & Tea">Coffee & Tea</option>
                                <option value="Bars">Bars</option>
                            </select>
                        </label>
                        <br/>

                        <label id="createbizdelivery">
                            <div>Do you offer Delivery Service?</div>
                            <br/>
                            <select name="Delivery" value={delivery} onChange={this.update('delivery')}>
                                <option selected disabled value="">- Please select one -</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                        <br/>
                        <label id="createbiztakeout">
                            <div>Do you offer Takeout Service?</div>
                            <br/>
                            <select name="Takeout" value={takeout} onChange={this.update('takeout')}>
                                <option selected disabled value="">- Please select one -</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                        <br/>
                    
    
                        <label id="createbizpricepoint">
                            <div>Pricepoint</div>
                            <br/>
                            <select name="Pricepoint" value={pricepoint} onChange={this.update('pricepoint')}>
                                <option selected disabled value="">- Pricepoint ($) -</option>
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                            </select>
                        </label>
                        <br/>
                        {/* <label>Latitude
                            <br/>
                            <input size="100" type="text" disabled value={lat} />
                        </label>
                        <label>Longitude
                            <br/>
                            <input size="100" type="text" disabled value={lng} />
                        </label>
                        <br/> */}
                        <label id="createbizwebsite">
                            <div>Website</div>
                            <br/>
                            <input size="75" type="text" value={website} onChange={this.update('website')} />
                        </label>
                        <br/>
                        <label id="createbizphonenumber">
                            <div>Phone Number</div>
                            <br/>
                            <input size="75" type="text" value={phonenumber} onChange={this.update('phonenumber')} />
                        </label>
                        <br/>
                        <label id="createbizaddress">
                            <div>Business Address</div>
                            <br/>
                            <input size="75" type="text" value={address1} onChange={this.update('address1')} />
                            <br/>
                            <input size="75" type="text" value={address2} onChange={this.update('address2')} />
                        </label>
                        <br/>
                  
                    </div>

                    <div className="business-create-bizhours">
                        <h3>Business Hours</h3>
                        <div className="bizhours-grid1">
                            <label>
                                <div>Monday Open:</div>
                                <select name="Monday Open" value={monopen} onChange={this.update('monopen')}>
                                    <option selected disabled value="">- Open -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Tuesday Open:</div>
                                <select name="Tuesday Open" value={tuesopen} onChange={this.update('tuesopen')}>
                                    <option selected disabled value="">- Open -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Wednesday Open:</div>
                                <select name="Wednesday Open" value={wedopen} onChange={this.update('wedopen')}>
                                    <option selected disabled value="">- Open -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Thursday Open:</div>
                                <select name="Thursday Open" value={thursopen} onChange={this.update('thursopen')}>
                                    <option selected disabled value="">- Open -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Friday Open:</div>
                                <select name="Friday Open" value={friopen} onChange={this.update('friopen')}>
                                    <option selected disabled value="">- Open -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Saturday Open:</div>
                                <select name="Saturday Open" value={satopen} onChange={this.update('satopen')}>
                                    <option selected disabled value="">- Open -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>
                            <label>
                                <div>Sunday Open:</div>
                                <select name="Sunday Open" value={sunopen} onChange={this.update('sunopen')}>
                                    <option selected disabled value="">- Open -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>
                        </div>
                        <div className="bizhours-grid2">
                            <label>
                                <div>Monday Close:</div>
                                <select name="Monday Close" value={monclose} onChange={this.update('monclose')}>
                                    <option selected disabled value="">- Close -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>                 
                            <label>
                                <div>Tuesday Close:</div>
                                <select name="tuesday Close" value={tuesclose} onChange={this.update('tuesclose')}>
                                    <option selected disabled value="">- Close -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>  
                            <label>
                                <div>Wednesday Close:</div>
                                <select name="Wednesday Close" value={wedclose} onChange={this.update('wedclose')}>
                                    <option selected disabled value="">- Close -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>   
                            <label>
                                <div>Thursday Close:</div>
                                <select name="Thursday Close" value={thursclose} onChange={this.update('thursclose')}>
                                    <option selected disabled value="">- Close -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>       
                            <label>
                                <div>Friday Close:</div>
                                <select name="Friday Close" value={friclose} onChange={this.update('friclose')}>
                                    <option selected disabled value="">- Close -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>   
                            <label>
                                <div>Saturday Close:</div>
                                <select name="Saturday Close" value={satclose} onChange={this.update('satclose')}>
                                    <option selected disabled value="">- Close -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>   
                            <label>
                                <div>Sunday Close:</div>
                                <select name="Sunday Close" value={sunclose} onChange={this.update('sunclose')}>
                                    <option selected disabled value="">- Close -</option>
                                    <option value="0">12AM</option>
                                    <option value="1">1AM</option>
                                    <option value="2">2AM</option>
                                    <option value="3">3AM</option>
                                    <option value="4">4AM</option>
                                    <option value="5">5AM</option>
                                    <option value="6">6AM</option>
                                    <option value="7">7AM</option>
                                    <option value="8">8AM</option>
                                    <option value="9">9AM</option>
                                    <option value="10">10AM</option>
                                    <option value="11">11AM</option>
                                    <option value="12">12PM</option>
                                    <option value="13">1PM</option>
                                    <option value="14">2PM</option>
                                    <option value="15">3PM</option>
                                    <option value="16">4PM</option>
                                    <option value="17">5PM</option>
                                    <option value="18">6PM</option>
                                    <option value="19">7PM</option>
                                    <option value="20">8PM</option>
                                    <option value="21">9PM</option>
                                    <option value="22">10PM</option>
                                    <option value="23">11PM</option>
                                </select>
                            </label>   
                        </div>
                    </div>      

                    <div className="business-create-bizphoto">
                        <h3>Image Preview</h3>
                            {preview}
                        <h3>Add a Picture</h3>
                            <input type="file" onChange={this.handleFile.bind(this)} /> 
                    </div>

                        <hr/>
                    <div id="business-create-button">
                        <input type="submit" value="Create Newest Spot In Town!"/>
                    </div>
                </form>
                    <div id="coffeecups">
                        <img src={window.newbiz2URL} />
                    </div>
                    
            </div>
                    <div id="nevermind-button">
                        <button onClick={this.navigateToSearch}>Back</button>
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

    // Add Business Red Button White Script