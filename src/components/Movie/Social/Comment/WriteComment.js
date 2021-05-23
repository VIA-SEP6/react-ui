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
    },
    textArea: {
        margin: theme.spacing(0, 5)
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
            event.preventDefault()
            handleSubmit()
        }
    }

    return (
        <Grid className={classes.root} container justify="center" alignItems="center" direction="row">
            <Grid container alignItems="center">
                <UserAvatar src={currentUser.photoURL}/>
                <div className={classes.username}>
                    {currentUser.displayName}
                </div>
            </Grid>
            <Grid container>
                <Grid container className={classes.textArea}>
                    <TextareaAutosize value={comment} onKeyDown={handleSubmitOnEnter} onChange={e => setComment(e.target.value)} placeholder="Write a comment" rows={6}/>
                </Grid>
                <Grid container justify="center" className={classes.submitButton}>
                    <Button disabled={comment.trim() === ""} onClick={handleSubmit} type="submit" color="primary">Add Comment</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}