import { combineReducers } from 'redux';
import { uploaderReducers, songListReducers } from './components';


const mainPageReducers = (state = {}, action) => {
    switch (action.type) {
        // case 'LOGIN_SUCCESS': {
        //     return {
        //         ...state,
        //         loginStatus: action.data
        //     };
        // }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    mainpage: mainPageReducers,
    uploader: uploaderReducers,
    songList: songListReducers    
});