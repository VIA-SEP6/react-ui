import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#68b0ab",
            chartColor: "rgba(104,176,171, 0.2)",
            chartBorder: "rgba(104,176,171, 1)",
            chartHover: "rgba(104,176,171, 0.5)",
        },
        secondary: {
            main: "#edf6f9"
        },
        tertiary: {
            main: "#FFFBFB"
        },
        black: {
            main: "#000"
        },
        gray: {
            main: "#828282",
            darker: "#757575"
        },
        yellow: {
            main: "#ffaa00",
            chartColor: "rgba(255, 170, 0, 0.2)",
            chartBorder: "rgba(255, 170, 0, 1)",
            chartHover: "rgba(255, 170, 0, 0.5)",
        },
        red: {
            chartColor: ["rgba(229, 61, 0, 0.2)"],
            chartBorder: ["rgba(229, 61, 0, 1)"],
            chartHover: ["rgba(229, 61, 0, 0.5)"],
        },
    },
    typography: {
        fontFamily: [
            '"Raleway"',
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