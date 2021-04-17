import {Component} from "react";
import {connect} from "react-redux";

import {createUserAccount} from '../../store/actions/index'

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

                <button>Login</button>
                <button onClick={() => this.props.registerUser(this.state.email, this.state.password)}>Register</button>
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
        registerUser: (email, password) => dispatch(createUserAccount(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
