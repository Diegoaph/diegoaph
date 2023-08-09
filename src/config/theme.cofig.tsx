import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element;
};

export enum themePalette {
    BG = "#484848",
    DARK = "#006465",
    MID = "#0f928c",
    LIGHT = "#00c9d2",
    LIME = "#beee3b",
    FONT_GLOBAL = "ubuntu",
}
type CustomPalette = {
    background: {
        default: string;
    };
    primary: {
        main: string;
    };
};

declare module "@mui/material/styles" {
    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
}
const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.LIME,
        },
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    borderRadius: "2px",
                    fontWeight: "bolder",
                },
            },
        },
    },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
