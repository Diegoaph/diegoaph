import Carousel from 'react-material-ui-carousel';
import type React from 'react';
import styles from './Gallery.module.scss';
import { useLanguage } from '../context/LangContext';

interface Technology {
  name: string;
  image: string;
}

interface ProjectItem {
  url: string;
  project: string;
  detail: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ItemProps {
  item: ProjectItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { lang } = useLanguage();

  const handleViewProject = () => {
    if (item.liveUrl) {
      window.open(item.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewCode = () => {
    if (item.githubUrl) {
      window.open(item.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageWrapper}>
        <img
          src={item.url || '/placeholder.svg'}
          alt={`${item.project} - ${item.detail}`}
          className={styles.projectImage}
        />
        <div className={styles.imageOverlay}>
          <div className={styles.overlayContent}>
            <h3 className={styles.projectTitle}>{item.project}</h3>
            <p className={styles.projectDetail}>{item.detail}</p>
            <div className={styles.actionButtons}>
              {item.liveUrl && (
                <button
                  className={styles.actionButton}
                  onClick={handleViewProject}>
                  {!lang ? 'View Project' : 'Ver Proyecto'}
                </button>
              )}
              {item.githubUrl && (
                <button
                  className={`${styles.actionButton} ${styles.secondary}`}
                  onClick={handleViewCode}>
                  {!lang ? 'View Code' : 'Ver Código'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.technologiesSection}>
        <h4 className={styles.techTitle}>
          {!lang ? 'Technologies Used:' : 'Tecnologías Utilizadas:'}
        </h4>
        <div className={styles.technologiesGrid}>
          {item.technologies.map((tech, index) => (
            <div
              key={index}
              className={styles.techItem}
              title={tech.name}>
              <img
                src={tech.image || '/placeholder.svg'}
                alt={tech.name}
                className={styles.techImage}
              />
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  // Technology definitions with proper typing
  const technologies = {
    
    JS: { name: 'JavaScript', image: 'Javascript.jpg' },
    TS: { name: 'TypeScript', image: 'Typescript.jpg' },
    VITE: { name: 'Vite', image: 'Vite.svg' },
    MUI: { name: 'Material-UI', image: 'Material-ui.jpg' },
    REACT: { name: 'React', image: 'React.jpg' },
    RX: { name: 'Redux', image: 'Redux.jpg' },
    RTK: { name: 'Redux Toolkit', image: 'ReduxTK.jpg' },
    FB: { name: 'Firebase', image: 'Firebase.jpg' },
    NODE: { name: 'Node.js', image: 'Node.jpg' },
    EX: { name: 'Express', image: 'Express.jpg' },
    PG: { name: 'PostgreSQL', image: 'Postgresql.jpg' },
    MDB: { name: 'MongoDB', image: 'Mongodb.jpg' },
    GIT: { name: 'Git', image: 'Git.jpg' },
    GH: { name: 'GitHub', image: 'Github.jpg' }
  } as const;

  const projects: ProjectItem[] = [
    {
      url: 'sunset_search.webp',
      project: 'Bookings Engine',
      detail: 'Complete booking platform with real-time availability',
      technologies: [
        technologies.REACT,
        technologies.TS,
        technologies.NODE,
        technologies.EX,
        technologies.MDB,
        technologies.FB,
        technologies.GIT
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      url: 'sunset_notifications.webp',
      project: 'Bookings Engine',
      detail: 'Advanced notification system and user dashboard',
      technologies: [
        technologies.REACT,
        technologies.TS,
        technologies.NODE,
        technologies.EX,
        technologies.MDB,
        technologies.FB
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      url: 'logodiego.png',
      project: 'Videogames Catalog',
      detail: 'Interactive catalog with advanced filtering and search',
      technologies: [
        technologies.REACT,
        technologies.JS,
        technologies.RX,
        technologies.NODE,
        technologies.EX,
        technologies.PG,
      ],
      githubUrl: 'https://github.com/example'
    },
    {
      url: 'logodiego.png',
      project: 'Rick & Morty Character Catalog',
      detail: 'Character browser with favorites and detailed views',
      technologies: [
        technologies.REACT,
        technologies.JS,
        technologies.NODE,
        technologies.EX
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    }
  ];

  return (
    <div className={styles.galleryContainer}>
      <Carousel
        className={styles.carousel}
        indicators={true}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        animation='slide'
        duration={500}
        interval={6000}
        navButtonsProps={{
          style: {
            backgroundColor: 'rgba(91, 213, 218, 0.8)',
            color: '#ffffff',
            borderRadius: '50%',
            margin: '0 10px'
          }
        }}
        indicatorIconButtonProps={{
          style: {
            color: 'rgba(91, 213, 218, 0.5)',
            margin: '0 5px'
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: '#5bd5da'
          }
        }}>
        {projects.map((item, index) => (
          <Item
            key={index}
            item={item}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
