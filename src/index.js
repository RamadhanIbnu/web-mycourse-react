import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
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
