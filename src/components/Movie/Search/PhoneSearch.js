import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import SearchIcon from "@material-ui/icons/Search";
import {AppBar, Grid, TextField, Toolbar} from "@material-ui/core";
import {clearMovies, searchMovie} from "../../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import MovieSearchDetails from "../MovieSearchDetails";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
    input: {
        margin: theme.spacing(2, 0),
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PhoneSearch(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [timeout, initTimeout] = useState(0)

    const movies = useSelector(state => state.movie.movies);

    const loading = open && movies.length === 0;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(clearMovies())
    };

    const handleSearch = (event) => {
        const movieName = event.target.value;
        if (timeout) clearTimeout(timeout);
        initTimeout(setTimeout(() => {
            if (movieName) {
                dispatch(searchMovie(movieName))
            }
        }, 400));
    }

    const handleSelect = (movieId) => {
            handleClose()
            history.push(`/movie/${movieId}`)
    }

    return (
        <div className={classes.root}>
            <IconButton onClick={handleClickOpen}>
                <SearchIcon/>
            </IconButton>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar elevation={5} className={classes.appBar}>
                    <Toolbar>
                        <TextField color="primary" label="Search for the movie" onChange={handleSearch} className={classes.input}
                                   variant="outlined" fullWidth/>
                        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {movies.map(movie => (
                    <div key={movie.id} onClick={() => handleSelect(movie.id)}>
                        <MovieSearchDetails movie={movie}/>
                    </div>
                ))}
            </Dialog>
        </div>
    )
}