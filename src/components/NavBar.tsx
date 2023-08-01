import { themePalette } from "../config/theme.cofig";
import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Toolbar,
    styled,
} from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const HoverableH2 = styled("h2")({
    "&:hover": {
        textShadow: "0 0 2em #0f928c",
    },
});

export const NavBar: React.FC<{}> = () => {
    const location = useLocation();
    const isProjectsPage = location.pathname === "/projects";

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Grid item>
                                <NavLink
                                    to="mailto:Dev.DiegoPacheco@gmail.com?subject=¡¡Hemos%20visto%20tu%20portfolio!!&body=%20Diego,%20Me%20gustar%C3%ADa%20hablar%20contigo"
                                    style={{
                                        textDecoration: "none",
                                        color: themePalette.MID,
                                    }}>
                                    <HoverableH2>
                                        Dev.DiegoPacheco@Gmail.com
                                    </HoverableH2>
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <Stack
                                    spacing={2}
                                    direction="row">
                                    <NavLink
                                        to={isProjectsPage ? "/" : "/projects"}
                                        style={{
                                            textDecoration: "none",
                                            color: themePalette.MID,
                                        }}>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                color: themePalette.LIGHT,
                                                borderColor: themePalette.MID,
                                                "&:hover": {
                                                    backgroundColor:
                                                        themePalette.DARK,
                                                    borderColor:
                                                        themePalette.MID,
                                                    boxShadow:
                                                        themePalette.LIGHT,
                                                },
                                            }}>
                                            {isProjectsPage
                                                ? "Home"
                                                : "Projects"}
                                        </Button>
                                    </NavLink>
                                    <NavLink
                                        to="mailto:Dev.DiegoPacheco@gmail.com?subject=¡¡Hemos%20visto%20tu%20portfolio!!&body=%20Diego,%20Me%20gustar%C3%ADa%20hablar%20contigo"
                                        style={{
                                            textDecoration: "none",
                                            color: themePalette.MID,
                                        }}>
                                        <Button variant="contained">
                                            Contact
                                        </Button>
                                    </NavLink>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
