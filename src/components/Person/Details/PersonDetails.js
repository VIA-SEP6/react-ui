import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const useStyles = makeStyles(theme => ({
    root: {},
    personName: {
        fontSize: 24,
    },
    subtitle: {
        fontWeight: 300,
        fontSize: 12,
        fontStyle: "italic",
        margin: theme.spacing(1, 0)
    },
    biography: {
        fontWeight: 300,
        fontSize: 12,
        textAlign: "justify"
    },
}));

export default function PersonDetails(props) {
    const classes = useStyles()

    const {details} = props

    const getBirthDate = () => {
        const birthDate = new Date(details.birthday)
        return birthDate ? `${birthDate.getDate()} ${monthNames[birthDate.getMonth()]} ${birthDate.getFullYear()}` : ""
    }

    return (
        <Grid container direction="column" alignItems="center">
            <div className={classes.personName}>
                {details.name}
            </div>
            <div className={classes.subtitle}>
                {details.known_for_department}
            </div>
            <div>
                <img src={details.profile_path} alt="Profile Image" width="250"/>
            </div>
            <div className={classes.subtitle}>
                {getBirthDate()}
            </div>
            <div className={classes.biography}>
                {details.biography}
            </div>
        </Grid>
    )
}