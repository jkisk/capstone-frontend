import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Login from './components/Login'
import Game from './components/Game'
import Signup from './components/Signup'
import TopMenu from './components/TopMenu'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Fragment>
            <TopMenu />
            <Switch>
              <Route exact path='/' component={() => <Redirect to="/login" />} />
              <Route path='/login' component={Login} />
              <Route path='/play' component={Game} />
              <Route path='/signup' component={Signup} />
            </Switch>
          </Fragment>
        </Router>

      </div>
    );
  }
}

export default App;
