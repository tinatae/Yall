import React from 'react';
import BusinessIndexItem from './business_index_item';

// const BusinessIndex = ({ businesses }) => (
//     <div>
//         <h2>Businesses</h2>
//         {businesses.map(business => (
//             <BusinessIndexItem business={business} key={business.id} />
//         ))}
//     </div>
// );

// export default BusinessIndex;

class BusinessIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        const business = this.props.businesses.map(business => (
            <BusinessIndexItem business={business} key={business.id} />
          )
        );

        return (
            <div>Where would you like to go! {business}</div>
        );
    }
};

export default BusinessIndex;
