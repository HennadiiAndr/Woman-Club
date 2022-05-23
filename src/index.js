import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux' 
import App from './components/App.js'
import thunk from 'redux-thunk';
import allReducers from './reducers';

const enhancers = [applyMiddleware(thunk)]

const store = createStore(
   allReducers,
   compose(...enhancers)
);

ReactDOM.render(
<Provider store={store}>
   <App/>
</Provider>, 
document.querySelector("#root")
);