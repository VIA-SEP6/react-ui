import {CircularProgress, Popper, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {Autocomplete} from "@material-ui/lab";
import MovieSearchDetails from "./MovieSearchDetails";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {clearMovies, searchMovie} from "../../store/actions/index"
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    paper: {
      border: '1px solid',
      borderColor: theme.palette.primary.main
    },
    option: {
        margin: 0,
        padding: 0,
    },
    listBox: {
        padding: 0,
        maxHeight: '50vh'
    }
}))

export default function DesktopSearch(props) {
    const [open, setOpen] = useState(true);
    const [timeout, initTimeout] = useState(0)
    const movies = useSelector(state => state.movie.movies);

    const loading = open && movies.length === 0;
    const dispatch = useDispatch();
    const history = useHistory();


    const classes = useStyles()

    const handleSearch = (event) => {
        doSearch(event);
    }

    const doSearch = (event) => {
        const movieName = event.target.value;
        if (timeout) clearTimeout(timeout);
        initTimeout(setTimeout(() => {
            if (movieName) {
                dispatch(searchMovie(movieName))
            }
        }, 800));
    }

    const handleSelect = (event, value) => {
        if (value) {
            history.push(`/movie/${value.id}`)
        }
    }

    const handleClose = () => {
        setOpen(false)
        dispatch(clearMovies())
    }

    return (
        <div>
            <Autocomplete
                classes={{option: classes.option, listbox: classes.listBox, paper: classes.paper}}
                id="asynchronous-demo"
                size="small"
                style={{width: 400}}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={handleClose}
                onChange={handleSelect}
                getOptionSelected={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option.title}
                options={movies.slice(0,3)}
                loading={loading}
                loadingText="Search movie"
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
            />
        </div>
    )
}