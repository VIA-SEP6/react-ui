import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {useHistory} from "react-router-dom";
import {Icon, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        fontWeight: "normal"
    },
    icon: {
        color: "white",
        padding: theme.spacing(0.5),
    },
}));

const NavItem = (props) => {
    const classes = useStyles();
    const history = useHistory();

    function navigateTo(path) {
        history.push(path);
    }

    return (
        <ListItem className={classes.root} button onClick={() => navigateTo(props.to)}>
            <ListItemIcon className={classes.icon}>
                <Icon>{props.icon}</Icon>
            </ListItemIcon>
            <ListItemText disableTypography={true} primary={props.header}/>
        </ListItem>
    )
}

export default NavItem