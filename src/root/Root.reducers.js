import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { appReducers } from '../app';
import { loginPageReducers } from '../loginpage';
import { mainPageReducers } from '../mainpage';


const rootReducers = combineReducers({
    form: formReducer,
    app: appReducers,
    loginpage: loginPageReducers,
    mainPage: mainPageReducers
});

export default rootReducers;