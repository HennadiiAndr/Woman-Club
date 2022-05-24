import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux' 
import App from './components/App.js'
import thunk from 'redux-thunk';
import allReducers from './reducers';
import { composeWithDevTools  } from '@redux-devtools/extension'

const store = createStore(
   allReducers,
   composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
<Provider store={store}>
   <App/>
</Provider>, 
document.querySelector("#root")
);