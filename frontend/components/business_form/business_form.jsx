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
            monopenend: '',
            moncloseend: '',
            tuesopen: '',
            tuesclose: '',
            tuesopenend: '',
            tuescloseend: '',
            wedopen: '',
            wedclose: '',
            wedopenend: '',
            wedcloseend: '',
            thursopen: '',
            thursclose: '',
            thursopenend: '',
            thurscloseend: '',
            friopen: '',
            friclose: '',
            friopenend: '',
            fricloseend: '',
            satopen: '',
            satclose: '',
            satopenend: '',
            satcloseend: '',
            sunopen: '',
            sunclose: '',
            sunopenend: '',
            suncloseend: '',
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
        formData.append('business[monopenend]', this.state.monopenend);
        formData.append('business[moncloseend]', this.state.moncloseend);
        formData.append('business[tuesopen]', this.state.tuesopen);
        formData.append('business[tuesclose]', this.state.tuesclose);
        formData.append('business[tuesopenend]', this.state.tuesopenend);
        formData.append('business[tuescloseend]', this.state.tuescloseend);
        formData.append('business[wedopen]', this.state.wedopen);
        formData.append('business[wedclose]', this.state.wedclose);
        formData.append('business[wedopenend]', this.state.wedopenend);
        formData.append('business[wedcloseend]', this.state.wedcloseend);
        formData.append('business[thursopen]', this.state.thursopen);
        formData.append('business[thursclose]', this.state.thursclose);
        formData.append('business[thursopenend]', this.state.thursopenend);
        formData.append('business[thurscloseend]', this.state.thurscloseend);
        formData.append('business[friopen]', this.state.friopen);
        formData.append('business[friclose]', this.state.friclose);
        formData.append('business[friopenend]', this.state.friopenend);
        formData.append('business[fricloseend]', this.state.fricloseend);
        formData.append('business[satopen]', this.state.satopen);
        formData.append('business[satclose]', this.state.satclose);
        formData.append('business[satopenend]', this.state.satopenend);
        formData.append('business[satcloseend]', this.state.satcloseend);
        formData.append('business[sunopen]', this.state.sunopen);
        formData.append('business[sunclose]', this.state.sunclose);
        formData.append('business[sunopenend]', this.state.sunopenend);
        formData.append('business[suncloseend]', this.state.suncloseend);

        if (this.state.photoFiles) {
            formData.append('business[photos][]', this.state.photoFiles);
        };
    
        this.props.createBusiness(formData);
        this.navigateToSearch();
    };

    render() {
        const { name, category, website, phonenumber, address1, address2, pricepoint } = this.state;
        const { monopen, monclose, monopenend, moncloseend, tuesopen, tuesclose, tuesopenend, tuescloseend, wedopen, wedclose, wedopenend, wedcloseend, thursopen, thursclose, thursopenend, thurscloseend, friopen, friclose, friopenend, fricloseend, satopen, satclose, satopenend, satcloseend, sunopen, sunclose, sunopenend, suncloseend } = this.state;
        const { lat, lng } = this.coords;
        const preview = this.state.photoUrls ? <img height="100px" width="100px" src={this.state.photoUrls[0]} /> : null;
       
        return (
            <div className="business-create-form">
                <div className="business-create-header">
                    <h2>New in Town?</h2>
                    <h3>Add Your Business to Our Site!</h3>
                    <h3>Please Fill-out Details Below</h3>
                </div>
               
                <form onSubmit={this.handleSubmit}>

                    <div className="business-create-bizinfo">
                        <label id="createbizname">
                            <span>Name</span>
                            <br/>
                            <input size="75" type="text" value={name} onChange={this.update('name')} />
                        </label>
                        <br/>
                        <label id="createbizcategory">
                            <span>Category</span>
                            <br/>
                            <select name="Please select a Business Category" value={category} onChange={this.update('category')}>
                                <option selected disabled value="">- Please select a category -</option>
                                <option value="Restaurants">Restaurants</option>
                                <option value="Coffee & Tea">Coffee & Tea</option>
                                <option value="Bars">Bars</option>
                            </select>
                        </label>
                        <br />
    
                        <label id="createbizpricepoint">
                            <span>Pricepoint</span>
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
                            <span>Website</span>
                            <br/>
                            <input size="75" type="text" value={website} onChange={this.update('website')} />
                        </label>
                        <br/>
                        <label id="createbizphonenumber">
                            <span>Phone Number</span>
                            <br/>
                            <input size="75" type="text" value={phonenumber} onChange={this.update('phonenumber')} />
                        </label>
                        <br/>
                        <label id="createbizaddress">
                            <span>Business Address</span>
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
                                <span>Monday Open:</span>
                                <select name="Monday Open" value={monopen} onChange={this.update('monopen')}>
                                    <option selected disabled value="">- open -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Monday Open Suffix" value={monopenend} onChange={this.update('monopenend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>
                            <label>
                                <span>Tuesday Open:</span>
                                <select name="Tuesday Open" value={tuesopen} onChange={this.update('tuesopen')}>
                                    <option selected disabled value="">- open -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Tuesday Open Suffix" value={tuesopenend} onChange={this.update('tuesopenend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>
                            <label>
                                <span>Wednesday Open:</span>
                                <select name="Wednesday Open" value={wedopen} onChange={this.update('wedopen')}>
                                    <option selected disabled value="">- open -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Wednesday Open Suffix" value={wedopenend} onChange={this.update('wedopenend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>
                            <label>
                                <span>Thursday Open:</span>
                                <select name="Thursday Open" value={thursopen} onChange={this.update('thursopen')}>
                                    <option selected disabled value="">- open -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Thursday Open Suffix" value={thursopenend} onChange={this.update('thursopenend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>
                            <label>
                                <span>Friday Open:</span>
                                <select name="Friday Open" value={friopen} onChange={this.update('friopen')}>
                                    <option selected disabled value="">- open -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Friday Open Suffix" value={friopenend} onChange={this.update('friopenend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>
                            <label>
                                <span>Saturday Open:</span>
                                <select name="Saturday Open" value={satopen} onChange={this.update('satopen')}>
                                    <option selected disabled value="">- open -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Saturday Open Suffix" value={satopenend} onChange={this.update('satopenend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>
                            <label>
                                <span>Sunday Open:</span>
                                <select name="Sunday Open" value={sunopen} onChange={this.update('sunopen')}>
                                    <option selected disabled value="">- open -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Sunday Open Suffix" value={sunopenend} onChange={this.update('sunopenend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>
                        </div>
                        <div className="bizhours-grid2">
                            <label>
                                <span>Monday Close:</span>
                                <select name="Monday Close" value={monclose} onChange={this.update('monclose')}>
                                    <option selected disabled value="">- close -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Monday Close Suffix" value={moncloseend} onChange={this.update('moncloseend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>                 
                            <label>
                                <span>Tuesday Close:</span>
                                <select name="tuesday Close" value={tuesclose} onChange={this.update('tuesclose')}>
                                    <option selected disabled value="">- close -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Tuesday Close Suffix" value={tuescloseend} onChange={this.update('tuescloseend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>  
                            <label>
                                <span>Wednesday Close:</span>
                                <select name="Wednesday Close" value={wedclose} onChange={this.update('wedclose')}>
                                    <option selected disabled value="">- close -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Wednesday Close Suffix" value={wedcloseend} onChange={this.update('wedcloseend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>   
                            <label>
                                <span>Thursday Close:</span>
                                <select name="Thursday Close" value={thursclose} onChange={this.update('thursclose')}>
                                    <option selected disabled value="">- close -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Thursday Close Suffix" value={thurscloseend} onChange={this.update('thurscloseend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>       
                            <label>
                                <span>Friday Close:</span>
                                <select name="Friday Close" value={friclose} onChange={this.update('friclose')}>
                                    <option selected disabled value="">- close -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Friday Close Suffix" value={fricloseend} onChange={this.update('fricloseend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>   
                            <label>
                                <span>Saturday Close:</span>
                                <select name="Saturday Close" value={satclose} onChange={this.update('satclose')}>
                                    <option selected disabled value="">- close -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Saturday Close Suffix" value={satcloseend} onChange={this.update('satcloseend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </label>   
                            <label>
                                <span>Sunday Close:</span>
                                <select name="Sunday Close" value={sunclose} onChange={this.update('sunclose')}>
                                    <option selected disabled value="">- close -</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="Sunday Close Suffix" value={suncloseend} onChange={this.update('suncloseend')}>
                                    <option selected disabled value="">- a.m. or p.m. -</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
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
                    <div id="nevermind-button">
                        <button onClick={this.navigateToSearch}>I'll do this later!</button>
                    </div>
            </div>
        )
    }
}

export default withRouter(BusinessForm)

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