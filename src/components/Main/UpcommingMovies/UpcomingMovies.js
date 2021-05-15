import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import {Paper} from "@material-ui/core";
import mainPageApiService from "../../../services/firebase/api/main";
import LoadingSkeleton from "./LoadingSkeleton";
import MovieGridTile from "../Common/MovieGridTile";
import TopicHeader from "../Common/TopicHeader";

const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}));

export default function UpcomingMovies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const classes = useStyles();

    const fetchUpcomingMovies = () => {
        setLoading(true)
        mainPageApiService.getUpcomingMovies()
            .then(response => {
                setLoading(false)
                setMovies(response)
            })
    }

    useEffect(() => {
        fetchUpcomingMovies();
        return () => {
            setMovies([])
        }
    }, [setMovies])

    let content = (
        <Paper elevation={8}>
            <GridList spacing={0} className={classes.gridList} cols={2.5}>
                {movies.map((movie) => (
                    <MovieGridTile movie={movie} style={{width: 400, height: 220}}/>
                ))}
            </GridList>
        </Paper>
    )

    if (loading)
        content = <LoadingSkeleton/>

    return (
        <div className={classes.root}>
            <TopicHeader>Upcoming Movies</TopicHeader>
            {content}
        </div>
    );
}