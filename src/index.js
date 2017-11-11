import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './Components/Routes';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/clean-blog.min.css';

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