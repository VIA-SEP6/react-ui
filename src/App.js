import React, { Component } from 'react'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from "./containers/Login";
import Movies from "./containers/Movies";
import './App.css';
import Layout from "./components/Layout/Layout";

class App extends Component {
  componentDidMount() {
    // this.props.onTryAutoSignUp()
  }

  render() {
    let routes = (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Movies} />
          <Redirect to="/" />
        </Switch>
    )

    return (
        <div className="App">
          <Layout>{routes}</Layout>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

