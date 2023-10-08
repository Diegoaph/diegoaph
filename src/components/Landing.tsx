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
    JS = "Javascript.jpg",
    TS = "Typescript.jpg",
    VITE = "Vite.svg",
    REACT = "React.jpg",
    RX = "Redux.jpg",
    CSS = "CSS.jpg",
    MUI = "Material-ui.jpg",
    RTK = "ReduxTK.jpg",
    NODE = "Node.jpg",
    EX = "Express.jpg",
    FB = "Firebase.jpg",
    PG = "Postgresql.jpg",
    MDB = "Mongodb.jpg",
    API = "API.jpg",
    GIT = "Git.jpg",
    GH = "Github.jpg",
}
enum certs {
    FULLSTACK = "https://i.imgur.com/xjBvdRO.jpg",
    FRONTEND = "https://i.imgur.com/2YUTvEf.jpg",
    ENGLISH = "https://i.imgur.com/JbW5oi3.jpg",
    TERMINAL = "https://i.imgur.com/7meTrhL.jpg",
    GITHUB = "https://i.imgur.com/UbiueKD.jpg",
    ALGOS = "https://i.imgur.com/u7SepwY.jpg",
    BASICS = "https://i.imgur.com/DnpyZpt.jpg",
    LINUX = "https://i.imgur.com/5IHbNBR.jpg",
}
const Landing: React.FC<{ lang: boolean }> = ({ lang }) => {
    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <StyledBox
            sx={{
                flexGrow: 1,
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
            }}>
            <Grid
                container
                className="ppal">
                <Stack
                    direction="row"
                    spacing={1}>
                    <nav className="aside">
                        <Button
                            variant="outlined"
                            onClick={() => handleScrollToSection("top")}>
                            {lang ? "Projects Gallery" : "Mi Galería"}
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() =>
                                handleScrollToSection("tools-technologies")
                            }>
                            {lang
                                ? "Tools and Technologies"
                                : "Tecnologías que uso"}
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleScrollToSection("education")}>
                            {lang ? "My Education" : "Mi Educación"}
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => handleScrollToSection("about")}>
                            {lang ? "About Me" : "Sobre Mí"}
                        </Button>
                    </nav>
                </Stack>
            </Grid>{" "}
            <Container>
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
                                        {lang
                                            ? "Checkout my latest Projects"
                                            : "Dale un vistazo a mis proyectos"}
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
                                    {lang
                                        ? "Tools and technologies"
                                        : "Tecnologías y herramientas"}
                                </Header2>
                                <Header2
                                    className="h1"
                                    style={{
                                        fontSize: "1rem",
                                        color: themePalette.LIGHT,
                                        marginTop: "0rem",
                                    }}>
                                    {lang
                                        ? "that i've used on my projects:"
                                        : "que he usado en mis proyectos:"}
                                </Header2>
                                <span className="tech-container">
                                    {Object.values(pics).map((tech, index) => (
                                        <div>
                                            <img
                                                key={index}
                                                src={tech}
                                                alt={tech}
                                                height="60"
                                                width="60"
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
                            />{" "}
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
                                <Header2
                                    className="h1"
                                    style={{
                                        color: themePalette.LIGHT,
                                        marginTop: "5rem",
                                    }}>
                                    {lang
                                        ? "I'm Diego!"
                                        : "Hola! yo soy Diego!"}
                                </Header2>{" "}
                                <Grid
                                    container
                                    direction="row"
                                    className="about-container">
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
                                    <Grid
                                        item
                                        xs={12}
                                        lg={6}
                                        className="description-container">
                                        <Typography>
                                            {lang ? (
                                                <p>
                                                    <strong>
                                                        Creating User-Centric
                                                        Solutions
                                                    </strong>
                                                    <br />I leverage my
                                                    experience as a Full-Stack
                                                    Web Developer to deliver
                                                    efficient and scalable web
                                                    solutions. <br /> <br />
                                                    My journey has deepened my
                                                    understanding of seamlessly
                                                    integrating form and
                                                    function in web
                                                    development.I quickly adapt
                                                    to emerging technological
                                                    trends, ensuring I stay at
                                                    the forefront.
                                                    <br />
                                                    <br /> Continuously honing
                                                    my skills guarantees that my
                                                    projects are not only
                                                    innovative but also aligned
                                                    with industry shifts.
                                                    <br />
                                                    <br /> User-centered design
                                                    defines my approach.
                                                    Detail-oriented, I create
                                                    immersive web experiences by
                                                    meticulously considering
                                                    every pixel and line of
                                                    code. Prioritizing aesthetic
                                                    appeal and seamless
                                                    functionality, I ensure
                                                    successful outcomes in
                                                    projects. Client
                                                    satisfaction drives me.
                                                    <br />
                                                    <br />
                                                    Effective communication,
                                                    punctual deliveries, and
                                                    exceeding expectations
                                                    support my collaborations.
                                                    Carefully curating web
                                                    solutions, I accurately
                                                    translate clients' visions
                                                    into reality. As a
                                                    Full-Stack Web Developer, I
                                                    bring a proven track record
                                                    of creating user-focused
                                                    dynamic websites.
                                                </p>
                                            ) : (
                                                <p>
                                                    <strong>
                                                        Ofrezco soluciones
                                                        centradas en el usuario!
                                                    </strong>
                                                    <br />
                                                    Aprovecho mi experiencia
                                                    como Desarrollador Web Full
                                                    Stack para entregar
                                                    soluciones web eficientes y
                                                    escalables. <br /> <br />
                                                    Mi experiencia ha reforzado
                                                    mi comprensión de fondo y
                                                    forma del desarrollo web. Me
                                                    adapto rápidamente a las
                                                    tecnologías emergentes,
                                                    asegurando mantenerme a la
                                                    vanguardia.
                                                    <br />
                                                    <br /> El perfeccionamiento
                                                    constante de mis habilidades
                                                    garantiza que mis proyectos
                                                    no solo sean innovadores,
                                                    sino que también estén
                                                    alineados con los cambios de
                                                    la industria.
                                                    <br />
                                                    <br /> El diseño centrado en
                                                    el usuario define mi
                                                    enfoque. Orientado a los
                                                    detalles, puedo crear
                                                    experiencias web inmersivas
                                                    al considerar
                                                    meticulosamente cada píxel y
                                                    línea de código. Al
                                                    priorizar el atractivo
                                                    estético y la funcionalidad
                                                    fluida, aseguro resultados
                                                    exitosos en los proyectos.
                                                    La satisfacción del cliente
                                                    me impulsa.
                                                    <br />
                                                    <br />
                                                    La comunicación efectiva,
                                                    las entregas puntuales y
                                                    superar las expectativas
                                                    respaldan mis
                                                    colaboraciones. Al curar
                                                    cuidadosamente soluciones
                                                    web, traduzco con precisión
                                                    las visiones de los clientes
                                                    en realidad.
                                                </p>
                                            )}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Header2
                                    className="h1"
                                    style={{
                                        color: themePalette.LIGHT,
                                        marginTop: "3rem",
                                    }}>
                                    {lang
                                        ? "My Flull-Stack Dev Formation"
                                        : "Mi formación como desarrollador web"}
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <footer className="footer">
                <h4>{lang ? "Connect with me" : "Contáctame"}</h4>
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
                            width="62"
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
                        href={
                            lang
                                ? "Diego_Pacheco_Full_Stack_cven.pdf"
                                : "Diego_Pacheco_Full_Stack_cves.pdf"
                        }
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
