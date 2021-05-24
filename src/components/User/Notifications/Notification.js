import {makeStyles} from "@material-ui/core/styles";
import HorizontalLine from "../../Layout/Seperator/HorizontalLine";
import {Badge, ListItemIcon, ListItemText, MenuItem} from "@material-ui/core";
import UserAvatar from "../UserAvatar";
import PrimaryText from "./PrimaryText";
import SecondaryText from "./SecondaryText";
import React from "react";

const useStyles = makeStyles(theme => ({
    menuItemRoot: {
        width: 350,
        padding: theme.spacing(1)
    },
    date: {
        textAlign: "right",
    },
}));

export default function Notification(props) {
    const classes = useStyles()

    const {notification, onClick = (notificationId) => {}} = props

    return (
        <React.Fragment>
                <HorizontalLine style={{margin: 0}}/>
                <MenuItem classes={{root: classes.menuItemRoot}} onClick={() => onClick(notification.id)}>
                    <Badge variant="dot" color="primary" invisible={notification.read}/>
                    <ListItemIcon>
                        <UserAvatar src={notification.subject.profilePhotoUrl}/>
                    </ListItemIcon>
                    <ListItemText
                        classes={{secondary: classes.date}}
                        primary={<PrimaryText notification={notification}/>}
                        secondary={<SecondaryText
                            date={new Date(notification.timestamp?.toDate())}/>}/>
                </MenuItem>
        </React.Fragment>
    )
}