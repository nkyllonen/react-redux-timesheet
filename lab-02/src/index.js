import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// everything resolves up to the "root" component
// only do this once -- there's only one root
ReactDOM.render(<App />, document.getElementById('root'));
