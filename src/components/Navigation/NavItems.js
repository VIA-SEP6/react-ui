import React from "react"
import {useHistory} from "react-router-dom";
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import {Divider, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    divider: {
        // Theme Color, or use css color in quote
        background: "white",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        paddingTop: theme.spacing(2)
    }
}));

const NavItems = (props) => {
    const classes = useStyles()
    const history = useHistory();

    function navigateTo(path) {
        history.push(path);
    }

    return (
        <div className={classes.content}>
            <IconButton onClick={() => navigateTo("/")}>
                <SubscriptionsOutlinedIcon style={{color: "white"}}/>
            </IconButton>
            <IconButton onClick={() => navigateTo("/login")}>
                <PersonOutlineOutlinedIcon style={{color: "white"}}/>
            </IconButton>
            <Divider classes={{root: classes.divider}}/>
        </div>
    )
}

export default NavItems;