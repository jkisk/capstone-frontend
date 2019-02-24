import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from './store'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'))


