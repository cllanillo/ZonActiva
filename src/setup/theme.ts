import { createTheme, type SxProps, type Theme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: { '&.MuiInputLabel-sizeSmall': { transform: 'translate(12px, 2px) scale(0.75)' } },
            }
        },
        // MuiTypography: { styleOverrides: { root: {  } } }
    },
    cssVariables: true,
    palette: {
        background: { default: '#0A0A0A', paper: '#1E1E1E' },
        divider: 'rgb(125 125 125)',
        primary: { main: '#8EE53F' },
        mode: 'dark',
    },
    shape: { borderRadius: 12 },
    typography: { allVariants: { fontFamily: `'Roboto Variable', sans-serif` }, fontFamily: `'Roboto Variable', sans-serif` },
});

declare module '@mui/material-pigment-css' {
    interface ThemeArgs {
        theme: Theme;
    }
}


declare global {
    namespace React {
        interface HTMLAttributes<T> {
            sx?: | SxProps<Theme>;
        }
    }
}
