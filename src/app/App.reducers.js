import { combineReducers } from 'redux';


const defaultState = {
    activePage: 'PAGE_LANDING'
};

const appReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_PAGE': {
            return {
                ...state,
                activePage: action.data
            };
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    app:appReducers
});