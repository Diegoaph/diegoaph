import { themePalette } from "../config/theme.cofig";
import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const HoverableSpan = styled("span")({
    "&:hover": {
        textShadow: "0 0 2em #0f928c",
    },
});

export const NavBar: React.FC<{}> = () => {
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
                                    <Typography fontWeight="bold">
                                        <HoverableSpan>
                                            Dev.DiegoPacheco@Gmail.com
                                        </HoverableSpan>
                                    </Typography>
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <Stack
                                    spacing={2}
                                    direction="row">
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: themePalette.LIGHT,
                                            borderColor: themePalette.MID,
                                            "&:hover": {
                                                backgroundColor:
                                                    themePalette.DARK,
                                                borderColor: themePalette.MID,
                                                boxShadow: themePalette.LIGHT,
                                            },
                                        }}>
                                        Projects
                                    </Button>
                                    <Button variant="contained">Contact</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
