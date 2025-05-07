import pigmentTheme from '@pigment-css/react/theme';
import { createTheme } from "@mui/material/styles";

import type { BaseTextFieldProps, ButtonBaseProps, ComponentsOverrides, FilledInputProps, SxProps, Theme } from "@mui/material";
import type { PickersDayClassKey, PickersFilledInputClassKey, PickersTextFieldClassKey } from "@mui/x-date-pickers-pro";

const palette = {
    background: { default: '#0A0A0A', paper: '#1E1E1E80' },
    divider: 'rgb(125 125 125)',
    primary: { main: '#8EE53F' },
    mode: 'dark',
} as const,
    blur = ['blur(0px)', 'blur(2px)', 'blur(4px)'] as const,
    shape = { borderRadius: '12px' } as const,
    spacing = 'var(--mui-spacing, 8px)' as const;

export var theme = ((theme?: Theme) => {
    theme = theme ?? createTheme({
        components: {
            MuiButton: {
                defaultProps: { variant: 'outlined' },
                styleOverrides: {
                    root: { textTransform: 'none', },
                    outlined: {
                        backgroundColor: `var(--mui-palette-background-paper, ${palette.background.paper})`,
                        boxShadow: '4px 4px 20px rgba(var(--mui-palette-primary-mainChannel, 142 229 63) / 0.15)',
                        backdropFilter: 'blur(4px)',
                    }
                }
            },

            MuiFilledInput: {
                defaultProps: { disableUnderline: true },
                styleOverrides: {
                    root: { borderRadius: `var(--mui-shape-borderRadius, ${shape.borderRadius})`, },
                    input: { '&:not(.MuiInputBase-inputMultiline)': { padding: `calc(.5px + ${spacing}) calc(2 * ${spacing})` }, },
                }
            },

            MuiInputLabel: {
                styleOverrides: {
                    filled: {
                        '&.MuiInputLabel-shrink.MuiInputLabel-sizeSmall': { transform: 'translate(12px, 2px) scale(0.7)' },
                        '&+.MuiFilledInput-root>input': { padding: `calc(2 * ${spacing}) calc(1.5 * ${spacing}) ${spacing}` },
                    },
                }
            },

            MuiPaper: {
                defaultProps: { elevation: 0 },
                styleOverrides: {
                    root: { backdropFilter: 'blur(4px)' },
                }
            },

            MuiPickersTextField: {
                defaultProps: { size: 'small', variant: 'filled' },
            },
            MuiPickersFilledInput: {
                defaultProps: { disableUnderline: true },
                styleOverrides: {
                    root: { borderRadius: `var(--mui-shape-borderRadius, ${shape.borderRadius})`, },
                    sectionsContainer: { padding: `calc(.5px + ${spacing}) calc(2 * ${spacing})`, paddingRight: 0 }
                },
            },
            MuiPickersDay: {
                styleOverrides: {
                    root: {
                        '&.Mui-selected.MuiDateRangePickerDay-day': { borderRadius: '50%' }
                    },
                }
            },

            MuiTextField: {
                defaultProps: { size: 'small', variant: 'filled' }
            }
        },
        cssVariables: true,
        palette,
        shape,
        typography: { fontFamily: `'Roboto Variable', sans-serif` },
        blur,
        unstable_sxConfig: {
            backdropFilter: {
                themeKey: 'blur',
            },
            btlr: {
                cssProperty: 'borderTopLeftRadius',
                themeKey: 'shape.borderRadius'
            },
        }
    });
    Object.values(theme.palette).forEach((color) => {
        if (!color?.main) return;

        Object.assign(color, { glass: `${color.main}80` })
    })
    Object.assign(pigmentTheme, theme);

    return theme;
})(theme);

declare module '@mui/material/styles' {
    interface ComponentNameToClassKey {
        MuiPickersFilledInput: PickersFilledInputClassKey
        MuiPickersTextField: PickersTextFieldClassKey
        MuiPickersDay: PickersDayClassKey
    }
    interface Components {
        MuiPickersTextField: {
            defaultProps?: Partial<BaseTextFieldProps>
            styleOverrides?: ComponentsOverrides<Theme>['MuiPickersTextField']
        }
        MuiPickersFilledInput: {
            defaultProps?: Partial<FilledInputProps>
            styleOverrides?: ComponentsOverrides<Theme>['MuiPickersFilledInput']
        }
        MuiPickersDay: {
            defaultProps?: Partial<ButtonBaseProps>
            styleOverrides?: ComponentsOverrides<Theme>['MuiPickersDay']
        }
    }

    interface PaletteColor {
        contrastTextChannel: string;
        darkChannel: string;
        glass: string;
        lightChannel: string;
        mainChannel: string;
    }

    interface Theme {
        blur: typeof blur;
        shape: typeof shape;
    }

    interface ThemeOptions {
        blur: typeof blur;
        shape: typeof shape;
    }
}

declare global {
    namespace React {
        interface HTMLAttributes<T> {
            sx?: | SxProps<Theme>;
        }
    }
}
