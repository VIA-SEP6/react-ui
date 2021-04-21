import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#D7C3A4"
        },
        secondary: {
            main: "#EAE8DC"
        },
        tertiary: {
            main: "#E85A50"
        }
    },
    typography: {
        fontFamily: [
            '"Ubuntu"',
            'Roboto',
            'sans-serif',
        ].join(','),
    },
    overrides: {
        MuiButton: {
            root: {
                fontWeight: '400',
            },
        },
    },
})

export default theme