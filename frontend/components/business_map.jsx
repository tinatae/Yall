import React from 'react';
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router-dom';
import MarkerManager from '../util/marker_manager';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

const mapOptions = {
    center: { lat: 37.8206228, lng: -122.3194160 },
    zoom: 9
};

class BusinessMap extends React.Component {

    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

        if (this.props.addBusiness) {
            const addLatLng = new google.maps.LatLng(this.props.lat, this.props.lng);

            const addMapOptions = {
                center: addLatLng,
                zoom: 16
            }

            const addMap = new google.maps.Map(this.mapNode, addMapOptions)

            const addMarker = new google.maps.Marker({
                position: addLatLng,
            });
            addMarker.setMap(addMap);
        } else if (this.props.singleBusiness) {
            this.props.fetchBusiness(this.props.businessId);
        } else  {
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.businesses);
        }
    };

    componentDidUpdate() {
 
        if (this.props.singleBusiness) {
            const targetBusinessKey = Object.keys(this.props.businesses)[0];
            const targetBusiness = this.props.businesses[targetBusinessKey];

            const profileLatlng = new google.maps.LatLng(targetBusiness.lat, targetBusiness.lng);
            const profileMapOptions = {
                center: profileLatlng,
                zoom: 16
            };

            const profileMap = new google.maps.Map(this.mapNode, profileMapOptions);
            
            const profileMarker = new google.maps.Marker({
                position: profileLatlng,
            });
            profileMarker.setMap(profileMap); 

        } else if (!this.props.singleBusiness && !this.props.addBusiness){
            this.MarkerManager.updateMarkers(this.props.businesses);
        }
    };

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const {north, south, east, west} = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
        this.props.updateFilter('bounds', bounds);
        });

    };

    handleMarkerClick(business) {
        this.props.history.push(`businesses/${business.id}`);
    }

    handleClick(coords) {
        this.props.history.push(`/businesses/new?lat=${coords.lat}&lng=${coords.lng}`)
    }


    render() {
        return (
            <div id='map-container' ref={map => this.mapNode = map} />
        )
    };
};

export default withRouter(BusinessMap);