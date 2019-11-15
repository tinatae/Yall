import React from 'react';
import BusinessIndexItem from './business_index_item';

// const BusinessIndex = ({ businesses }) => (
//         <div>
//             <h2>List of Businesses in Area Show Here</h2>
//             {businesses.map(business => (
//                 <BusinessIndexItem 
//                     business={business} />
//             ))}
//         </div>
// );

// export default BusinessIndex;

class BusinessIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        const business = this.props.businesses.map(business => (
            <BusinessIndexItem key={business.id} business={business} />
          )
        );

        return (
            <div>
                <h3>So where are we going!</h3>
                <span>{business}</span>
            </div>
        );
    }
};

export default BusinessIndex;
