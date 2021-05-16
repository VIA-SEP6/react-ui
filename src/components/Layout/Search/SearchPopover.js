import {makeStyles} from "@material-ui/core/styles";
import {Button, Popover, TextField, useMediaQuery, useTheme} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearMovies, searchMovie} from "../../../store/actions";
import MovieSearchDetails from "../../Movie/MovieSearchDetails";

const useStyles = makeStyles((theme) => ({
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
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const [timeout, initTimeout] = useState(0)

    const movies = useSelector(state => state.movie.movies);
    const dispatch = useDispatch();

    const matches = useMediaQuery(theme.breakpoints.up('md'));


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
    };

    useEffect(() => {
        if (!matches)
            handleClose()
    }, [matches])

    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <TextField onChange={handleSearch}/>
            <Popover
                className={classes.popover}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
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