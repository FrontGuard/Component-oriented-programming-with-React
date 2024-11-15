const initialState = {
    tourSearchData: {},
};

const tourReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TOUR_SEARCH':
            return { ...state, tourSearchData: action.payload };
        default:
            return state;
    }
};

export default tourReducer;
