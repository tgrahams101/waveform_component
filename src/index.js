import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App data={[0, 0.3, 1, 0.5, 1, 0.3, 0]}/>,
  document.getElementById('root')
);
