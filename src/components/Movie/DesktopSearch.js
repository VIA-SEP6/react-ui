import {CircularProgress, TextField} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {Autocomplete} from "@material-ui/lab";
import MovieSearchDetails from "./MovieSearchDetails";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {clearMovies, searchMovie} from "../../store/actions/index"

const useStyles = makeStyles(theme => ({
    paper: {
        margin: 0,
        padding: 0,
    }
}))

export default function DesktopSearch(props) {
    const [open, setOpen] = useState(false);
    const [timeout, initTimeout] = useState(0)
    const movies = useSelector(state => state.movie.movies);

    const loading = open && movies.length === 0;
    const dispatch = useDispatch();


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

        }
    }

    useEffect(() => {
        if (!open) {
            dispatch(clearMovies());
        }
    }, [open]);

    return (
        <div>
            <Autocomplete
                classes={{option: classes.paper}}
                id="asynchronous-demo"
                size="small"
                style={{width: 400}}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                onChange={handleSelect}
                getOptionSelected={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option.original_title}
                options={movies}
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
            />
        </div>
    )
}