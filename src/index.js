import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);