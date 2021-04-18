import {Component} from "react";

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

export default LoginComponent
