// export const setActivePage = (data) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'SET_ACTIVE_PAGE',
//             data
//         });
//     };
// };

const allowedUserName = 'makerfest';
const allowedPassword = '2017';


export const authorizeUser = (passedProps) => {
    if (passedProps.data.name === allowedUserName && passedProps.data.pass === allowedPassword) {
        passedProps.actions.setActivePage('PAGE_MAIN');
        return (dispatch) => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                data: ''
            });
        };
    }

    return (dispatch) => {
        dispatch({
            type: 'LOGIN_FAILED',
            data: 'Bad username or password'
        });
    };
};