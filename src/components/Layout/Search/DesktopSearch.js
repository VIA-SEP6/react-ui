import {Button, CircularProgress, Paper, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {Autocomplete} from "@material-ui/lab";
import MovieSearchDetails from "../../Movie/MovieSearchDetails";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {clearMovies, searchMovie} from "../../../store/actions"
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    paper: {
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        marginTop: theme.spacing(1),
    },
    option: {
        margin: 0,
        padding: 0,
    },
    listBox: {
        padding: 0,
        maxHeight: '50vh',
        backgroundColor: theme.palette.tertiary.main
    }
}))


export default function DesktopSearch(props) {
    const [open, setOpen] = useState(false);
    const [timeout, initTimeout] = useState(0)
    const [searchMovieName, setSearchMovieName] = useState("")
    const movies = useSelector(state => state.movie.movies);
    const loading = useSelector(state => state.movie.loading);

    const dispatch = useDispatch();
    const history = useHistory();


    const classes = useStyles()

    const handleSearch = (event) => {
        const movieName = event.target.value;
        if (timeout) clearTimeout(timeout);
        initTimeout(setTimeout(() => {
            if (movieName) {
                dispatch(searchMovie(movieName))
            }
        }, 400));
    }

    const handleSelect = (event, value, reason) => {
        if (reason === "select-option")
            history.push(`/movie/${value.id}`)
        if (reason === "clear")
            dispatch(clearMovies())
    }

    const handleClose = () => {
        setOpen(false)
    }

    const PaperComponentCustom = options => {
        const {containerProps, children} = options;
        const history = useHistory();

        const handleShowAll = () => {
            history.push(`/search/${searchMovieName}`)
        }

        const showAllButton = movies.length === 0
            ? null
            : (<Button style={{fontWeight: 500}} size="small" color="primary" fullWidth onMouseDown={handleShowAll}>
                Show all results
            </Button>)

        return (
            <Paper {...containerProps} className={classes.paper}>
                {children}
                {showAllButton}
            </Paper>
        );
    };

    return (
        <div>
            <Autocomplete
                classes={{option: classes.option, listbox: classes.listBox}}
                id="asynchronous-demo"
                size="small"
                style={{width: 500}}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onInput={e => setSearchMovieName(e.target.value)}
                onClose={handleClose}
                onChange={handleSelect}
                getOptionSelected={() => true}
                getOptionLabel={(option) => option.title || ""}
                options={movies.slice(0, 3)}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search"
                        variant="outlined"
                        onChange={handleSearch}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
                renderOption={(movie) => {
                    return (
                        <MovieSearchDetails movie={movie}/>
                    )
                }}
                PaperComponent={PaperComponentCustom}
            />
        </div>
    )
}