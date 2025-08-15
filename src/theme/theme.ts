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
        // Overrides for TextField component
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiFilledInput-root": {
                        borderRadius: 8, // Set a default border radius for filled text fields
                    },
                },
            },
        },
        // Overrides for Button component
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none', // Prevents uppercase text
                    fontWeight: 'bold',
                },
            },
        },
        // Overrides for Checkbox component
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#7539FF', // Use primary color for the checkbox
                },
            },
        },
        // Overrides for FormControlLabel component
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    fontSize: "0.875rem",
                },
            },
        },
        // Overrides for Link component
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#8B5CF6',
                },
            },
        },
        // Overrides for Typography component
        MuiTypography: {
            styleOverrides: {
                h4: {
                    fontWeight: 'bold',
                },
                h5: {
                    fontWeight: 'bold',
                },
            },
        },
    },
});