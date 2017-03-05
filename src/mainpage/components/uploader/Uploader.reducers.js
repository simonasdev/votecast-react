import { combineReducers } from 'redux';


const uploaderReducers = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_UPLOAD_STATUS': {
            return {
                ...state,
                uploadStatus: action.data
            };
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    uploader: uploaderReducers
});