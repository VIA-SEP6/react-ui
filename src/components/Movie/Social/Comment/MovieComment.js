import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import movieApiService from "../../../../services/firebase/api/movie";
import firestoreReferenceService from "../../../../services/firebase/firestore/references";
import SocialCard from "../SocialCard/SocialCard";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2, 0)
    },
}))

export default function MovieComment(props) {
    const [comments, setComments] = useState([])
    const classes = useStyles()

    const {movieId, currentUser} = props

    const handleLike = (commentId) => {
        movieApiService.likeComment(commentId)
    }

    const handleDislike = (commentId) => {
        movieApiService.dislikeComment(commentId)
    }

    const handleClearReaction = (commentId) => {
        movieApiService.clearCommentReaction(commentId)
    }

    useEffect(() => {
        firestoreReferenceService
            .getCommentsByMovieIdReference(movieId)
            .onSnapshot(
                snapshot => {
                    setComments([])
                    snapshot.forEach(document => {
                        if (document.exists) {
                            const commentObject = {
                                id: document.id, ...document.data(),
                            }
                            setComments(comments => [...comments, commentObject])
                        }

                    })
                },
                error => {
                    console.log(error.message)
                })
    }, [setComments, movieId])

    return (
        <div className={classes.root}>
            {comments.map(comment => (
                <SocialCard
                    key={comment.id}
                    type="comment"
                    isDislike={comment.dislikes?.includes(currentUser.uid)}
                    dislikes={comment.dislikes?.length}
                    isLike={comment.likes?.includes(currentUser.uid)}
                    likes={comment.likes?.length}
                    handleLike={() => handleLike(comment.id)}
                    handleDislike={() => handleDislike(comment.id)}
                    handleClearReaction={() => handleClearReaction(comment.id)}
                    avatarSrc={comment.user?.profilePhotoUrl}
                    username={comment.user?.username}
                    userId={comment.userId}
                    description={comment.content}
                    postDate={comment.timestamp?.toDate()}
                />
            ))}
        </div>

    )
}