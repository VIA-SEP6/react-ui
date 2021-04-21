import React from "react"
import {Divider, List} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import NavItem from "./NavItem";

const useStyles = makeStyles((theme) => ({
    divider: {
        // Theme Color, or use css color in quote
        background: "white",
        width: '80%',
        margin: 'auto'
    },
}));

const NavItems = (props) => {
    const classes = useStyles()

    const defaultNavigation = [
        {to: "/", header: "Movies", icon: "subscriptions"},
        {to: "/login", header: "Login", icon: "login"}
    ]

    const authenticatedNavigation = [
        {to: "/", header: "Movies", icon: "subscriptions"},
        {to: "/profile", header: "Profile", icon: "person"},
        {to: "/logout", header: "Logout", icon: "logout"},
    ]

    const navigation = props.isAuthenticated ? authenticatedNavigation : defaultNavigation;

    return (
        <div>
            <List>
                {navigation.map(item => (
                    <NavItem key={item.header} to={item.to} header={item.header} icon={item.icon}/>
                ))}
            </List>
            <Divider classes={{root: classes.divider}}/>
        </div>
    )
}

export default NavItems;