import React, {Component} from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import SignOut from "./containers/Auth/SignOut";
import Movies from "./containers/Movies";
import Profile from "./containers/Profile"
import Movie from "./containers/Movie"
import './App.css';
import Layout from "./components/Layout/Layout";
import {loginUser, logInWithGoogle, registerUser, verifyAuth, logoutUser, searchMovie} from "./store/actions";

class App extends Component {
    componentDidMount() {
        this.props.tryAutoLogin()
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={Movies}/>
                <Route path="/movie/:id" component={Movie}/>
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuthenticated)
            routes = (
                <Switch>
                    <Route path="/logout" component={SignOut}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/movie/:id" component={Movie}/>
                    <Route path="/" exact component={Movies}/>
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

