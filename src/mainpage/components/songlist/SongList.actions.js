const mockSongList = [
    {
        name: 'Eminem - Slim shady',
        url: 'http://Muhahaha.com/eminem',
        lenght: 222,
        votes: 0,
        playing: true,
        playPercentage: 25
    },{
        name: 'Rakade - Bitte Bitte',
        url: 'http://Muhahaha.com/rakede',
        lenght: 500,
        votes: 0
    },{
        name: 'Chase and Status',
        url: 'http://Muhahaha.com/chase',
        lenght: 802,
        votes: 0
    }
];

export const getSongs = () => {
    return (dispatch) => {
        let fullSongList = mockSongList;
        let playingSong = fullSongList.filter((value) => {
            if (value.playing === true) {
                return value;
            }
        });
        let upcomingSongList = fullSongList.filter((value) => {
            if (value.playing !== true) {
                return value;
            }
        });
        dispatch({
            type: 'PLAYING_SONG',
            data: playingSong
        });

        dispatch({
            type: 'UPCOMING_SONG_LIST',
            data: upcomingSongList
        });
    };
};

export const downVote = (data) => {
    return (dispatch) => {
        let request = {
            method: 'POST',
            headers: new Headers(),
            mode: 'cors',
            'Content-Type': 'text/plain',
            body: JSON.stringify({url: data.url})
        };
        dispatch({
            type: 'DOWNVOTING',
            data: ''
        });
        fetch(`${process.env.REACT_APP_API}/downvote`, {
            request
        }).then(res => {
            if (res.ok) {
                dispatch({
                    type: 'DOWNVOTED_SUCCESSFULLY',
                    data: ''
                });
            } else {
                dispatch({
                    type: 'DOWNVOTE_FAILED',
                    data: ''
                });
            }
        }).catch(err => dispatch({
            type: 'DOWNVOTE_FAILED',
            data: ''
        }));
        setTimeout(() => {
            dispatch({
                    type: 'DOWNVOTED_SUCCESSFULLY',
                    data: ''
                });
        }, 800); 
    };
};

export const upVote = (data) => {
    return (dispatch) => {
        let request = {
            method: 'POST',
            headers: new Headers(),
            mode: 'cors',
            'Content-Type': 'text/plain',
            body: JSON.stringify({url: data.url})
        };
        dispatch({
            type: 'UPVOTING',
            data: ''
        });
        fetch(`${process.env.REACT_APP_API}/upvote`, {
            request
        }).then(res => {
            if (res.ok) {
                dispatch({
                    type: 'UPVOTED_SUCCESSFULLY',
                    data: ''
                });
            } else {
                dispatch({
                    type: 'UPVOTE_FAILED',
                    data: ''
                });
            }
        }).catch(err => dispatch({
            type: 'UPVOTE_FAILED',
            data: ''
        }));
        setTimeout(() => {
            dispatch({
                    type: 'UPVOTED_SUCCESSFULLY',
                    data: ''
                });
        }, 800); 
    };
};