import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";
import LoadingSkeleton from "./Components/LoadingSkeleton";
import mainPageApiService from "../../../services/firebase/api/main";
import {Icon, Tab, Tabs} from "@material-ui/core";
import {TabContext, TabPanel} from "@material-ui/lab";
import RankingContainer from "./Components/RankingContainer";


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center"
    },
    tabRoot: {
        maxWidth: "350px",
        margin: theme.spacing(1, "auto")
    },
    header: {
        fontSize: 24,
        fontWeight: 400
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
}));

export default function TopRatedMovies(props) {
    const [loading, setLoading] = useState(true)
    const [imdbMovies, setIMDbMovies] = useState([])
    const [tmaMovies, setTmaMovies] = useState([])
    const [value, setValue] = React.useState('1');

    const classes = useStyles()

    function fetchTopRatedMovies() {
        mainPageApiService.getTopRatedMovies()
            .then(response => {
                setIMDbMovies(response.results)
                setTmaMovies(response.tma_results)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchTopRatedMovies();
        return () => {
            setIMDbMovies([])
            setTmaMovies([])
        }
    }, [setIMDbMovies, setTmaMovies])


    const handleTabChange = (event, newValue) => {
        setValue(newValue);
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

    let content = (
        <React.Fragment>
            <h3 className={classes.header}>Top Rated Movies</h3>
            <TabContext value={value} className={classes.root}>
                <Tabs
                    classes={{root: classes.tabRoot}}
                    value={value}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab value="1" label={tmaTab}/>
                    <Tab value="2" label={imdbTab}/>
                </Tabs>
                <TabPanel value="1">
                    <RankingContainer movies={tmaMovies}/>
                </TabPanel>
                <TabPanel value="2">
                    <RankingContainer movies={imdbMovies}/>
                </TabPanel>
            </TabContext>
        </React.Fragment>
    )

    if (loading)
        content = <LoadingSkeleton/>

    return (
        <div className={classes.root}>
            {content}
        </div>
    )
}