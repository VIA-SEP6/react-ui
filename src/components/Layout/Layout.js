import classes from "./Layout.module.css"
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import {Container} from "@material-ui/core";

export default function Layout(props) {
    return (
        <div className={classes.Layout}>
            <Container>
                {props.children}
            </Container>
            <div>
                <NavigationDrawer/>
            </div>
        </div>
    )
}