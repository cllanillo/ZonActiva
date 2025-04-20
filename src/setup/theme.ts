import type { SxProps, Theme } from "@mui/material";
import { createTheme, } from "@mui/material";

export const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: { main: "#8ee53f" },
        mode: "dark",
    },
    shape: { borderRadius: 12 },
    typography: { fontFamily: "'Roboto Variable', sans-serif" }
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
