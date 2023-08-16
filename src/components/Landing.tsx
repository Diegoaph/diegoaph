import React from "react";
import { themePalette } from "../config/theme.cofig";
import {
    Container,
    Grid,
    styled,
    Stack,
    Button,
    Divider,
    Typography,
} from "@mui/material";
import "./Landing.css";
import Gallery from "./Gallery";
import { NavLink } from "react-router-dom";

const StyledBox = styled("div")`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    @media (max-width: 400px) {
        max-width: 80%;
        margin-left: 0;
    }
`;
const Header1 = styled("h1")({ fontSize: "3rem", marginBottom: "0.1em" });
const Header2 = styled("h2")({ fontSize: "2rem" });
enum pics {
    JS = "javascript.jpg",
    TS = "typescript.jpg",
    VITE = "vite.svg",
    REACT = "react.jpg",
    RX = "redux.jpg",
    CSS = "css.jpg",
    MUI = "material-ui.jpg",
    RTK = "reduxTK.jpg",
    NODE = "node.jpg",
    EX = "express.jpg",
    FB = "firebase.jpg",
    PG = "postgresql.jpg",
    MDB = "mongodb.jpg",
    API = "api.jpg",
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
    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <StyledBox sx={{ flexGrow: 1, minHeight: "100vh", width: "100%" }}>
            <Grid container>
                <Stack
                    direction="row"
                    spacing={1}>
                    <header className="aside">
                        <Button
                            variant="outlined"
                            onClick={() => handleScrollToSection("top")}>
                            Projects Gallery
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() =>
                                handleScrollToSection("tools-technologies")
                            }>
                            Tools and technologies
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleScrollToSection("education")}>
                            My Education
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleScrollToSection("about")}>
                            About Me
                        </Button>
                    </header>
                </Stack>
            </Grid>{" "}
            <Container maxWidth="xl">
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center">
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            spacing={5}
                            justifyContent="space-between"
                            alignItems="center">
                            <Divider
                                className="divider"
                                id="top"
                            />
                            <Grid item>
                                <Header1
                                    className="h1"
                                    style={{
                                        color: themePalette.LIGHT,
                                        marginTop: "6rem",
                                    }}>
                                    <NavLink
                                        to="/projects"
                                        style={{
                                            color: themePalette.LIGHT,
                                            textDecorationColor: "none",
                                        }}>
                                        Check out my latest projects
                                    </NavLink>
                                </Header1>
                                <Gallery />
                            </Grid>
                            <Divider
                                className="divider"
                                id="tools-technologies"
                                style={{
                                    marginBottom: "3rem",
                                    marginTop: "2rem",
                                }}
                            />
                            <Grid
                                item
                                style={{
                                    alignItems: "center",
                                }}>
                                <Header2
                                    className="h1"
                                    style={{
                                        color: themePalette.LIGHT,
                                        marginTop: "5rem",
                                    }}>
                                    Tools and technologies:
                                </Header2>
                                <Header2
                                    className="h1"
                                    style={{
                                        fontSize: "1rem",
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
                                className="divider"
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
                                        marginTop: "3rem",
                                    }}>
                                    My Full-Stack formation
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
                                className="divider"
                                id="about"
                                style={{
                                    marginBottom: "3rem",
                                    marginTop: "2rem",
                                }}
                            />
                            <Grid
                                container
                                direction="column">
                                <Typography
                                    variant="h4"
                                    style={{
                                        color: themePalette.LIGHT,
                                        marginTop: "5rem",
                                    }}>
                                    I'm Diego!
                                </Typography>
                                <Grid
                                    container
                                    direction="row"
                                    className="about-container">
                                    <Grid
                                        item
                                        xs={12}
                                        lg={6}
                                        className="description-container">
                                        <Typography>
                                            <strong>
                                                Creating User-Centric Solutions
                                            </strong>{" "}
                                            <br />I leverage my experience as a
                                            Full-Stack Web Developer to deliver
                                            efficient and scalable web
                                            solutions. <br /> <br />
                                            My journey has deepened my
                                            understanding of seamlessly
                                            integrating form and function in web
                                            development.I quickly adapt to
                                            emerging technological trends,
                                            ensuring I stay at the forefront.
                                            <br />
                                            <br /> Continuously honing my skills
                                            guarantees that my projects are not
                                            only innovative but also aligned
                                            with industry shifts.
                                            <br />
                                            <br /> User-centered design defines
                                            my approach. Detail-oriented, I
                                            create immersive web experiences by
                                            meticulously considering every pixel
                                            and line of code. Prioritizing
                                            aesthetic appeal and seamless
                                            functionality, I ensure successful
                                            outcomes in projects. Client
                                            satisfaction drives me.
                                            <br />
                                            <br />
                                            Effective communication, punctual
                                            deliveries, and exceeding
                                            expectations support my
                                            collaborations. Carefully curating
                                            web solutions, I accurately
                                            translate clients' visions into
                                            reality. As a Full-Stack Web
                                            Developer, I bring a proven track
                                            record of creating user-focused
                                            dynamic websites.
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        lg={6}
                                        className="foto-container">
                                        <Grid
                                            container
                                            direction="column">
                                            <Grid item>
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
                                            </Grid>
                                            <Grid item>
                                                <hr />
                                                <img
                                                    src="https://github-readme-stats.vercel.app/api/top-langs?username=diegoaph&show_icons=true&locale=en&layout=compact"
                                                    alt="diegoaph"
                                                    style={{
                                                        borderRadius: "15px",
                                                        margin: "3px",
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <footer className="footer">
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
                    </a>{" "}
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
            </footer>
        </StyledBox>
    );
};

export default Landing;
