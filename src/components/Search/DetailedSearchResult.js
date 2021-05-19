import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import MovieSearchDetails from "../Movie/MovieSearchDetails";
import React, {useEffect, useState} from "react";
import {Pagination} from "@material-ui/lab";

const ITEMS_PER_PAGE = 10

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0, 4)
    },
    content: {
        height: 840
    }
}));

export default function DetailedSearchResult(props) {
    const [pageNumber, setPageNumber] = useState(1)
    const [pages, setPages] = useState(0)
    const [paginatedMovies, setPaginatedMovies] = useState([])
    const classes = useStyles()

    const {movieName, movies} = props

    const handlePageChange = (event, page) => {
        console.log(page)
        setPageNumber(page)
    }

    useEffect(() => {
        setPages(Math.ceil(movies.length / ITEMS_PER_PAGE))
        setPaginatedMovies(movies.slice((pageNumber - 1) * ITEMS_PER_PAGE, pageNumber * ITEMS_PER_PAGE))
    }, [movies, pageNumber])

    let pagination = null

    if (pages > 0)
        pagination = (
            <Grid container item xs={12} justify="center">
                <Pagination
                    page={pageNumber}
                    onChange={handlePageChange}
                    count={pages}
                    variant="outlined"
                    color="primary"
                />
            </Grid>
        )

    return (
        <div className={classes.root}>
            <h3 style={{textAlign: "center"}}>Showing Search Result for: {movieName}</h3>
            <Grid container spacing={4} alignItems="center">
                <Grid container spacing={1} item xs={12} className={classes.content}>
                    {paginatedMovies.map(movie => (
                        <Grid key={movie.id} item xs={12} md={6}>
                            <Paper elevation={3} square>
                                <MovieSearchDetails movie={movie}/>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                {pagination}
            </Grid>
        </div>
    )
}