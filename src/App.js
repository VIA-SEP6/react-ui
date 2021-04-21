import React, {Component} from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import SignIn from "./containers/Auth/SignIn";
import Movies from "./containers/Movies";
import SignOut from "./containers/Auth/SignOut";
import Profile from "./containers/Profile"
import Snackbar from "./components/Snackbar/Snackbar"
import './App.css';
import Layout from "./components/Layout/Layout";



class App extends Component {
    componentDidMount() {
        // this.props.onTryAutoSignUp()
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/login" component={SignIn}/>
                <Route path="/" exact component={Movies}/>
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuthenticated)
            routes = (
                <Switch>
                    <Route path="/logout" component={SignOut}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/" exact component={Movies}/>
                    <Redirect to="/"/>
                </Switch>
            )

        return (
            <div className="App">
                <Snackbar />
                <Layout isAuthenticated={this.props.isAuthenticated}>{routes}</Layout>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.user !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onTryAutoSignUp: () => dispatch(actions.authCheckState())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

