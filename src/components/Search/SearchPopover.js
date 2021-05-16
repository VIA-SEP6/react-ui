import {makeStyles} from "@material-ui/core/styles";
import {Button, CircularProgress, InputAdornment, Popover, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearMovies, searchMovie} from "../../store/actions";
import MovieSearchDetails from "../Movie/MovieSearchDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500
    },
    popover: {
        marginTop: theme.spacing(2)
    },
    searchResult: {
        width: 600,
    },
    showAll: {
        fontWeight: 500,
        textAlign: "center"
    }
}));

export default function SearchPopover(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [timeout, initTimeout] = useState(0)

    const movies = useSelector(state => state.movie.movies);
    const loading = useSelector(state => state.movie.loading);
    const dispatch = useDispatch();

    const open = movies.length > 0;

    const handleSearch = (event) => {
        setAnchorEl(event.currentTarget);
        const movieName = event.target.value;
        if (timeout) clearTimeout(timeout);
        initTimeout(setTimeout(() => {
            if (movieName) {
                dispatch(searchMovie(movieName))
            }
        }, 600));
    }

    const handleClose = () => {
        dispatch(clearMovies())
        setAnchorEl(null);
    }

    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.root}>
            <TextField
                fullWidth
                size="small"
                onChange={handleSearch}
                label="Search a movie"
                variant="outlined"
                InputProps={{
                    endAdornment: loading
                        ? (
                            <InputAdornment position="end">
                                <CircularProgress color="primary" size={20}/>
                            </InputAdornment>
                        ) : null,
                }}
            />
            <Popover
                className={classes.popover}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div className={classes.searchResult}>
                    {movies.slice(0, 3).map(movie => (
                        <MovieSearchDetails movie={movie} key={movie.id}/>
                    ))}
                    <div className={classes.showAll}>
                        <Button style={{fontWeight: 500}} variant="text" color="primary" size="small">Show all
                            results</Button>
                    </div>
                </div>
            </Popover>
        </div>
    )
}