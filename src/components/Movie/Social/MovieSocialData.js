import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import {useState} from "react";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import MovieComments from "./Comment/MovieComments";
import MovieReviewContainer from "./Review/MovieReviewContainer";
import HorizontalLine from "../../Layout/Seperator/HorizontalLine";
import {useSelector} from "react-redux";

const COMMENTS = "COMMENTS"
const REVIEWS = "REVIEWS"

const useStyles = makeStyles(theme => ({}));

export default function MovieSocialData(props) {
    const [socialComponentName, setSocialComponentName] = useState(COMMENTS)
    const classes = useStyles()
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
                    ? <MovieComments movieId={movieId} currentUser={currentUser}/>
                    : <MovieReviewContainer movieId={movieId} currentUser={currentUser}/>}
            </Grid>
        </Grid>

    )
}