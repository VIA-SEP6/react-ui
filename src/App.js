import React, {Component} from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';
import Layout from "./components/Layout/Layout";
import {loginUser, logInWithGoogle, logoutUser, registerUser, searchMovie, verifyAuth} from "./store/actions";

import SignOut from "./containers/Auth/SignOut";
import Main from "./containers/Main";
import Profile from "./containers/Profile"
import Movie from "./containers/Movie"
import Person from "./containers/Person"
import Search from "./containers/Search"
import Settings from "./containers/Settings"
import PlatformStatistics from "./containers/PlatformStatistics";

class App extends Component {
    componentDidMount() {
        this.props.tryAutoLogin()
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/movie/:id" component={Movie}/>
                <Route path="/person/:id" component={Person}/>
                <Route path="/search/:name" component={Search}/>
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuthenticated)
            routes = (
                <Switch>
                    <Route path="/logout" component={SignOut}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/movie/:id" component={Movie}/>
                    <Route path="/person/:id" component={Person}/>
                    <Route path="/search/:name" component={Search}/>
                    <Route path="/platform/statistics" component={PlatformStatistics}/>
                    <Route path="/" exact component={Main}/>
                    <Redirect to="/"/>
                </Switch>
            )

        return (
            <div className="App">
                <Layout
                    isAuthenticated={this.props.isAuthenticated}
                    currentUser={this.props.currentUser}
                    loginUser={this.props.loginUser}
                    loginWithGoogle={this.props.loginWithGoogle}
                    registerUser={this.props.registerUser}
                    logoutUser={this.props.logoutUser}
                >
                    {routes}
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.user !== null,
        currentUser: state.auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tryAutoLogin: () => dispatch(verifyAuth()),
        loginUser: (email, password) => dispatch(loginUser(email, password)),
        loginWithGoogle: () => dispatch(logInWithGoogle()),
        registerUser: (newUserObject) => dispatch(registerUser(newUserObject)),
        logoutUser: () => dispatch(logoutUser()),
        searchMovie: (name) => dispatch(searchMovie(name))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

