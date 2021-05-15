import {makeStyles} from "@material-ui/core/styles";
import {GridList, Paper} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import mainPageApiService from "../../../services/firebase/api/main";
import MovieGridTile from "../Common/MovieGridTile";
import TopicHeader from "../Common/TopicHeader";
import LoadingSkeleton from "./LoadingSkeleton"

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    gridList: {
        height: 660,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function PopularMovies(props) {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const classes = useStyles()

    const fetchPopularMovies = () => {
        setLoading(true)
        mainPageApiService.getPopularMovies()
            .then(response => {
                setLoading(false)
                setMovies(response)
            })
    }
    useEffect(() => {
        fetchPopularMovies();
        return () => {
            setMovies([])
        }
    }, [setMovies])

    let content = (
        <Paper elevation={8}>
            <GridList spacing={0} cellHeight={220} className={classes.gridList}>
                {movies.map((movie) => (
                    <MovieGridTile movie={movie}/>
                ))}
            </GridList>
        </Paper>
    )

    if (loading)
        content = <LoadingSkeleton/>

    return (
        <div className={classes.root}>
            <TopicHeader>Popular Movies</TopicHeader>
            {content}
        </div>
    )
}