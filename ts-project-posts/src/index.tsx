import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Thunk from 'redux-thunk';
import rootReducer from './modules';
import App from './App';
import { PostSaga } from './modules/posts/saga';


const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(Thunk, sagaMiddleware));

sagaMiddleware.run(PostSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
