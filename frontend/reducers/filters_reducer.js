import { UPDATE_FILTER, CLEAR } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    searchQuery: "",
    bounds: {},
    minPricepoint: 1,
    maxPricepoint: 4,
    filterCategory: "All",
    filterOpenNow: "Always",
    filterRating: null,
    filterDelivery: "All",
    filterTakeout: "All"
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_FILTER:
            const newFilter = {
                [action.filter]: action.value
            };
            return Object.assign({}, state, newFilter);
        case CLEAR:
            return defaultFilters;
        default:
            return state;
    }
};

export default filtersReducer;

