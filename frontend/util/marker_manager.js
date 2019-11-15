class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    };

    updateMarkers(businesses) {
        const businessObj = {};
        businesses.forEach(business => businessObj[business.id] = business);

        businesses.filter(business => !this.markers[business.id])
        .forEach(newBusiness => this.createMarkerFromBusiness(newBusiness))
    };

    createMarkerFromBusiness(business) {
        const position = new google.maps.LatLng(business.lat, business.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            businessId: business.id
        });
    };
};

export default MarkerManager;