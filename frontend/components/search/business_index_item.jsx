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
        const { name, average_rating, photoUrls } = this.props.business;

        return (
            <div onClick={this.handleClick}>
                <div>
                    <span>Rating: {average_rating || 'No Reviews Yet'}</span>
                    <br/>
                    <span>Name: {name}</span>
                </div>
                    <img src={photoUrls[0]}/>
            </div>
        );
    };
};

export default withRouter(BusinessIndexItem);