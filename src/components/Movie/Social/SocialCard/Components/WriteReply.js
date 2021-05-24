import {makeStyles} from "@material-ui/core/styles";
import {Button, Icon, Paper} from "@material-ui/core";
import CustomModal from "../../../../Layout/Modal/CustomModal";
import React from "react";
import WriteComment from "../../Comment/WriteComment";

const useStyles = makeStyles(theme => ({
    root: {},
    paper: {
        margin: theme.spacing(2),
        paddingBottom: theme.spacing(1)
    }
}));

export default function WriteReply(props) {
    const classes = useStyles()

    const {addComment, currentUser} = props

    const handleCreateReply = (comment) => {
        addComment(comment)
    }

    const ReplyPaper = () => {
        return (
            <Paper elevation={8} className={classes.paper}>
                <WriteComment currentUser={currentUser} submit={handleCreateReply}/>
            </Paper>
        )
    }

    return (
        <CustomModal
            toggle={
                <Button color="primary" size="small">
                    Reply
                    <Icon fontSize="small">subdirectory_arrow_right</Icon>
                </Button>
            }
        >
            <ReplyPaper/>
        </CustomModal>
    )
}