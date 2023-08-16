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
        width: "100%",
        height: "auto",
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
            "linear-gradient(90deg, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.01),rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.01),rgba(0, 0, 0, 0)",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        width: "100%",
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
                <h3>{item.PROJECT}</h3>
                <p>{item.DETAIL}</p>
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
    const items = [
        {
            URL: "https://media.licdn.com/dms/image/D4E22AQGB_ikLBJWfxA/feedshare-shrink_1280/0/1692148763769?e=1695254400&v=beta&t=Bu_AkVozFAXYP_cDPH3A_wfG6hNDmAZPxvSkUZEYwSU",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQFwOlM1X1Labg/feedshare-shrink_1280/0/1692148763442?e=1695254400&v=beta&t=WXfMDRRXXfjjh2BkoKvR4cjBAUwyR45QEWPs0qVEG1w",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQHspoUZ2MNQIQ/feedshare-shrink_1280/0/1692148763899?e=1695254400&v=beta&t=qjfAtpVZ9q6w-S-ESbI_tu5WMuqPJczaeZCINzao7v4",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQHElreQKGcgzA/feedshare-shrink_1280/0/1692148763061?e=1695254400&v=beta&t=cYADcuytDVElVWDLXZ-ycJMioo66jhGrItw1Gsit_vc",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQGUG42RO02Egw/feedshare-shrink_1280/0/1692148763189?e=1695254400&v=beta&t=FLOVrb8siJzdrToXunTrjyaVCYnOAhSodwPPDX6hWj8",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQGhsiZTcE5zGg/feedshare-shrink_1280/0/1690911793267?e=1694044800&v=beta&t=_2qtLRr6_voX6M_ZIBtNnNXvlHzbOCx6aPJocXZ5G4A",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQGTsN-9hm8CnA/feedshare-shrink_1280/0/1690911793482?e=1694044800&v=beta&t=PLOU6y11buq2IyoaE9jOfM4VCMq3wO97qUUE2k-El9o",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQHkAR-QsdvMVQ/feedshare-shrink_1280/0/1690911793909?e=1694044800&v=beta&t=DkE6M_orZYP263b-BRUWf0TsquYQ83l9mMahVGpp0do",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQGowmQwv0dZOw/feedshare-shrink_1280/0/1690911793922?e=1694044800&v=beta&t=DnwiNGiZeVWcPHWUz1VjdEuxct3OT3WdCVQeGyTYKnU",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQEQZl1XQQXfmA/feedshare-shrink_1280/0/1690911793910?e=1694044800&v=beta&t=StpDteUQYaDSJgiLARX0C0sFcAGTexx1mQD9E5MEEeE",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQFO6O8kKc4ZoQ/feedshare-shrink_800/0/1690605400142?e=1693440000&v=beta&t=4c0Z3S5sOLwhXAWwqzS7dA_Q-uX72gzBghRsAoZY1bo",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQHsUzjAoUEYng/feedshare-shrink_800/0/1690605378926?e=1693440000&v=beta&t=PXLgG2iEG4mLAePX6fyj4ETWe_-SDWKJKKAXZp9MiHk",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQHb81tY7nb7Bg/feedshare-shrink_800/0/1690605400554?e=1693440000&v=beta&t=wqUlav1bX_cy86vM4jJdBZ5Nk_768E_Tj5kIAa9VH2A",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQE78Fa-7yoZeg/feedshare-shrink_800/0/1690605398283?e=1693440000&v=beta&t=MypCM8y4JtWkkLTn3SAeFV4HP6yBlZWcfYb2takA98k",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQF-VPcR1z07wg/feedshare-shrink_800/0/1690605400062?e=1693440000&v=beta&t=PEHS-Re3bgHA7Tq5fuTP8FDTNmd_gUaljaVkyyJycjA",
            PROJECT: "Rick & Morty Character Catalog",
            DETAIL: "FAVs page, showing genre filter",
            TECHNOLOGIES: [
                pics.JS,
                pics.REACT,
                pics.CSS,
                pics.NODE,
                pics.EX,
                pics.API,
            ],
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
