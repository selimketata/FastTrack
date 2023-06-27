import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Routing from "../Routing/Routing"

const theme = createMuiTheme({
    palette: {
        black: {
            main: '#222831'
        },
        grey: {
            main: '#393E46'
        },
        blue: {
            main: '#00ADB5'
        },
        white: {
            main: '#EEEEEE'
        },
        red: {
            main: '#E23E57'
        },
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif" //'Abril Fatface'
    }
})

function Theme() {
    return (
        <ThemeProvider theme={theme}>
            <Routing />
        </ThemeProvider>
    );
}

export default Theme;


