import React, {Component} from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import SignOut from "./containers/Auth/SignOut";
import Movies from "./containers/Movies";
import Profile from "./containers/Profile"
import './App.css';
import Layout from "./components/Layout/Layout";
import {loginUser, logInWithGoogle, registerUser} from "./store/actions";


class App extends Component {
    componentDidMount() {
        // this.props.onTryAutoSignUp()
    }

    render() {
        let routes = (
            <Switch>
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
                <Layout
                    isAuthenticated={this.props.isAuthenticated}
                    loginUser={this.props.loginUser}
                    loginWithGoogle={this.props.loginWithGoogle}
                    registerUser={this.props.registerUser}
                >
                    {routes}
                </Layout>
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
        loginUser: (email, password) => dispatch(loginUser(email, password)),
        loginWithGoogle: () => dispatch(logInWithGoogle()),
        registerUser: (newUserObject) => dispatch(registerUser(newUserObject))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

