import React from 'react';
import ReactDOM from 'react-dom'
import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component {

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        };
        const map = this.refs.map;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.businesses);

    }

    render() {
        return (
            <div id='map-container' ref={map => this.mapNode = map} />
        )
    };
};

export default BusinessMap;