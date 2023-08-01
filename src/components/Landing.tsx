import React from "react";
import { themePalette } from "../config/theme.cofig";
import { Box, Container, Grid, styled } from "@mui/material";
import "./Landing.css";
import Gallery from "./Gallery";

const Header1 = styled("h1")({ fontSize: "3rem", marginBottom: "0.1em" });
const Header2 = styled("h2")({ fontSize: "2rem" });
enum pics {
    API = "api.jpg",
    CSS = "css.jpg",
    JS = "javascript.jpg",
    TS = "typescript.jpg",
    VITE = "vite.svg",
    MUI = "material-ui.jpg",
    REACT = "react.jpg",
    RX = "redux.jpg",
    RTK = "reduxTK.jpg",
    FB = "firebase.jpg",
    NODE = "node.jpg",
    EX = "express.jpg",
    PG = "postgresql.jpg",
    MDB = "mongodb.jpg",
    GIT = "git.jpg",
    GH = "github.jpg",
}
const Landing: React.FC<{}> = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header1
                className="h1"
                style={{
                    color: themePalette.LIGHT,
                    marginTop: "4.5rem",
                }}>
                Check out my latest projects! ↗
            </Header1>{" "}
            <Container maxWidth="xl">
                <Grid
                    container
                    direction="column"
                    spacing={5}
                    justifyContent="space-between">
                    <Grid item>
                        <Gallery />
                    </Grid>
                    <Grid item>
                        <Header2
                            className="h1"
                            style={{
                                color: themePalette.LIGHT,
                                marginTop: "0rem",
                            }}>
                            Tools and technologies
                        </Header2>
                        <Header2
                            className="h1"
                            style={{
                                color: themePalette.LIGHT,
                                marginTop: "0rem",
                            }}>
                            that i've used on my projects:
                        </Header2>
                        <span className="tech-container">
                            {Object.values(pics).map((tech, index) => (
                                <div>
                                    <img
                                        key={index}
                                        src={tech}
                                        alt={tech}
                                        height="80"
                                        width="80"
                                        style={{
                                            borderRadius: "5px",
                                            margin: "3px",
                                        }}
                                    />
                                    <p className="word">{`${tech.slice(
                                        0,
                                        -4
                                    )}`}</p>
                                </div>
                            ))}
                        </span>
                    </Grid>
                    <Grid item>
                        <Header2
                            className="h1"
                            style={{
                                color: themePalette.LIGHT,
                                marginTop: "0rem",
                            }}>
                            My Full-Stack formation:
                        </Header2>
                    </Grid>
                </Grid>
            </Container>
            <section>
                <h4 align="center">🔗Connect with me👇</h4>
                <p align="center">
                    <a
                        className="social"
                        href="https://github.com/Diegoaph"
                        target="blank">
                        <img
                            align="center"
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
                            align="center"
                            src="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97"
                            alt="Dev.DiegoPacheco@gmail.com"
                            height="40"
                            width="40"
                            className="socialimg"
                        />
                    </a>
                    <a
                        className="social"
                        href="wa.me/+573023449160"
                        target="blank">
                        <img
                            align="center"
                            src="https://1000marcas.net/wp-content/uploads/2019/11/logotipo-Whatsapp.jpg"
                            alt="Whatsapp (+57)302-3449160"
                            height="40"
                            width="50"
                            className="socialimg"
                        />
                    </a>
                    <a
                        className="social"
                        href="https://linkedin.com/in/linkedin.com/in/diegoaph"
                        target="blank">
                        <img
                            align="center"
                            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                            alt="linkedin.com/in/diegoaph"
                            height="30"
                            width="40"
                            className="socialimg"
                        />
                    </a>
                    <a
                        className="social"
                        href="t.me/pachecohdiego"
                        target="blank">
                        <img
                            align="center"
                            src="https://store-images.s-microsoft.com/image/apps.12376.13537716651231321.3067a421-6c2f-48a9-b77c-1e38e19146e6.f539b24d-6328-4c00-9469-2d6d841667e6"
                            alt="Telegram @PachecoHDiego"
                            height="40"
                            width="40"
                            className="socialimg"
                        />
                    </a>
                </p>
            </section>
        </Box>
    );
};

export default Landing;
