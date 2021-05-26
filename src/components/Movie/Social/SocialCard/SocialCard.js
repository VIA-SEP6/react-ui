import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid} from "@material-ui/core";
import UserData from "./Components/UserData";
import Rating from "./Components/Rating";
import Description from "./Components/Description";
import Likes from "../Likes";
import {formatDateTime} from "../../../../services/util/dateConverter";
import WriteReply from "./Components/WriteReply";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    reply: {
        marginLeft: theme.spacing(5),
    },
    overflow: {
        [theme.breakpoints.down('sm')]: {
            overflow: "auto"
        },
    },
    likesRight: {
        marginLeft: 'auto'
    },
    replies: {
        padding: theme.spacing(0, 1)
    }
}));

export default function SocialCard(props) {
    const [replies, setReplies] = useState([])
    const [open, setOpen] = useState(false)
    const classes = useStyles()

    const {
        id,
        type, // "review" | "comment" | "external-review"
        isDislike,
        dislikes,
        isLike,
        likes,
        handleLike,
        handleDislike,
        handleClearReaction,
        avatarSrc,
        username,
        userId,
        description,
        postDate,
        rating,
        reply = false,
        getReplies = () => {
        },
        currentUser,
        addComment,
        disabled
    } = props

    const handleLoadReplies = () => {
        setOpen(open => !open)
    }

    useEffect(() => {
        if (type === "comment")
            setReplies(getReplies(id) || [])
    }, [setReplies, id, getReplies, type])

    const renderLikes = (
        <Grid item xs={type === "comment" ? 6 : 12} sm={4} className={type === "comment" ? classes.likesRight : null}>
            <Likes
                isDislike={isDislike}
                dislikes={dislikes}
                isLike={isLike}
                likes={likes}
                onLike={handleLike}
                onDislike={handleDislike}
                onClear={handleClearReaction}
            />
        </Grid>
    )

    const renderRating = (
        <Grid item xs={6} sm={4}>
            <Rating rating={rating}/>
        </Grid>
    )

    const renderReplies = (
        <Grid item xs={12}>
            {replies.map(reply => (
                <SocialCard
                    key={reply.id}
                    id={reply.id}
                    currentUser={currentUser}
                    type="comment"
                    reply
                    isDislike={reply.dislikes?.includes(currentUser.uid)}
                    dislikes={reply.dislikes?.length}
                    isLike={reply.likes?.includes(currentUser.uid)}
                    likes={reply.likes?.length}
                    handleLike={(id) => handleLike(id || reply.id)}
                    handleDislike={(id) => handleDislike(id || reply.id)}
                    handleClearReaction={(id) => handleClearReaction(id || reply.id)}
                    avatarSrc={reply.user?.profilePhotoUrl}
                    username={reply.user?.userName}
                    userId={reply.userId}
                    description={reply.content}
                    postDate={reply.timestamp?.toDate()}
                    getReplies={getReplies}
                    addComment={(text, parent) => addComment(text, parent || reply.id)}
                />
            ))}
        </Grid>

    )

    const renderRepliesOptions = (
        <Grid className={classes.replies} container justify="space-between" alignItems="center">
            <Grid item>
                {replies.length === 0
                    ? null
                    : (
                        <Button color="primary" size="small" onClick={handleLoadReplies}>replies
                            ({replies.length})</Button>
                    )
                }
            </Grid>

            <Grid item>
                <WriteReply addComment={addComment} currentUser={currentUser}/>
            </Grid>
        </Grid>
    )

    return (
        <Grid container item xs={12} alignItems="center"
              className={`${classes.root} ${reply ? classes.reply : classes.overflow}`}>
            <Grid item xs={6} sm={4}>
                <UserData avatarSrc={avatarSrc} username={username} postDate={formatDateTime(postDate)}
                          userId={userId} disabled={disabled}/>
            </Grid>
            {type !== "comment" ? renderRating : null}
            {type !== "external-review" ? renderLikes : null}
            <Grid item xs={12}>
                <Description text={description}/>
            </Grid>
            {type === "comment" ? renderRepliesOptions : null}
            {open ? renderReplies : null}
        </Grid>
    )
}