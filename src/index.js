import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

import FastClick from 'fastclick';
FastClick.attach(document.body);
ReactDOM.render(<App/>, document.getElementById('root'))