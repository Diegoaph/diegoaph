import { Box, Modal } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './NavBar.module.scss';
import { useLanguage } from '../context/LangContext';

export const NavBar: React.FC = ({}) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlelangToggle = () => {
    setLang(!lang);
  };

  // const handleScrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const modalContent = (
    <div className={styles.modalContent}>
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
        href={!lang ? 'Diego_Pacheco_Full_Stack_cven.pdf' : 'Diego_Pacheco_Full_Stack_cves.pdf'}
        download='Diego-Pacheco-full-stack-CV'
        target='blank'>
        {!lang ? 'Download CV' : 'Descargar CV'}
      </a>

      {/* <nav className={styles.aside}>
        <button onClick={() => handleScrollToSection('top')}>
          {!lang ? 'Projects Gallery' : 'Mi Galería'}
        </button>
        <button onClick={() => handleScrollToSection('tools-technologies')}>
          {!lang ? 'Tools and Technologies' : 'Tecnologías que uso'}
        </button>
        <button onClick={() => handleScrollToSection('about')}>
          {!lang ? 'About Me' : 'Sobre Mí'}
        </button>
        <button onClick={() => handleScrollToSection('education')}>
          {!lang ? 'My Education' : 'Mi Educación'}
        </button>
      </nav> */}
    </div>
  );

  return (
    <nav className={styles.navbar}>
      <NavLink to='mailto:Dev.DiegoPacheco@gmail.com?subject=¡¡Hemos%20visto%20tu%20portfolio!!&body=%20Diego,%20Me%20gustar%C3%ADa%20hablar%20contigo'>
        <img
          src='logodiego.png'
          alt='DevDiego'
          className={styles.logo}
        />
      </NavLink>
      <div className={styles.navOptions}>
        <a
          href={!lang ? 'diegoPachecoResume.pdf' : 'DiegoPachecoCurriculum.pdf'}
          download='Diego-Pacheco-full-stack-resume'
          target='blank'>
          <button className={styles.navOption}>{!lang ? 'CV↓' : 'CV↓'}</button>
        </a>{' '}
        <button
          className={styles.navOption}
          onClick={handleModalOpen}>
          {!lang ? 'Contact' : 'Contacto'}
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-title'
          aria-describedby='modal-description'>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              minWidth: '300px',
              outline: 0
            }}>
            {modalContent}
          </Box>
        </Modal>
        <button
          className={styles.navOption}
          onClick={handlelangToggle}>
          <TranslateIcon />
        </button>
      </div>
    </nav>
  );
};
