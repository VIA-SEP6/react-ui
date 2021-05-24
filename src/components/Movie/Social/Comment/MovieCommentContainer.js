import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import MovieComment from "./MovieComment";
import WriteComment from "./WriteComment";
import {useDispatch} from "react-redux";
import {addComment} from "../../../../store/actions";

const useStyles = makeStyles(theme => ({
    root: {}
}));

export default function MovieCommentContainer(props) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const {movieId, currentUser} = props

    const submitComment = (comment, parent) => {
        dispatch(addComment(movieId, comment, parent))
    }

    return (
        <Grid className={classes.root} container justify="center" alignItems="center">
            <Grid item xs={11} md={7}>
                <WriteComment currentUser={currentUser} submit={submitComment}/>
            </Grid>
            <Grid item xs={12} md={7}>
                <MovieComment addComment={submitComment} movieId={movieId} currentUser={currentUser}/>
            </Grid>
        </Grid>
    )
}