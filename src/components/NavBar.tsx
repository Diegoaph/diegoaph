import { themePalette } from "../config/theme.cofig";
import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Toolbar,
    styled,
    Modal,
} from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const HoverableH2 = styled("h2")({
    margin: "2px",
    marginTop: "5px",
    "&:hover": {
        textShadow: "0 0 2em #0f928c",
    },
    "@media (max-width: 400px)": {
        fontSize: "1rem",
    },
});
const StyledStack = styled("div")`
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    @media (max-width: 400px) {
        font-size: 1rem;
    }
`;

export const NavBar: React.FC<{}> = () => {
    const location = useLocation();
    const isProjectsPage = location.pathname === "/projects";
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const modalContent = (
        <div>
            <h4>Connect with me</h4>
            <p>
                <a
                    className="social"
                    href="https://github.com/Diegoaph"
                    target="blank">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/38/38401.png?w=360"
                        alt="github.com/diegoaph"
                        height="40"
                        width="40"
                        className="socialimg"
                    />
                </a>
                <a
                    className="social"
                    href="mailto:Dev.DiegoPacheco@gmail.com?subject=¡Hemos%20visto%20tu%20portfolio!&body=Hola%20Diego!,%20me%20gustar%C3%ADa%20hablar%20contigo"
                    target="blank">
                    <img
                        src="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97"
                        alt="Dev.DiegoPacheco@gmail.com"
                        height="40"
                        width="40"
                        className="socialimg"
                    />
                </a>
                <a
                    className="social"
                    href="https://wa.me/+573023449160"
                    target="blank">
                    <img
                        src="https://1000marcas.net/wp-content/uploads/2019/11/logotipo-Whatsapp.jpg"
                        alt="Whatsapp (+57)302-3449160"
                        height="40"
                        width="60"
                        className="socialimg"
                    />
                </a>
                <a
                    className="social"
                    href="https://linkedin.com/in/diegoaph"
                    target="blank">
                    <img
                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                        alt="linkedin.com/in/diegoaph"
                        height="30"
                        width="40"
                        className="socialimg"
                    />
                </a>
                <a
                    className="social"
                    href="https://t.me/pachecohdiego"
                    target="blank">
                    <img
                        src="https://store-images.s-microsoft.com/image/apps.12376.13537716651231321.3067a421-6c2f-48a9-b77c-1e38e19146e6.f539b24d-6328-4c00-9469-2d6d841667e6"
                        alt="Telegram @PachecoHDiego"
                        height="40"
                        width="40"
                        className="socialimg"
                    />
                </a>
                <a
                    className="social"
                    href="cven.pdf"
                    download="Diego-Pacheco-full-stack-resume"
                    target="blank">
                    <img
                        src="cv-icon.png"
                        alt="Resume Download"
                        height="40"
                        width="45"
                        className="socialimg"
                    />
                </a>
            </p>
        </div>
    );

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
                                        <img
                                            src="logodiego.png"
                                            alt="DevDiego"
                                            height="60"
                                            width="60"
                                            style={{
                                                marginRight: "1rem",
                                            }}
                                        />
                                        Dev.DiegoPacheco@Gmail.com
                                    </HoverableH2>
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <StyledStack>
                                    <a
                                        href="cven.pdf"
                                        download="Diego-Pacheco-full-stack-resume"
                                        target="blank">
                                        <Button variant="outlined">
                                            Download CV
                                        </Button>
                                    </a>{" "}
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
                                    <Button
                                        variant="contained"
                                        onClick={handleOpen}>
                                        Contact
                                    </Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-title"
                                        aria-describedby="modal-description">
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform:
                                                    "translate(-50%, -50%)",
                                                bgcolor: "background.paper",
                                                boxShadow: 24,
                                                p: 4,
                                                minWidth: "300px",
                                                outline: 0,
                                            }}>
                                            {modalContent}
                                        </Box>
                                    </Modal>
                                </StyledStack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
