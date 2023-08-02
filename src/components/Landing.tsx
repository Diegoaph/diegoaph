import React from "react";
import { themePalette } from "../config/theme.cofig";
import { Box, Container, Grid, styled, Button, Divider } from "@mui/material";
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
enum certs {
    FULLSTACK = "https://media.licdn.com/dms/image/D4E22AQH2JciUNRY6ZA/feedshare-shrink_2048_1536/0/1689991632684?e=1692835200&v=beta&t=HnFAY1MgshGUmZQkraAm_AirDBJ9GrHzBq8xzgIDLWI",
    FRONTEND = "https://media.licdn.com/dms/image/D4E22AQE_Uew3OUc1yw/feedshare-shrink_2048_1536/0/1690167083293?e=1692835200&v=beta&t=MceJwN6bHuYz82khdK50mv1qevhJtsNzGEbDBe7D1b4",
    ENGLISH = "https://media.licdn.com/dms/image/D4E22AQHuodEmQK89HQ/feedshare-shrink_1280/0/1690173496222?e=1692835200&v=beta&t=s0-teSZyIrmaPSOC9PRUbxnqXtJgIo3qmLlaueI3gLs",
    TERMINAL = "https://media.licdn.com/dms/image/D4E22AQEpwEtWqZOPuA/feedshare-shrink_2048_1536/0/1690167888626?e=1692835200&v=beta&t=Qvql5GIce2OFoGlB513sUYTbnS_mDhKZloW2Vk1Q5tA",
    GITHUB = "https://media.licdn.com/dms/image/D4E22AQEzRwS3BvWbQw/feedshare-shrink_2048_1536/0/1690168561993?e=1692835200&v=beta&t=y28NMEh5sbOaV0bJOprk2XbrmmRLTBhmSHGmK0qN2mI",
    ALGOS = "https://media.licdn.com/dms/image/D4E22AQFHpFdcUSdWQw/feedshare-shrink_2048_1536/0/1690167596625?e=1692835200&v=beta&t=d84W55OO58IaYYy5lkBb8m98yyrziRmlFP0-Kn_Qyek",
    BASICS = "https://media.licdn.com/dms/image/D4E22AQEbCpJwrk6Srw/feedshare-shrink_2048_1536/0/1690167317933?e=1692835200&v=beta&t=6F7loPgyspPinazOFuA8jV7ynZK-ge4eVWDHUr8WmA4",
    LINUX = "https://media.licdn.com/dms/image/D4E22AQH7JaJOaHpoqQ/feedshare-shrink_2048_1536/0/1690168872290?e=1692835200&v=beta&t=ilVz9VzhKmT8lWIbWTigKT7bWZfDdK1kZqUDVJomCfU",
}
const Landing: React.FC<{}> = () => {
    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={2}
                        style={{
                            position: "sticky",
                            top: 0,
                        }}>
                        <aside className="aside">
                            <Button
                                variant="outlined"
                                onClick={() =>
                                    handleScrollToSection("tools-technologies")
                                }>
                                Tools and technologies
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() =>
                                    handleScrollToSection("education")
                                }>
                                Education
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => handleScrollToSection("about")}>
                                About Me
                            </Button>
                        </aside>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={10}>
                        <Grid
                            container
                            direction="column"
                            spacing={5}
                            justifyContent="space-between">
                            <Grid item>
                                <Header1
                                    className="h1"
                                    style={{
                                        color: themePalette.LIGHT,
                                        marginTop: "4.5rem",
                                    }}>
                                    Check out my latest projects!↗
                                </Header1>
                                <Gallery />
                            </Grid>
                            <Divider
                                id="tools-technologies"
                                style={{
                                    marginBottom: "3rem",
                                    marginTop: "2rem",
                                }}
                            />
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
                            </Grid>{" "}
                            <Divider
                                id="education"
                                style={{
                                    marginBottom: "3rem",
                                    marginTop: "2rem",
                                }}
                            />
                            <Grid item>
                                <Header2
                                    className="h1"
                                    style={{
                                        color: themePalette.LIGHT,
                                        marginTop: "0rem",
                                    }}>
                                    My Full-Stack formation:
                                </Header2>{" "}
                                <span className="certs-container">
                                    {Object.values(certs).map((cert, index) => (
                                        <div>
                                            <img
                                                key={index}
                                                src={cert}
                                                alt={cert}
                                                height="240"
                                                width="300"
                                                style={{
                                                    borderRadius: "5px",
                                                    margin: "3px",
                                                }}
                                            />
                                        </div>
                                    ))}
                                </span>
                            </Grid>{" "}
                            <Divider
                                id="about"
                                style={{
                                    marginBottom: "3rem",
                                    marginTop: "2rem",
                                }}
                            />
                            <Grid item>
                                <Header2
                                    className="h1"
                                    style={{
                                        color: themePalette.LIGHT,
                                        marginTop: "0rem",
                                    }}>
                                    I'm Diego!
                                </Header2>{" "}
                                <section className="about-container">
                                    <div className="foto-container">
                                        qwertyu iop tre h jk d fgh jkl k jhgf s
                                        dfghj kl kjh gfdssd u ytr e
                                    </div>
                                    <div className="foto-container">
                                        {" "}
                                        <img
                                            src="https://avatars.githubusercontent.com/u/103613935?v=4"
                                            alt="Diego Pacheco"
                                            height="300"
                                            width="300"
                                            style={{
                                                borderRadius: "15px",
                                                margin: "3px",
                                            }}
                                        />
                                        <hr />
                                        <img
                                            src="https://github-readme-stats.vercel.app/api/top-langs?username=diegoaph&show_icons=true&locale=en&layout=compact"
                                            alt="diegoaph"
                                            style={{
                                                borderRadius: "15px",
                                                margin: "3px",
                                            }}
                                        />
                                    </div>
                                </section>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <footer className="footer">
                <h4 align="center">Connect with me</h4>
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
                            width="60"
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
            </footer>
        </Box>
    );
};

export default Landing;
