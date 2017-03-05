import { combineReducers } from 'redux';


const loginPageReducers = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_FAILED': {
            return {
                ...state,
                loginStatus: action.data
            };
        }
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                loginStatus: action.data
            };
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    loginpage: loginPageReducers
});