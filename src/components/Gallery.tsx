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
            URL: "https://media.licdn.com/dms/image/D4E2DAQFOY2L0I-lzSQ/profile-treasury-image-shrink_800_800/0/1693445360878?e=1694721600&v=beta&t=2UBxqmpBFy22p9DV5kL5Pj-Eyln6zU3QtYXjk_woHNI",
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
            URL: "https://media.licdn.com/dms/image/D4E2DAQHlOefbddni8A/profile-treasury-image-shrink_800_800/0/1693445293713?e=1694721600&v=beta&t=wQB7Xd_Lx-p7-lr_EUrNyuy3TxNeyIqvqTwv6WoJAgA",
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
            URL: "https://media.licdn.com/dms/image/D4E2DAQEJx9MN-xOw8w/profile-treasury-image-shrink_800_800/0/1693445227292?e=1694721600&v=beta&t=xwOg9ntkeaFj_mXY9-q5KGay3hqdhI5bnV7IkzCyIos",
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
            URL: "https://media.licdn.com/dms/image/D4E2DAQGeNdjSK1-DOg/profile-treasury-image-shrink_800_800/0/1693445258574?e=1694721600&v=beta&t=DY42couNj2aVjihsAyVYaJmsOmnZvW0jywFDM8gPwAU",
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
            URL: "https://media.licdn.com/dms/image/D4E2DAQGCPo6mz0TotQ/profile-treasury-image-shrink_800_800/0/1693445177066?e=1694725200&v=beta&t=NRhn3fRpsDXrnZiPfMGyPxwCAqSXXr2u30M-9ltp_lQ",
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
            URL: "https://media.licdn.com/dms/image/D4E2DAQFl9ocDMjQG7Q/profile-treasury-image-shrink_800_800/0/1693444279155?e=1694725200&v=beta&t=V-86LYVy578pdqClDmVQLfpZqTr6KcTMOernNUAh_48",
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
            URL: "https://media.licdn.com/dms/image/D4E2DAQG62QrOBoi0rg/profile-treasury-image-shrink_800_800/0/1693444508593?e=1694725200&v=beta&t=hzDKnYWXxj6e02qMKq79L8fNWtCkL88Kqpcm3KY-yRs",
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
            URL: "https://media.licdn.com/dms/image/D4E2DAQE_uiXAC3lrfA/profile-treasury-image-shrink_800_800/0/1693444577059?e=1694725200&v=beta&t=Y0RJuexsUv7pMP20SJiLuoOHirLH7kYWD2a8FAgAxZM",
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
            URL: "https://media.licdn.com/dms/image/D4E2DAQHewkw67LFmKQ/profile-treasury-image-shrink_800_800/0/1693444328928?e=1694725200&v=beta&t=FzbXevzZVXpXq7MKLKNvnIhzBV0VDfjtUZgucKSTkGM",
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
            URL: "https://media.licdn.com/dms/image/D4E22AQFUihJPKxfYEg/feedshare-shrink_1280/0/1692412312173?e=1695254400&v=beta&t=8Z9LhPkW27uy1gfIKHgTkY9dzutjyQk7Y8fm9O44FC0",
            PROJECT: "Professional Portfolio",
            DETAIL: "About Diego",
            TECHNOLOGIES: [pics.TS, pics.REACT, pics.CSS, pics.MUI, pics.VITE],
        },
        {
            URL: "https://media.licdn.com/dms/image/D4E22AQHfrA8JZd988A/feedshare-shrink_1280/0/1692412317888?e=1695254400&v=beta&t=9ZrNtX5nIjCR4w7wIyGM90ziWz6WjIO33M-3yxLyq_E",
            PROJECT: "Professional Portfolio",
            DETAIL: "Projects gallery",
            TECHNOLOGIES: [pics.TS, pics.REACT, pics.CSS, pics.MUI, pics.VITE],
        },
        {
            URL: "https://media.licdn.com/dms/image/D4E22AQFI79zBeBoBbA/feedshare-shrink_1280/0/1692412317938?e=1695254400&v=beta&t=FYW_JGmo6TschGvz15WyMJYegy_lEkoxsnL0sxz_3J8",
            PROJECT: "Professional Portfolio",
            DETAIL: "Projects List",
            TECHNOLOGIES: [pics.TS, pics.REACT, pics.CSS, pics.MUI, pics.VITE],
        },
        {
            URL: "https://media.licdn.com/dms/image/D4E22AQE-RSsoyrYx1w/feedshare-shrink_1280/0/1692412316659?e=1695254400&v=beta&t=Kc7mikIwEOqUFjcsX8fx4UAtkNOQSHlf1kalwFShABU",
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
