import {Component} from "react";
import classes from "./Layout.module.css"
import NavigationDrawer from "../components/NavigationDrawer/NavigationDrawer";
import {Container} from "@material-ui/core";

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Container>
                    {this.props.children}
                </Container>
                <div>
                    <NavigationDrawer/>
                </div>
            </div>
        )
    }
}

export default Layout;