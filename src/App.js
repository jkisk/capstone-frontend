import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <p>
            SCRAMPLES!!
          </p>
          <Login/>
        </header>
   
      </div>
    );
  }
}

export default App;
