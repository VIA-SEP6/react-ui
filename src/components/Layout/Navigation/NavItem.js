import {makeStyles} from "@material-ui/core/styles";
import React from "react";
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

    return (
        <ListItem className={classes.root} button onClick={props.onClick}>
            <ListItemIcon className={classes.icon}>
                <Icon>{props.icon}</Icon>
            </ListItemIcon>
            <ListItemText disableTypography={true} primary={props.header}/>
        </ListItem>
    )
}

export default NavItem