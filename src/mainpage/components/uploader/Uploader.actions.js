export const uploadSongUrl = (data) => {

    return (dispatch) => {
        let params = {url: data.data.songUrl}
        const searchParams = Object.keys(params).map((key) => {
          return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        let request = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
            body: searchParams
        };

        dispatch({
            type: 'UPDATE_UPLOAD_STATUS',
            data: 'UPLOADING'
        });
        fetch(`${process.env.REACT_APP_API}/streams`, request).then(res => {
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

        }).catch(err => {
            setTimeout(() => {
                fetch(`${process.env.REACT_APP_API}/play`, { method: 'POST' })
            }, 2000)

            dispatch({
                type: 'UPDATE_UPLOAD_STATUS',
                data: 'UPLOAD_FAILED'
            })
        });
        setTimeout(() => {
            dispatch({
                    type: 'UPDATE_UPLOAD_STATUS',
                    data: ''
                });
        }, 800);
    };
};


