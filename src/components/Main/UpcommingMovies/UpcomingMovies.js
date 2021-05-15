import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import {Grid, Icon, Paper} from "@material-ui/core";
import mainPageApiService from "../../../services/firebase/api/main";
import LoadingSkeleton from "./LoadingSkeleton";
import {useHistory} from "react-router-dom";
import {formatDate} from "../../../services/util/dateConverter";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    },
    tile: {
      height: "auto"
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: "white",
        maxWidth: 220,
    },
    year: {
        marginRight: theme.spacing(2),
        fontSize: 12
    },
    titleBar: {
        color: "white",
        background: 'rgba(0, 0, 0, 0.3)',
    },
    header: {
        fontSize: 24,
        fontWeight: 400
    }
}));

export default function UpcomingMovies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const classes = useStyles();
    const history = useHistory();

    const fetchUpcomingMovies = () => {
        setLoading(true)
        mainPageApiService.getUpcomingMovies()
            .then(response => {
                setLoading(false)
                setMovies(response)
            })
    }

    const openMovieDetails = (movieId) => {
        history.push(`/movie/${movieId}`)
    }

    useEffect(() => {
        fetchUpcomingMovies();
        return () => {
            setMovies([])
        }
    }, [setMovies])

    const getReleaseDate = (dateString) => {
        return formatDate(new Date(dateString))
    }

    let content = (
        <React.Fragment>
            <h3 className={classes.header}>Upcoming Movies</h3>
            <Paper elevation={8}>
                <GridList className={classes.gridList} cols={2.5}>
                    {movies.map((movie) => (
                        <GridListTile key={movie.id} style={{width: 400, height: 220, padding: 0}}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
                            <GridListTileBar
                                title={movie.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <Grid container direction="row" alignItems="center">
                                    <span className={classes.year}>
                                        {getReleaseDate(movie.release_date)}
                                    </span>
                                        <IconButton aria-label={`star ${movie.title}`} onClick={() => openMovieDetails(movie.id)}>
                                            <Icon className={classes.title}>info-outlined</Icon>
                                        </IconButton>
                                    </Grid>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </Paper>

        </React.Fragment>

    )

    if (loading)
        content = <LoadingSkeleton/>

    return (
        <div className={classes.root}>
            {content}
        </div>
    );
}