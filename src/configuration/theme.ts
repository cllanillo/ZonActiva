import { createTheme, type SxProps, type Theme } from "@mui/material";

const palette = {
    background: { default: '#0A0A0A', paper: '#1E1E1E' },
    divider: 'rgb(125 125 125)',
    primary: { main: '#8EE53F' },
    mode: 'dark',
} as const,
    shape = { borderRadius: 12 } as const,
    spacing = 'var(--mui-spacing, 8)' as const;

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    '&.MuiButton-outlined': {
                        backgroundColor: `var(--mui-palette-background-paper, ${palette.background.paper})`,
                        boxShadow: '4px 4px 20px rgba(var(--mui-palette-primary-mainChannel, 142 229 63) / 0.35)',
                    }
                },
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: `var(--mui-shape-border-radius, ${shape.borderRadius})`,
                    '&>input': { padding: `calc(2 * ${spacing}) calc(1.5 * ${spacing}) ${spacing}` },
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
    palette,
    shape,
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
