import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

axios.defaults.withCredentials = true;
axios.default.baseURL = 'http://rem-rest-api.herokuapp.com/api/users'

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducers, enhancer);


sagaMiddleware.run(rootSaga);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={(store)}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
