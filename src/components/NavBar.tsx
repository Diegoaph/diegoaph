import TranslateIcon from '@mui/icons-material/Translate';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { useLanguage } from '../context/LangContext';
import { ContactModal } from './Contactmodal/ContactModal';

export const NavBar: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleLangToggle = () => {
    setLang(!lang);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to='/'>
          <img
            src='logodiego.png'
            alt='DevDiego'
            className={styles.logo}
          />
        </NavLink>
        <div className={styles.navOptions}>
          <a
            href={!lang ? 'diegoPachecoResume.pdf' : 'DiegoPachecoCurriculum.pdf'}
            download={!lang ? 'diegoPachecoResume' : 'DiegoPachecoCurriculum'}
            target='_blank'
            rel='noopener noreferrer'>
            <button className={styles.navOption}>{!lang ? 'CV↓' : 'CV↓'}</button>
          </a>
          <button
            className={styles.navOption}
            onClick={handleModalOpen}>
            {!lang ? 'Contact' : 'Contacto'}
          </button>

          <button
            className={styles.navOption}
            onClick={handleLangToggle}>
            <TranslateIcon />
          </button>
        </div>
      </nav>
      <ContactModal
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
