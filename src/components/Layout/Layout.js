import {Container, makeStyles} from "@material-ui/core";
import NavigationDrawer from "./NavigationDrawer/NavigationDrawer";

const useStyles = makeStyles((theme) => ({
    layout: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        backgroundColor: theme.palette.secondary.main
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function Layout(props) {
    const classes = useStyles()
    return (
        <div className={classes.layout}>
            <Container className={classes.content}>
                {props.children}
            </Container>
            <div>
                <NavigationDrawer isAuthenticated={props.isAuthenticated}/>
            </div>
        </div>
    )
}