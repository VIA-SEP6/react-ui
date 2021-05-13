import React, {Component} from "react";
import personApiService from "../services/firebase/api/person";
import {Grid} from "@material-ui/core";
import PersonDetails from "../components/Person/Details/PersonDetails";
import Spinner from "../components/Layout/Loader/Spinner";
import KnownForMovies from "../components/Person/KnownFor/KnownForMovies";

class Person extends Component {
    initialState = {
        details: {},
        detailsLoading: true,
    }

    state = {
        ...this.initialState
    }

    init() {
        this.fetchPersonDetails(this.getSelectedPersonId());
    }

    fetchPersonDetails(id) {
        this.setState(this.initialState)
        personApiService.fetchPersonDetails(id)
            .then(details => {
                this.setState({
                    details,
                    detailsLoading: false
                })
            })
    }

    componentDidMount() {
        this.init()
    }

    componentDidUpdate = (prevProps) => {
        if (this.getSelectedPersonId() !== prevProps.match.params.id) {
            this.init()
        }
    };

    getSelectedPersonId() {
        return this.props.match.params.id
    }

    render() {
        const {details, detailsLoading} = this.state

        let content = (
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                    <PersonDetails details={details}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container direction="column" alignItems="center">
                        <div>
                            Crew and Cast statistics
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" justify="center">
                        <KnownForMovies movies={details.movie_credits}/>
                    </Grid>
                </Grid>
            </Grid>
        )

        if (detailsLoading)
            content = (
                <Spinner/>
            )

        return (
            <div style={{width: "100%"}}>{content}</div>
        )
    }
}

export default Person