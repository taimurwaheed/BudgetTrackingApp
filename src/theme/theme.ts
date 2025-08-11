import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#7539FF',
        },
        secondary: {
            main: '#878A99',
        },
        background: {
            default: '#F5F7FA',
            paper: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 'bold',
                },
            },
        },
    },
});
