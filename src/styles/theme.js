import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#68b0ab"
        },
        secondary: {
            main: "#faf3dd"
        },
        tertiary: {
            main: "#edf6f9"
        },
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