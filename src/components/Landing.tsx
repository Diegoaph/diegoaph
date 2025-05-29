import React from 'react';

import styles from './Landing.module.scss';
// import Gallery from './Gallery';
import Cta from './Cta/Cta'
import { useLanguage } from '../context/LangContext';

enum pics {
  JS = 'Javascript.jpg',
  TS = 'Typescript.jpg',
  REACT = 'React.jpg',
  // RX = 'Redux.jpg',
  SCSS = 'sass.png',
  NODE = 'Node.jpg',
  EX = 'Express.jpg',
  FB = 'Firebase.jpg',
  PG = 'Postgresql.jpg',
  // MDB = 'Mongodb.jpg',
  GIT = 'Git.jpg',
  GH = 'Github.jpg'
}
enum certs {
  FULLSTACK = 'fullstack_henry.jpeg',
  FRONTEND = 'frontend.webp',
  ENGLISH = 'efsetc2.png',
  TERMINAL = 'command_line.webp',
  GITHUB = 'github_git.webp',
  ALGOS = 'algorithms.jpeg',
  BASICS = 'basics.webp',
  LINUX = 'linux_env.webp'
}
const Landing: React.FC = ({}) => {
  const { lang } = useLanguage();

  return (
    <div className={styles.ppal}>
      <h1>
        {!lang
          ? 'Full-Stack Developer - Custom Web Solutions That Drive Results'
          : 'Desarrollador Full-Stack - Soluciones Web Personalizadas Que Generan Resultados'}
      </h1>
      <h2 className={styles.sectionHeader}>
        {!lang
          ? "Hi, I'm Diego! I’ll build a custom website just for you, to help your business shine online"
          : 'Hola, soy Diego! crearé una web a tu medida, para que tu negocio destaque en internet'}
      </h2>
      <div className={styles.about}>
        <div className={styles.photoStats}>
          <img
            src='https://avatars.githubusercontent.com/u/103613935?v=4'
            alt='Diego Pacheco'
            className={styles.photo}
          />
          <img
            src='https://github-readme-stats.vercel.app/api/top-langs?username=diegoaph&show_icons=true&locale=en&layout=compact'
            alt='diegoaph'
            className={styles.stats}
          />
        </div>
        {!lang ? (
          <p className={styles.aboutDescription}>
            <strong>Building Clean, User-Centered Web Experiences</strong>
            <br />
            I'm a Full-Stack Developer focused on creating fast, scalable, and visually polished web
            solutions.
            <br />
            <br />
            I combine design and engineering to craft seamless user experiences that deliver real
            value. By staying ahead of tech trends and constantly sharpening my skills, I ensure
            every project is modern and future-ready.
            <br />
            <br />
            Clients trust me for clear communication, timely delivery, and a deep commitment to
            quality. Whether you're building a brand or improving your online presence, I can turn
            your vision into a powerful, functional website.
          </p>
        ) : (
          <p className={styles.aboutDescription}>
            <strong>Experiencias Web Claras y Centradas en el Usuario</strong>
            <br />
            <br />
            Soy Desarrollador Full Stack enfocado en crear soluciones web rápidas, escalables y
            visualmente profesionales.
            <br />
            <br />
            Combino diseño e ingeniería para lograr experiencias que realmente conectan con el
            usuario. Me mantengo al día con las tecnologías más recientes, lo que asegura que cada
            proyecto esté preparado para el futuro.
            <br />
            <br />
            Mis clientes valoran la comunicación clara, la entrega puntual y la calidad constante.
            Ya sea para lanzar tu marca o mejorar tu presencia digital, puedo convertir tu visión en
            una web funcional y potente.
          </p>
        )}
      </div>
      <h2 className={styles.sectionHeader}>
        {!lang
          ? 'Tools and technologies that i use to build my projects with'
          : 'Tecnologías y herramientas con las que construyo mis proyectos'}
      </h2>
      <section className={styles.techContainer}>
        {Object.values(pics).map((tech, index) => (
          <div className={styles.techItem}>
            <img
              className={styles.techImg}
              key={index}
              src={tech}
              alt={tech}
            />
            <p className={styles.techName}>{`${tech.slice(0, -4)}`}</p>
          </div>
        ))}
      </section>
      <Cta />
      <h2 className={styles.h2}>
        {!lang ? 'My Flull-Stack Dev Formation' : 'Mi formación como desarrollador web'}
      </h2>{' '}
      <span className={styles.certsContainer}>
        {Object.values(certs).map((cert, index) => (
          <div className={styles.certItem}>
            <img
              key={index}
              src={cert}
              alt={cert}
              className={styles.certImg}
            />
          </div>
        ))}
      </span>
      {/* <h2 className={styles.h2}>{!lang ? 'Take a look at my Projects' : 'Dale un vistazo a mis proyectos'}</h2>
      <Gallery /> */}
      <footer className={styles.footer}>
        {!lang ? 'Connect with me' : 'Contáctate conmigo'}
        <section className={styles.socialContainer}>
          <a
            className={styles.social}
            href='https://github.com/Diegoaph'
            target='blank'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/38/38401.png?w=360'
              alt='github.com/diegoaph'
              className={styles.socialImg}
            />
          </a>
          <a
            className={styles.social}
            href='mailto:Dev.DiegoPacheco@gmail.com?subject=¡Hemos%20visto%20tu%20portfolio!&body=Hola%20Diego!,%20me%20gustar%C3%ADa%20hablar%20contigo'
            target='blank'>
            <img
              src='https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97'
              alt='Dev.DiegoPacheco@gmail.com'
              className={styles.socialImg}
            />
          </a>
          <a
            className={styles.social}
            href='https://wa.me/+573023449160'
            target='blank'>
            <img
              src='https://1000marcas.net/wp-content/uploads/2019/11/logotipo-Whatsapp.jpg'
              alt='Whatsapp (+57)302-3449160'
              className={styles.socialImg}
            />
          </a>
          <a
            className={styles.social}
            href='https://linkedin.com/in/diegoaph'
            target='blank'>
            <img
              src='https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg'
              alt='linkedin.com/in/diegoaph'
              className={styles.socialImg}
            />
          </a>
          <a
            className={styles.social}
            href='https://t.me/pachecohdiego'
            target='blank'>
            <img
              src='https://store-images.s-microsoft.com/image/apps.12376.13537716651231321.3067a421-6c2f-48a9-b77c-1e38e19146e6.f539b24d-6328-4c00-9469-2d6d841667e6'
              alt='Telegram @PachecoHDiego'
              className={styles.socialImg}
            />
          </a>
        </section>
        <a
          className={styles.cv}
          href={!lang ? 'diegoPachecoResume.pdf' : 'DiegoPachecoCurriculum.pdf'}
          download={!lang ? 'diegoPachecoResume' : 'DiegoPachecoCurriculum'}>
          {!lang ? 'Download CV' : 'Descargar CV'}
        </a>
      </footer>
    </div>
  );
};

export default Landing;
