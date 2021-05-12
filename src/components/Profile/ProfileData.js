import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: "inline-block",
        cursor: "pointer"
    },
    content: {
        fontSize: 10,
        width: 100,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        overflow: "hidden",
        margin: theme.spacing(0.5)
    },
    image: {
        width: 100,
        height: 150,
    },
    title: {
        margin: theme.spacing(0.5, 0),
        color: theme.palette.black.main,
    },
    subtitle: {
        color: theme.palette.gray.main
    }
}))

export default function ProfileData(props) {
    const {profileData} = props
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Avatar src={profileData.profilePhotoUrl}/>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.userName}>{profileData.userName}</div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.email}>{profileData.email}</div>
                </Grid>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <div className={classes.phoneText}>Phone</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.phone}>{profileData.userInfo.phone}</div>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <div className={classes.ageText}>Age</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.age}>{profileData.userInfo.age}</div>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <div className={classes.countryText}>Country</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.country}>{profileData.userInfo.country}</div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}