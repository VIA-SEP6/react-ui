import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, TextareaAutosize} from "@material-ui/core";
import UserAvatar from "../../../User/UserAvatar";
import {useState} from "react";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2)
    },
    username: {
        fontSize: 14,
    },
    submitButton: {
        fontSize: 14,
        marginTop: theme.spacing(1)
    }
}));

export default function WriteComment(props) {
    const [comment, setComment] = useState("");
    const classes = useStyles()

    const {currentUser, submit} = props

    const handleSubmit = () => {
        submit(comment)
        setComment("")
    }

    const handleSubmitOnEnter = (event) => {
        if (event.keyCode === 13) {
            handleSubmit()
        }
    }

    return (
        <Grid className={classes.root} container justify="center" alignItems="center" direction="row">
            <Grid item xs={2} md={1}>
                <UserAvatar src={currentUser.photoURL}/>
            </Grid>
            <Grid xs={10} md={11} item className={classes.username}>
                {currentUser.displayName}
            </Grid>
            <Grid item xs={10} md={11}>
                    <Grid xs={12} item container>
                        <TextareaAutosize value={comment} onKeyDown={handleSubmitOnEnter} onChange={e => setComment(e.target.value)} placeholder="Write a comment" rows={4}/>
                    </Grid>
                    <Grid xs={12} item container justify="center" className={classes.submitButton}>
                        <Button disabled={comment.trim() === ""} onClick={handleSubmit} color="primary">Add Comment</Button>
                    </Grid>
            </Grid>

        </Grid>
    )
}