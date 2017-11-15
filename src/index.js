import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/clean-blog.min.css';
import './css/App.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
