import {makeStyles} from "@material-ui/core/styles";
import {Grid, Icon, Tab, Tabs} from "@material-ui/core";
import {TabContext, TabPanel} from "@material-ui/lab";
import React from "react";
import TheMovieAgentReviews from "./TheMovieAgent/TheMovieAgentReviews";
import ImdbReviews from "./IMDb/ImdbReviews";

const useStyles = makeStyles(theme => ({
    root: {},
    tabRoot: {
        maxWidth: "350px",
        margin: theme.spacing(1, "auto")
    },
    tabLabel: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        "& h4": {
            margin: theme.spacing(1, 1)
        }
    },
    tabPanel: {
        padding: theme.spacing(2, 0)
    }
}));

export default function MovieReviewContainer(props) {
    const [tab, setTab] = React.useState('1');

    const {movieId, currentUser} = props

    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    const imdbTab = (
        <div className={classes.tabLabel}>
            <img src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
                 alt="imdb icon" height="24"/>
            <h4>IMDb</h4>
        </div>
    )

    const tmaTab = (
        <div className={classes.tabLabel}>
            <Icon>movie</Icon>
            <h4>The Movie Agent</h4>
        </div>
    )

    return (
        <TabContext value={tab} className={classes.root}>
            <Tabs
                classes={{root: classes.tabRoot}}
                value={tab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab value="1" label={tmaTab}/>
                <Tab value="2" label={imdbTab}/>
            </Tabs>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} md={7}>
                    <TabPanel classes={{root: classes.tabPanel}} value="1">
                        <TheMovieAgentReviews movieId={movieId} currentUser={currentUser}/>
                    </TabPanel>
                </Grid>
                <Grid item xs={12} md={7}>
                    <TabPanel classes={{root: classes.tabPanel}} value="2">
                        <ImdbReviews movieId={movieId}/>
                    </TabPanel>
                </Grid>
            </Grid>
        </TabContext>
    )
}