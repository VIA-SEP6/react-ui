import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import MovieComment from "./MovieComment";
import WriteComment from "./WriteComment";
import movieApiService from "../../../../services/firebase/api/movie";

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

export default function MovieCommentContainer(props) {
    const classes = useStyles()

    const {movieId, currentUser} = props

    const addComment = (comment) => {
        console.log(movieId)
        movieApiService.addComment(movieId, comment)
    }

    return (
        <Grid className={classes.root} container justify="center" alignItems="center">
            <Grid item xs={11} md={7}>
                <WriteComment currentUser={currentUser} submit={addComment}/>
            </Grid>
            <Grid item xs={12} md={7}>
                <MovieComment movieId={movieId} currentUser={currentUser}/>
            </Grid>
        </Grid>
    )
}