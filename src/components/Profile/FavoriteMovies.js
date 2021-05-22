import {makeStyles} from "@material-ui/core";
import ScrollButton from "../Movie/Credits/ScrollButton";
import React, {createRef, useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import MovieCard from "./MovieCard"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import {Pagination} from "@material-ui/lab";

const ITEMS_PER_PAGE = 10

const useStyles = makeStyles(theme => ({
    content: {
        fontSize: 22,
        textAlign: "center",
        alignItems: "center",
    },
    movies: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        flexWrap: 'nowrap',
    },
    title: {
        paddingBottom: 25
    },
}))

const ProfileData = (props) => {
    const {favoriteMovies} = props
    const classes = useStyles()
    const [pages, setPages] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)
    const [paginatedMovies, setPaginatedMovies] = useState([])

    const handlePageChange = (event, page) => {
        console.log(page)
        setPageNumber(page)
    }

    useEffect(() => {
        setPages(Math.ceil(favoriteMovies.length / ITEMS_PER_PAGE))
        setPaginatedMovies(favoriteMovies.slice((pageNumber - 1) * ITEMS_PER_PAGE, pageNumber * ITEMS_PER_PAGE))
    }, [favoriteMovies, pageNumber])

    const getGridListCols = () => {  
        if (isWidthUp('lg', props.width) && paginatedMovies.length>=5) {
          return 5;
        }
    
        if (isWidthUp('md', props.width) && paginatedMovies.length>=3) {
          return 3;
        }
        
        if (isWidthUp('sm', props.width) && paginatedMovies.length>=2) {
            return 2;
        }
    
        return 1;
    }

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
        <div className={classes.content}>
            <div className={classes.title}>Favorite Movies</div>
            <div className={classes.movies}>
                <GridList cellHeight={350}  spacing={4} cols={getGridListCols()}>
                {paginatedMovies.map((favMovie, index) => (
                    <GridListTile className={classes.tile} >
                        <MovieCard className={classes.tile} favoriteMovie={favMovie} number={index+1}></MovieCard>
                    </GridListTile>
                ))}
                </GridList>
            </div>
            {pagination}
        </div>
    )
}

export default withWidth()(ProfileData)