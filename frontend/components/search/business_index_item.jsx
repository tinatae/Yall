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
        const { name } = this.props.business;

        return (
            <div onClick={this.handleClick}>
                <span>Name: {name}</span>
            </div>
        );
    };
};

export default withRouter(BusinessIndexItem);