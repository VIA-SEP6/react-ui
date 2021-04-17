import {Component} from "react";
import {connect} from "react-redux";

import {registerUser, loginUser, logoutUser} from '../../store/actions/index'

class LoginComponent extends Component {
    state = {
        email: "",
        password: ""
    }

    render() {
        return (
            <div>
                <label htmlFor="email">Email</label>
                <input onInput={(e) => this.setState({email: e.target.value})} id="email" type="text"/>

                <label htmlFor="password">Password</label>
                <input onInput={(e) => this.setState({password: e.target.value})} id="password" type="text"/>

                <button onClick={() => this.props.loginUser(this.state.email, this.state.password)}>Login</button>
                <button onClick={() => this.props.registerUser(this.state.email, this.state.password)}>Register</button>
                <button onClick={() => this.props.logoutUser(this.state.email, this.state.password)}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password)),
        registerUser: (email, password) => dispatch(registerUser(email, password)),
        logoutUser: (email, password) => dispatch(logoutUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
