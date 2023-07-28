import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Landing: React.FC<{}> = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="xl">
                <Grid
                    container
                    direction="column"
                    spacing={19}
                    justifyContent="space-between">
                    <Grid item>
                        <Typography fontWeight="bold">
                            Dev.DiegoPacheco@Gmail.com
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontWeight="bold">
                            Dev.DiegoPacheco@Gmail.com
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontWeight="bold">
                            Dev.DiegoPacheco@Gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Landing;
