import {Grid, makeStyles} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import {Pagination} from "@material-ui/lab";
import userApiService from "../../services/firebase/api/user";
import TopicHeader from "../Common/TopicHeader";

const ITEMS_PER_PAGE = 10

const useStyles = makeStyles(theme => ({
    content: {
        fontSize: 22,
    },
    movies: {
        display: "flex",
        [theme.breakpoints.down('xs')]: {
            justifyContent: "center",
        },
    },
    tile: {
        marginBottom: theme.spacing(1),
        maxWidth: 210
    },
    pagination: {
        paddingTop: 20
    },
}))

const FavoriteMovies = (props) => {
    const {favoriteMovies, refreshProfile} = props
    const classes = useStyles()
    const [pages, setPages] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)
    const [paginatedMovies, setPaginatedMovies] = useState([])

    const handlePageChange = (event, page) => {
        setPageNumber(page)
    }

    const getNumber = (index) => {
        return index + 1 + (pageNumber - 1) * 10
    }

    const removeFavorite = (movieId) => {
        userApiService.removeMovieFromFavourites(`${movieId}`).then(res => {
                console.log("response", res)
                refreshProfile()
            }
        )
    }

    useEffect(() => {
        setPages(Math.ceil(favoriteMovies.length / ITEMS_PER_PAGE))
        setPaginatedMovies(favoriteMovies.slice((pageNumber - 1) * ITEMS_PER_PAGE, pageNumber * ITEMS_PER_PAGE))
    }, [favoriteMovies, pageNumber])

    const getGridListCols = () => {
        if (isWidthUp('lg', props.width) && paginatedMovies.length >= 5) {
            return 5;
        }

        if (isWidthUp('md', props.width) && paginatedMovies.length >= 3) {
            return 3;
        }

        if (isWidthUp('sm', props.width) && paginatedMovies.length >= 2) {
            return 2;
        }

        return 1;
    }

    let pagination = null

    if (pages > 0)
        pagination = (
            <Grid className={classes.pagination} container item xs={12} justify="center">
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
        <div className={classes.content}>
            <TopicHeader>Favorite Movies</TopicHeader>
            <GridList className={classes.movies} cellHeight={350} spacing={4} cols={getGridListCols()}>
                {paginatedMovies.map((favMovie, index) => (
                    <GridListTile key={favMovie.id} className={classes.tile}>
                        <MovieCard removeFavorite={removeFavorite} className={classes.tile} favoriteMovie={favMovie}
                                   number={getNumber(index)}/>
                    </GridListTile>
                ))}
            </GridList>
            {pagination}
        </div>
    )
}

export default withWidth()(FavoriteMovies)