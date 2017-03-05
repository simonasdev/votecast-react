export const uploadSongUrl = (data) => {
    return (dispatch) => {
        let request = {
            method: 'POST',
            headers: new Headers(),
            mode: 'cors',
            'Content-Type': 'text/plain',
            body: JSON.stringify({songUrl: data.songUrl})
        };
        dispatch({
            type: 'UPDATE_UPLOAD_STATUS',
            data: 'UPLOADING'
        });
        fetch(`${process.env.REACT_APP_API}/upload`, {
            request
        }).then(res => {
            if (res.ok) {
                dispatch({
                    type: 'UPDATE_UPLOAD_STATUS',
                    data: 'UPLOAD_SUCCESS'
                });
            } else {
                dispatch({
                    type: 'UPDATE_UPLOAD_STATUS',
                    data: 'UPLOAD_FAILED'
                });
            }
        }).catch(err => dispatch({
            type: 'UPDATE_UPLOAD_STATUS',
            data: 'UPLOAD_FAILED'
        }));
        setTimeout(() => {
            dispatch({
                    type: 'UPDATE_UPLOAD_STATUS',
                    data: ''
                });
        }, 800); 
    };
};


