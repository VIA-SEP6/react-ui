import NavItems from "../Navigation/NavItems";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navigationDrawer: {
        height: '100%',
        backgroundColor: "#5B7B7A",
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    }
}))


export default function NavigationDrawer() {
    const classes = useStyles();

    return (
        <div className={classes.navigationDrawer}>
            <NavItems/>
        </div>
    )  
}
