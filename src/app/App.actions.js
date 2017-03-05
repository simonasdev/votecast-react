export const setActivePage = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_ACTIVE_PAGE',
            data
        });
    };
};