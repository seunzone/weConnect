import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import jwt from 'jsonwebtoken';
import setAuth from './utils/auth';
import { currentUser } from './actions/auth';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


const localToken = localStorage.makeToken;
if (localToken) {
  setAuth(localToken);
  store.dispatch(currentUser(jwt.decode(localToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
