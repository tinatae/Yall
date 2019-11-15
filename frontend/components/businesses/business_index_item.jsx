import React from 'react';
import { withRouter } from 'react-router-dom';
import BusinessShowContainer from '../business/business_show_container';

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        // const site = this.props.history.slice(0, lastIndexOf('#') )
        this.props.history.push(`api/businesses/${this.props.business.id}`)
    };

    render() {

        const { business } = this.props;

        return (
            <div onClick={this.handleClick}>
            <div key={ business.id }>Name: { business.name }</div>
            </div>
        );
    };
};

export default withRouter(BusinessIndexItem);