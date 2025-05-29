'use client';

import type React from 'react';
import styles from './Cta.module.scss';
import { useLanguage } from '../../context/LangContext';
import { useState } from 'react';
import { ContactModal } from '../Contactmodal/ContactModal';

const Cta: React.FC = () => {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  // const handleStartProject = () => {
  //   window.open(
  //     'mailto:Dev.DiegoPacheco@gmail.com?subject=¡Quiero iniciar un proyecto!&body=Hola Diego, me interesa trabajar contigo en un proyecto web. Me gustaría agendar una consulta.',
  //     '_blank'
  //   );
  // };

  // const handleViewServices = () => {
  //   const servicesSection = document.getElementById('services');
  //   if (servicesSection) {
  //     servicesSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className={styles.heroCta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            {!lang
              ? 'Ready to take your web presence to the next level?'
              : '¿Listo para llevar tu presencia web al siguiente nivel?'}
          </h2>
          <p className={styles.ctaDescription}>
            {!lang
              ? 'I develop custom web solutions that combine attractive design, optimal performance and clean code to help your business stand out online.'
              : 'Desarrollo soluciones web personalizadas que combinan diseño atractivo, rendimiento óptimo y código limpio para ayudar a tu negocio a destacar en línea.'}
          </p>

          <div className={styles.ctaOptions}>
            {/* <button
              className={`${styles.ctaButton} ${styles.primary}`}
              onClick={handleStartProject}>
              <span>{!lang ? 'Start my project' : 'Iniciar mi proyecto'}</span>
              <div className={styles.buttonGlow}></div>
            </button>
            <button
              className={`${styles.ctaButton} ${styles.secondary}`}
              onClick={handleViewServices}>
              <span>{!lang ? 'View my services' : 'Ver mis servicios'}</span>
            </button> */}
            <button
              className={`${styles.ctaButton} ${styles.primary}`}
              onClick={handleModalOpen}>
              <span>{!lang ? 'Contact' : 'Contacto'}</span>
            </button>
          </div>

          <div className={styles.ctaBenefits}>
            <div className={styles.benefit}>
              <span className={styles.checkIcon}>✓</span>
              <span>{!lang ? 'Custom design' : 'Diseño personalizado'}</span>
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkIcon}>✓</span>
              <span>{!lang ? 'Optimized code' : 'Código optimizado'}</span>
            </div>
            <div className={styles.benefit}>
              <span className={styles.checkIcon}>✓</span>
              <span>{!lang ? 'Continuous support' : 'Soporte continuo'}</span>
            </div>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className={styles.floatingElements}>
          <div className={styles.floatingCircle}></div>
          <div className={styles.floatingSquare}></div>
          <div className={styles.floatingTriangle}></div>
        </div>
      </section>
      <ContactModal
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default Cta;
