import React from 'react';
import { withRouter } from 'react-router-dom';
import BusinessShowContainer from '../business_show/business_show_container';

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        const businessId = this.props.business.id;
        this.props.history.push(`/businesses/${businessId}`);
    }

    render() {
        const { name, average_rating, pricepoint, category, photoUrls } = this.props.business;

        return (
            <div onClick={this.handleClick}>
                <div className="index-item">
                    <img src={photoUrls[0]} />
                    <div className="index-item-info">
                        <span>Name: {name}</span>
                        <br />
                        <span>Rating: {average_rating || 'No Reviews Yet'}</span>
                        <br />
                        <span>Category: {category}</span>   
                        <br />       
                        <span>Pricepoint: {pricepoint}</span>          
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(BusinessIndexItem);