import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { App } from '../app';


const Root = ({store}) => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path='/' component={App} />
                <Redirect from='*' to='/' />
            </Router>
        </Provider>
    );
};

export default Root;