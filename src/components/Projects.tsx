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
        img: "https://i.imgur.com/kxOSAOo.png",
        title: "Sunset Sands Hotel",
        description: "Booking engine for hotels",
        descripcion: "Motor de reservas para hoteles",
        URL: "https://sunsetsandsdev.vercel.app/",
    },
    {
        img: "https://i.imgur.com/57yUJdJ.jpg",
        title: "GamingHub",
        description: "🅆🄾🅁🄺🄸🄽🄶 🄾🄽 🄸🅃",
        descripcion: "🅃🅁🄰🄱🄰🄹🄰🄽🄳🄾",
        URL: "https://devdiego-videogames.vercel.app/",
    },
    {
        img: "https://i.imgur.com/9s8lbFv.jpg",
        descripcion: "Catálogo de personajes",
        title: "Rick & Morty",
        description: "Characters catalog",
        URL: "https://devdiego-rickymorty.vercel.app/",
    },
    {
        img: "https://i.imgur.com/PR8qUAK.png",
        title: "Portfolio",
        descripcion: "Éste, mi portafolio",
        description: "This, my own portfolio",
        URL: "https://devdiego.vercel.app/",
    },
];

export default Projects;
