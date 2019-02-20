import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import request from './utils/request'
import {setAuthentication} from './actions/auth'
import Login from './components/Login'
import Game from './components/Game'
import Signup from './components/Signup'
import HighScore from './components/HighScore'
import TopMenu from './components/TopMenu'
import Header from './components/Header'


class App extends Component {
  componentDidMount() {
    request('/login')
      .then(response => this.props.setAuthentication(response.data))
      .catch(err => this.props.setAuthentication(null))
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Header/>
            <TopMenu />
            <Switch>
              <Route exact path='/' component={() => <Redirect to="/login" />} />
              <Route path='/login' component={Login} />
              <Route path='/play' component={Game} />
              <Route path='/signup' component={Signup} />
              <Route path='/scores' component={HighScore} />
            </Switch>
          </Fragment>
        </Router >
      </div >
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setAuthentication: setAuthentication
  }, dispatch)

export default connect(null, mapDispatchToProps)(App)



