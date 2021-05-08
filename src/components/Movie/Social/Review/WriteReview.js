import {Button, Grid, Icon, makeStyles, Paper} from "@material-ui/core";
import CustomModal from "../../../Layout/Modal/CustomModal";
import React, {useState} from "react";
import {Rating} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    '@global': {
        "textarea": {
            resize: "none",
            outline: "none",
            border: "1px solid",
            borderColor: theme.palette.primary.main,
            borderRadius: 4,
            padding: theme.spacing(1),
            width: "80%"
        },
        "textarea:focus, textarea:active": {
            borderColor: theme.palette.primary.main,
        }
    },
    root: {
        marginTop: theme.spacing(2)
    },
    paper: {
        textAlign: "center",
        backgroundColor: "#fff",
        maxWidth: '600px',
        padding: theme.spacing(3),
        margin: theme.spacing(3),
    },
    actions: {
        margin: theme.spacing(2),
    },
    characterCount: {
        fontWeight: 300,
        fontSize: 12
    }
}));

export default function WriteReview(props) {
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(3)
    const classes = useStyles();

    const getReviewData = () => {
        return {
            rating,
            description
        }
    }

    const addReview = () => {
        props.submit(getReviewData())
    }

    return (
        <div className={classes.root}>
            <CustomModal toggle={<Button color="primary">Write Review</Button>}>
                <Paper className={classes.paper}>
                    <h4>Write Review</h4>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Rating
                                onChange={e => setRating(e.target.value)}
                                icon={<Icon color="primary">star</Icon>}
                                emptyIcon={<Icon>star</Icon>}
                                defaultValue={3}
                                max={10}
                                name="Rating"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <textarea onChange={e => setDescription(e.target.value)} maxLength={300} rows={15}/>
                        </Grid>
                        <Grid container justify="center">
                            <span className={classes.characterCount}>{description.length}/300</span>
                        </Grid>
                        <Grid container justify="center" className={classes.actions}>
                            <Button type="submit" color="primary" size="small" onClick={addReview}>
                                Add Review
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </CustomModal>

        </div>
    )
}