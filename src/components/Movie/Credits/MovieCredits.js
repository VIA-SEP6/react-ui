import PersonDetail from "./PersonDetails";
import React, {createRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import ScrollButton from "./ScrollButton";
import {TabContext, TabPanel} from "@material-ui/lab";
import {Icon, Tab, Tabs} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    column: {
        display: "flex",
        flexDirection: "column"
    },
    credits: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: "4px"
    },
    creditsContent: {
        maxHeight: "585px",
        overflowY: "hidden",
        textAlign: "center"
    },
    scrollUp: {
        position: "absolute",
        textAlign: "center",
        top: 0
    },
    scrollDown: {
        position: "absolute",
        textAlign: "center",
        bottom: 0
    },
    tabPanel: {
        padding: theme.spacing(2, 0),
    }
}))

export default function MovieCredits(props) {
    const [ref, setRef] = useState(createRef())
    const cast = props.movie.credits.cast
    const crew = props.movie.credits.crew


    const classes = useStyles()

    const scrollUp = () => {
        ref.scrollBy({
            top: -400,
            left: 0,
            behavior: 'smooth'
        })
    }

    const scrollDown = () => {
        ref.scrollBy({
            top: 400,
            left: 0,
            behavior: 'smooth'
        })
    }

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={classes.column}>
            <div>
                <TabContext value={value}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Cast" value="1"/>
                        <Tab label="Crew" value="2"/>
                    </Tabs>
                    <TabPanel className={classes.tabPanel} value="1">
                        <div className={classes.credits}>
                            <ScrollButton onClick={scrollUp}><Icon>expand_less</Icon></ScrollButton>
                            <div className={classes.creditsContent} ref={(reference) => setRef(reference)}>
                                {cast.map(cast =>
                                    <PersonDetail
                                        key={cast.id}
                                        imgSrc={process.env.REACT_APP_TMDB_IMG_API_BASE + cast.profile_path}
                                        title={cast.name}
                                        subtitle={cast.character}
                                    />)
                                }
                            </div>
                            <ScrollButton onClick={scrollDown} type="bottom"><Icon>expand_more</Icon></ScrollButton>
                        </div>
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value="2">
                        <div className={classes.credits}>
                            <ScrollButton onClick={scrollUp}><Icon>expand_less</Icon></ScrollButton>
                            <div className={classes.creditsContent} ref={(reference) => setRef(reference)}>
                                {crew.map(cast =>
                                    <PersonDetail
                                        key={cast.id + cast.job}
                                        imgSrc={process.env.REACT_APP_TMDB_IMG_API_BASE + cast.profile_path}
                                        title={cast.name}
                                        subtitle={cast.job}
                                    />)
                                }
                            </div>
                            <ScrollButton onClick={scrollDown} type="bottom"><Icon>expand_more</Icon></ScrollButton>
                        </div>
                    </TabPanel>
                </TabContext>
            </div>
        </div>

    )
}