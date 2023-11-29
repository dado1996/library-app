import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        background: '#ccc',
        primary: {
            main: '#063549',
            contrastText: '#fff',
        },
        secondary: {
            main: '#508991',
            contrastText: '#fff',
        },
        error: {
            main: '#d32f2f',
        },
        warning: {
            main: '#ffa726',
        },
        info: {
            main: '#333',
        },
        success: {
            main: '#388e3c'
        },
        terciary: {
            main: '#B65FC4',
        },
    },
    typography: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        fontSize: 16,
    }
});

export default theme;