import React from "react";
import styles from "./Projects.module.css";

interface Item {
    img: string;
    title: string;
    description: string;
    URL: string;
    descripcion: string;
}

const Projects: React.FC<{ lang: boolean }> = ({ lang }) => {
    return (
        <section className={styles.container}>
            {itemData.map((item: Item, index: number) => (
                <a
                    key={index}
                    href={item.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.a}>
                    <img
                        src={item.img}
                        alt={item.title}
                        className={styles.image}
                    />
                    <div className={styles.details}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.description}>
                            {lang ? item.description : item.descripcion}
                        </p>
                    </div>
                </a>
            ))}
        </section>
    );
};
const itemData: Item[] = [
    {
        img: "https://media.licdn.com/dms/image/D4E22AQGB_ikLBJWfxA/feedshare-shrink_1280/0/1692148763769?e=1695254400&v=beta&t=Bu_AkVozFAXYP_cDPH3A_wfG6hNDmAZPxvSkUZEYwSU",
        title: "Sunset Sands Hotel",
        description: "Booking engine for hotels",
        descripcion: "Motor de reservas para hoteles",
        URL: "https://sunsetsandsdev.vercel.app/",
    },
    {
        img: "https://media.licdn.com/dms/image/D4E2DAQFOY2L0I-lzSQ/profile-treasury-image-shrink_800_800/0/1693445360878?e=1694721600&v=beta&t=2UBxqmpBFy22p9DV5kL5Pj-Eyln6zU3QtYXjk_woHNI",
        title: "GamingHub",
        description: "🅆🄾🅁🄺🄸🄽🄶 🄾🄽 🄸🅃",
        descripcion: "🅃🅁🄰🄱🄰🄹🄰🄽🄳🄾",
        URL: "https://devdiego-videogames.vercel.app/",
    },
    {
        img: "https://media.licdn.com/dms/image/D4E2DAQHewkw67LFmKQ/profile-treasury-image-shrink_800_800/0/1693444328928?e=1694725200&v=beta&t=FzbXevzZVXpXq7MKLKNvnIhzBV0VDfjtUZgucKSTkGM",
        descripcion: "Catálogo de personajes",
        title: "Rick & Morty",
        description: "Characters catalog",
        URL: "https://devdiego-rickymorty.vercel.app/",
    },
    {
        img: "https://media.licdn.com/dms/image/D4E22AQE-RSsoyrYx1w/feedshare-shrink_1280/0/1692412316659?e=1695254400&v=beta&t=Kc7mikIwEOqUFjcsX8fx4UAtkNOQSHlf1kalwFShABU",
        title: "Portfolio",
        descripcion: "Éste, mi portafolio",
        description: "This, my own portfolio",
        URL: "https://devdiego.vercel.app/",
    },
];

export default Projects;
