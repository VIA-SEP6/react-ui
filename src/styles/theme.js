import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#006d77"
        },
        secondary: {
            main: "#83c5be"
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