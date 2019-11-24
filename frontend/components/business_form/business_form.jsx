import React from 'react';
import {withRouter} from 'react-router';

class BusinessForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = {lat: props.lat, lng: props.lng};
        this.state = {
            name: '',
            category: 'Restaurants',
            website: 'www.business.com',
            phonenumber: '(123)456-7890',
            address1: '123 Sesame Street',
            address2: 'San Francisco, CA 12345',
            pricepoint: 3,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
    }

    navigateToSearch() {
        this.props.history.push('/');
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
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

        this.props.createBusiness(formData);
        this.navigateToSearch();
    }

    render() {
        const { name, category, website, phonenumber, address1, address2, pricepoint } = this.state;
        const { lat, lng } = this.coords;

        return (
            <div>
                <h2>Creating a Business</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input type="text" value={name} onChange={this.update('name')} />
                    </label>
                    <label>Category
                        <input type="text" value={category} onChange={this.update('category')} />
                    </label>
                    <label>Latitude
                        <input type="text" disabled value={lat} />
                    </label>
                    <label>Longitude
                        <input type="text" disabled value={lng} />
                    </label>
                    <label>Website
                        <input type="text" value={website} onChange={this.update('website')} />
                    </label>
                    <label>Phone Number
                        <input type="text" value={phonenumber} onChange={this.update('phonenumber')} />
                    </label>
                    <label>Address 1
                        <input type="text" value={address1} onChange={this.update('address1')} />
                    </label>
                    <label>Address 2
                        <input type="text" value={address2} onChange={this.update('address2')} />
                    </label>
                    <label>Pricepoint
                        <input type="number" value={pricepoint} onChange={this.update('pricepoint')} />
                    </label>
                    <input type="submit" value='New Spot in Town!' />
                </form>
                <div>
                    <button onClick={this.navigateToSearch}>I'll do this later!</button>
                </div>
            </div>
        )
    }
}

export default withRouter(BusinessForm)

