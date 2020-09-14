import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import Course from './Course';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Course/>
  </React.StrictMode>,
  document.getElementById('content')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
