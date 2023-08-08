import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Projects: React.FC<{}> = () => {
    return (
        <ImageList sx={{ margin: 0, width: "90vw", height: 450 }}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />

                    <strong>
                        <a href={item.URL}>
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                            />
                        </a>
                    </strong>
                </ImageListItem>
            ))}
        </ImageList>
    );
};

const itemData = [
    {
        img: "https://media.licdn.com/dms/image/D4E22AQEQZl1XQQXfmA/feedshare-shrink_1280/0/1690911793910?e=1694044800&v=beta&t=StpDteUQYaDSJgiLARX0C0sFcAGTexx1mQD9E5MEEeE",
        title: "Sunset Sands Hotel",
        author: "Booking engine for hotels",
        URL: "https://devdiego-bookingengine.vercel.app/",
    },
    {
        img: "https://media.licdn.com/dms/image/D4E22AQGowmQwv0dZOw/feedshare-shrink_1280/0/1690911793922?e=1694044800&v=beta&t=DnwiNGiZeVWcPHWUz1VjdEuxct3OT3WdCVQeGyTYKnU",
        title: "GamingHub",
        author: "Videogames atlas",
        URL: "https://devdiego-gaminghub.vercel.app/",
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
