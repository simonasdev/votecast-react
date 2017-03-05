export const getSongs = () => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API}/streams`, {mode: 'no-cors'}).then(function (r) { return r.json() }).then(function (j) {
            let fullSongList = j;
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
        })


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