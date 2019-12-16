import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Theme from './Globals/Theme';
import { GlobalStyles } from './Globals/Global';

ReactDOM.render(
  <Theme>
    <GlobalStyles />
    <App />
  </Theme>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
