import {makeStyles, Grid} from "@material-ui/core";
import BigAvatar from "./BigAvatar"
import React from "react";

const useStyles = makeStyles(theme => ({
    content: {
        fontSize: 15,
        textAlign: "center",
        alignItems: "center",
        overflowWrap: "break-word",
    },
    userName: {
        fontSize: 25,
        marginBottom: theme.spacing(1)
    },
    email: {
        marginBottom: theme.spacing(3),
        color: "#828282"
    },
    staticText: {
        float: "right",
        marginTop: theme.spacing(2)
    },
    text: {
        float: "left",
        color: theme.palette.gray.main,
        marginTop: theme.spacing(2)
    },
    statistics: {
        paddingTop: 30
    }
}))

export default function ProfileData(props) {
    const {profileData} = props
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <Grid container>
                <Grid item xs={12}>
                    <BigAvatar src={profileData?.profilePhotoUrl}/>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.userName}>{profileData.userName}</div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.email}>{profileData.email}</div>
                </Grid>
                <Grid spacing ={1} container>
                    <Grid item xs={6}>
                        <div className={classes.staticText}>Phone</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.text}>{profileData.phone}</div>
                    </Grid>
                </Grid>
                <Grid spacing ={1} container>
                    <Grid item xs={6}>
                        <div className={classes.staticText}>Age</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.text}>{profileData.age}</div>
                    </Grid>
                </Grid>
                <Grid spacing ={1} container>
                    <Grid item xs={6}>
                        <div className={classes.staticText}>Country</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.text}>{profileData.country}</div>
                    </Grid>
                </Grid>
                <Grid className={classes.statistics} spacing ={1} container>
                    <Grid item xs={6}>
                        <div className={classes.staticText}>Favorites</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.text}>{profileData.favouriteMovies.length}</div>
                    </Grid>
                </Grid>
                <Grid spacing ={1} container>
                    <Grid item xs={6}>
                        <div className={classes.staticText}>Comments</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.text}>{profileData.nrOfComments}</div>
                    </Grid>
                </Grid>
                <Grid spacing ={1} container>
                    <Grid item xs={6}>
                        <div className={classes.staticText}>Reviews</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.text}>{profileData.nrOfReviews}</div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}