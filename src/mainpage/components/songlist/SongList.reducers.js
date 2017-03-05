import { combineReducers } from 'redux';


const songListReducers = (state = {}, action) => {
    switch (action.type) {
        case 'PLAYING_SONG': {
            return {
                ...state,
                playingSong: action.data
            };
        }
        case 'UPCOMING_SONG_LIST': {
            return {
                ...state,
                upcomingSongList: action.data
            };
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    songList: songListReducers
});