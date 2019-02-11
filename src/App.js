import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Login'
import Game from './components/Game'
import Signup from './components/Signup'
import HighScore from './components/HighScore'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Switch>
          <Route exact path='/' component={() => <Redirect to="/login" />} />
          <Route path='/login' component={Login} />
          <Route path='/play' component={Game} />
          <Route path='/signup' component={Signup} />
          <Route path='/scores' component={HighScore} />
        </Switch>
      </Router>
   
      </div>
    );
  }
}

export default App;
