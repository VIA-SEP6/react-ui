import {Grid} from "@material-ui/core";
import {useState} from "react";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import MovieReviewContainer from "./Review/MovieReviewContainer";
import HorizontalLine from "../../Layout/Seperator/HorizontalLine";
import {useSelector} from "react-redux";
import MovieCommentContainer from "./Comment/MovieCommentContainer";

const COMMENTS = "COMMENTS"
const REVIEWS = "REVIEWS"

export default function MovieSocialData(props) {
    const [socialComponentName, setSocialComponentName] = useState(COMMENTS)
    const currentUser = useSelector(state => state.auth.user);

    const {movieId} = props

    const handleComponentChange = (event, newComponent) => {
        setSocialComponentName(newComponent)
    }

    return (
        <Grid container justify="center" alignItems="center" direction="column">
            <HorizontalLine/>
            <ToggleButtonGroup
                value={socialComponentName}
                exclusive
                onChange={handleComponentChange}
            >
                <ToggleButton value={COMMENTS}>
                    Comments
                </ToggleButton>
                <ToggleButton value={REVIEWS}>
                    Reviews
                </ToggleButton>
            </ToggleButtonGroup>
            <Grid container>
                {socialComponentName === COMMENTS
                    ? <MovieCommentContainer movieId={movieId} currentUser={currentUser}/>
                    : <MovieReviewContainer movieId={movieId} currentUser={currentUser}/>}
            </Grid>
        </Grid>

    )
}