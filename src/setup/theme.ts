import { createTheme, type SxProps, type Theme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: { textTransform: 'none' },
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: 'var(--mui-shape-border-radius)',
                    '&>input': { padding: 'calc(2 * var(--mui-spacing)) calc(1.5 * var(--mui-spacing)) var(--mui-spacing)' },
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: { '&.MuiInputLabel-shrink.MuiInputLabel-sizeSmall': { transform: 'translate(12px, 2px) scale(0.7)' } },
            }
        },
        MuiPaper: { defaultProps: { elevation: 0 } }
    },
    cssVariables: true,
    palette: {
        background: { default: '#0A0A0A', paper: '#1E1E1E' },
        divider: 'rgb(125 125 125)',
        primary: { main: '#8EE53F' },
        mode: 'dark',
    },
    shape: { borderRadius: 12 },
    typography: { fontFamily: `'Roboto Variable', sans-serif` },
});

// declare module '@mui/material-pigment-css' {
//     interface ThemeArgs {
//         theme: Theme;
//     }
// }


declare global {
    namespace React {
        interface HTMLAttributes<T> {
            sx?: | SxProps<Theme>;
        }
    }
}
