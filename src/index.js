import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './Components/Routes';
import './index.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './clean-blog.min.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    
      render() {
        return (
          <div>
            <Routes />
          </div>
        );
      }
    }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
