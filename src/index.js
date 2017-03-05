import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Root, rootReducers } from './root';


const store = Redux.createStore (
	rootReducers,
	Redux.applyMiddleware(
		thunkMiddleware
	)
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);