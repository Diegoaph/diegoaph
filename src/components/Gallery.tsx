import Carousel from "react-material-ui-carousel";
import { themePalette } from "../config/theme.cofig";
import React, { CSSProperties } from "react";
interface ItemProps {
    item: {
        URL: string;
        PROJECT: string;
        DETAIL: string;
        TECHNOLOGIES: string[];
    };
}

const Item: React.FC<ItemProps> = ({ item }) => {
    const itemContainerStyle: CSSProperties = {
        position: "relative",
        textAlign: "center",
        width: "auto",
        height: "70%",
        backgroundColor: themePalette.BG,
        boxShadow: "8px 8px 8px 8px rgba(0, 0, 0, 0.25)",
        marginBottom: "1rem",
    };

    const imageStyle: CSSProperties = {
        width: "100%",
        height: "auto",
        borderRadius: "0.5em",
    };

    const textOverlayStyle: CSSProperties = {
        position: "absolute",
        bottom: 0,
        backgroundRepeat: "no-repeat",
        background:
            "linear-gradient(90deg,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.01),rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.01),rgba(0, 0, 0, 0)",
        color: "#fff",
        padding: "0 10px",
        textAlign: "center",
        width: "100%",
        maxHeight: "30%",
        overflow: "auto",
        boxSizing: "border-box",
    };

    return (
        <div
            style={itemContainerStyle}
            className="container">
            <img
                src={item.URL}
                alt={item.PROJECT}
                style={imageStyle as React.ImgHTMLAttributes<HTMLImageElement>}
            />
            <div style={textOverlayStyle}>
                <h3 style={{ margin: "0", padding: "5px" }}>{item.PROJECT}</h3>
                <p style={{ margin: "0", padding: "5px" }}>{item.DETAIL}</p>
                <span>
                    {item.TECHNOLOGIES.map((tech: string, index: number) => (
                        <img
                            key={index}
                            src={tech}
                            alt={tech}
                            height="30"
                            width="30"
                            style={{ borderRadius: "5px", margin: "3px" }}
                        />
                    ))}
                </span>
            </div>
        </div>
    );
};

