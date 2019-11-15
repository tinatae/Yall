import React from 'react';
import { withRouter } from 'react-router-dom';
import BusinessShowContainer from '../business/business_show_container';

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        const businessId = this.props.business.id;
        this.props.history.push(`/api/businesses/${businessId}`);
    };

    render() {
        const { business } = this.props;

        return (
            <div onClick={this.handleClick}>
                <div key={business.id}>Name: {business.name}</div>
                <div key={business.id}>Rated: {business.average_rating}</div>
                <div key={business.id}>Address1: {business.address1}</div>
                <div key={business.id}>Address2: {business.address2}</div>
                <br/>
            </div>
        );
    };
};

export default withRouter(BusinessIndexItem);