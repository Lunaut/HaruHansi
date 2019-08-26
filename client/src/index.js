import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-mobx';
import store from './store';

ReactDOM.render(<Provider Store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
