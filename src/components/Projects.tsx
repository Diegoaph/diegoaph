import React from "react";

interface Item {
    img: string;
    title: string;
    author: string;
    URL: string;
}

const Projects: React.FC<{}> = () => {
    const isMobile = window.innerWidth < 350;
    //const isDesktop = window.innerWidth > 1200;
    return (
        <section
            style={{
                marginTop: "6rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "90vw",
            }}>
            {itemData.map((item: Item, index: number) => (
                <a
                    key={index}
                    href={item.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        margin: isMobile ? "2rem" : "1rem",
                        marginBottom: "1rem",
                        borderRadius: "10px",
                        boxShadow: "0 0 1rem rgba(97, 218, 251, 0.67)",
                        width: "fit-content",
                        display: "flex",
                        overflow: "hidden",
                        flexDirection: isMobile ? "column" : "row",
                    }}>
                    <img
                        src={item.img}
                        alt={item.title}
                        style={{
                            marginRight: "20px",
                            maxHeight: "30vh",
                            borderRadius: "2rem",
                            padding: "1rem",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "1rem",
                        }}>
                        <h3
                            style={{
                                fontSize: "Larger",
                            }}>
                            {item.title}
                        </h3>
                        <p
                            style={{
                                fontSize: "Large",
                            }}>
                            {item.author}
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
        author: "Booking engine for hotels",
        URL: "https://sunsetsandsdev.vercel.app/",
    },
    {
        img: "https://media.licdn.com/dms/image/D4E22AQGowmQwv0dZOw/feedshare-shrink_1280/0/1690911793922?e=1694044800&v=beta&t=DnwiNGiZeVWcPHWUz1VjdEuxct3OT3WdCVQeGyTYKnU",
        title: "GamingHub",
        author: "Videogames atlas",
        URL: "https://devdiego-videogames.vercel.app/",
    },
    {
        img: "https://media.licdn.com/dms/image/D4E22AQF-VPcR1z07wg/feedshare-shrink_800/0/1690605400062?e=1693440000&v=beta&t=PEHS-Re3bgHA7Tq5fuTP8FDTNmd_gUaljaVkyyJycjA",
        title: "Rick & Morty",
        author: "Characters catalog",
        URL: "https://devdiego-rickymorty.vercel.app/",
    },
    {
        img: "https://media.licdn.com/dms/image/D4E22AQFO6O8kKc4ZoQ/feedshare-shrink_800/0/1690605400142?e=1693440000&v=beta&t=4c0Z3S5sOLwhXAWwqzS7dA_Q-uX72gzBghRsAoZY1bo",
        title: "Portfolio",
        author: "This, my own portfolio",
        URL: "https://devdiego.vercel.app/",
    },
];

export default Projects;
