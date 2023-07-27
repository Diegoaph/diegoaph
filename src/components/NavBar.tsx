import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";

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
                                <Typography fontWeight="bold">
                                    Dev.DiegoPacheco@Gmail.com
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Stack
                                    spacing={2}
                                    direction="row">
                                    <Button variant="outlined">Projects</Button>
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