const Gallery = () => {
    enum pics {
        API = "API.jpg",
        CSS = "CSS.jpg",
        JS = "Javascript.jpg",
        TS = "Typescript.jpg",
        VITE = "Vite.svg",
        MUI = "Material-ui.jpg",
        REACT = "React.jpg",
        RX = "Redux.jpg",
        RTK = "ReduxTK.jpg",
        FB = "Firebase.jpg",
        NODE = "Node.jpg",
        EX = "Express.jpg",
        PG = "Postgresql.jpg",
        MDB = "Mongodb.jpg",
        GIT = "Git.jpg",
        GH = "Github.jpg",
    }
    const items = [
        {
            URL: "https://i.imgur.com/gh9B5dh.png",
            PROJECT: "Bookings engine",
            DETAIL: "Home Page",
            TECHNOLOGIES: [
                pics.JS,
                pics.MDB,
                pics.FB,
                pics.VITE,
                pics.REACT,
                pics.RTK,
                pics.MUI,
                pics.NODE,
                pics.GIT,
                pics.EX,
                pics.CSS,
            ],
        },
        {
            URL: "https://i.imgur.com/S8pTbLj.png",
            PROJECT: "Bookings engine",
            DETAIL: "Detail",
            TECHNOLOGIES: [
                pics.JS,
                pics.MDB,
                pics.FB,
                pics.VITE,
                pics.REACT,
                pics.RTK,
                pics.MUI,
                pics.NODE,
                pics.GIT,
                pics.EX,
                pics.CSS,
            ],
        },
        {
            URL: "https://i.imgur.com/ngnSu14.png",
            PROJECT: "Bookings engine",
            DETAIL: "Notifications",
            TECHNOLOGIES: [
                pics.JS,
                pics.MDB,
                pics.FB,
                pics.VITE,
                pics.REACT,
                pics.RTK,
                pics.MUI,
                pics.NODE,
                pics.GIT,
                pics.EX,
                pics.CSS,
            ],
        },
        {
            URL: "https://i.imgur.com/6mrwlCJ.png",
            PROJECT: "Bookings engine",
            DETAIL: "Dashboards",
            TECHNOLOGIES: [
                pics.JS,
                pics.MDB,
                pics.FB,
                pics.VITE,
                pics.REACT,
                pics.RTK,
                pics.MUI,
                pics.NODE,
                pics.GIT,
                pics.EX,
                pics.CSS,
            ],
        },
        {
            URL: "https://i.imgur.com/U5yYAfp.png",
            PROJECT: "Bookings engine",
            DETAIL: "Login",
            TECHNOLOGIES: [
                pics.JS,
                pics.MDB,
                pics.FB,
                pics.VITE,
                pics.REACT,
                pics.RTK,
                pics.MUI,
                pics.NODE,
                pics.GIT,
                pics.EX,
                pics.CSS,
            ],
        },
        {
            URL: "https://i.imgur.com/p4gfyf3.jpg",
            PROJECT: "Videogames catalog",
            DETAIL: "Landing Page",
            TECHNOLOGIES: [
                pics.JS,
                pics.PG,
                pics.API,
                pics.REACT,
                pics.RX,
                pics.NODE,
                pics.EX,
                pics.CSS,
            ],
        },
        {
            URL: "https://i.imgur.com/57yUJdJ.jpg",
            PROJECT: "Videogames catalog",
            DETAIL: "Home, filters",
            TECHNOLOGIES: [
                pics.JS,
                pics.PG,
                pics.API,
                pics.REACT,
                pics.RX,
                pics.NODE,
                pics.EX,
                pics.CSS,
            ],
        },
        {
            URL: "https://i.imgur.com/3xhfkpN.jpg",
            PROJECT: "Videogames catalog",
            DETAIL: "Detail",
            TECHNOLOGIES: [
                pics.JS,
                pics.PG,
                pics.API,
                pics.REACT,
                pics.RX,
                pics.NODE,
                pics.EX,
                pics.CSS,
            ],
        },
        {
            URL: "https://i.imgur.com/ZYzJCMH.jpg",
            PROJECT: "Videogames catalog",
            DETAIL: "Home, Name searching",
            TECHNOLOGIES: [
                pics.JS,
                pics.PG,
                pics.API,
                pics.REACT,
                pics.RX,
                pics.NODE,
                pics.EX,
                pics.CSS,
            ],
        },

        {
            URL: "https://i.imgur.com/jfwbITr.jpg",
            PROJECT: "Videogames catalog",
            DETAIL: "Create Form",
            TECHNOLOGIES: [
                pics.JS,
                pics.PG,
                pics.API,
                pics.REACT,
                pics.RX,
                pics.NODE,
                pics.EX,
                pics.CSS,
            ],
        },
        {
            URL: "https://i.imgur.com/Qf8bAyH.jpg",
            PROJECT: "Rick & Morty Character Catalog",
            DETAIL: "About section",
            TECHNOLOGIES: [
                pics.JS,
                pics.REACT,
                pics.CSS,
                pics.NODE,
                pics.EX,
                pics.API,
            ],
        },
        {
            URL: "https://i.imgur.com/xfAzQpg.jpg",
            PROJECT: "Rick & Morty Character Catalog",
            DETAIL: "character list, with nav bar",
            TECHNOLOGIES: [
                pics.JS,
                pics.REACT,
                pics.CSS,
                pics.NODE,
                pics.EX,
                pics.API,
            ],
        },
        {
            URL: "https://i.imgur.com/0LEPnQO.jpg",
            PROJECT: "Rick & Morty Character Catalog",
            DETAIL: "Login Page, showing validations and feedback message",
            TECHNOLOGIES: [
                pics.JS,
                pics.REACT,
                pics.CSS,
                pics.NODE,
                pics.EX,
                pics.API,
            ],
        },
        {
            URL: "https://i.imgur.com/9s8lbFv.jpg",
            PROJECT: "Rick & Morty Character Catalog",
            DETAIL: "FAVs page",
            TECHNOLOGIES: [
                pics.JS,
                pics.REACT,
                pics.CSS,
                pics.NODE,
                pics.EX,
                pics.API,
            ],
        },
        {
            URL: "https://i.imgur.com/m2LA70x.png",
            PROJECT: "Professional Portfolio",
            DETAIL: "About Diego",
            TECHNOLOGIES: [pics.TS, pics.REACT, pics.CSS, pics.MUI, pics.VITE],
        },
        {
            URL: "https://i.imgur.com/gh9B5dh.png",
            PROJECT: "Professional Portfolio",
            DETAIL: "Projects gallery",
            TECHNOLOGIES: [pics.TS, pics.REACT, pics.CSS, pics.MUI, pics.VITE],
        },
        {
            URL: "https://i.imgur.com/SHdAHVl.png",
            PROJECT: "Professional Portfolio",
            DETAIL: "Projects List",
            TECHNOLOGIES: [pics.TS, pics.REACT, pics.CSS, pics.MUI, pics.VITE],
        },
        {
            URL: "https://i.imgur.com/PR8qUAK.png",
            PROJECT: "Professional Portfolio",
            DETAIL: "Screens",
            TECHNOLOGIES: [pics.TS, pics.REACT, pics.CSS, pics.MUI, pics.VITE],
        },
    ];

    return (
        <Carousel>
            {items.map((item, index) => (
                <Item
                    key={index}
                    item={item}
                />
            ))}
        </Carousel>
    );
};

export default Gallery;
