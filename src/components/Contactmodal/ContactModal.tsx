import { Box, Modal } from '@mui/material';
import styles from './ContactModal.module.scss'
import { useLanguage } from '../../context/LangContext';

interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

export const ContactModal = ({ open, handleClose }: ContactModalProps) => {
  const { lang } = useLanguage();

  const modalContent = (
    <div className={styles.modalContent}>
      {!lang ? 'Connect with me' : 'Contáctate conmigo'}
      <section className={styles.socialContainer}>
        <a
          className={styles.social}
          href='https://github.com/Diegoaph'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/38/38401.png?w=360'
            alt='github.com/diegoaph'
            className={styles.socialImg}
          />
        </a>
        <a
          className={styles.social}
          href='mailto:Dev.DiegoPacheco@gmail.com?subject=¡Hemos%20visto%20tu%20portfolio!&body=Hola%20Diego!,%20me%20gustar%C3%ADa%20hablar%20contigo'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97'
            alt='Dev.DiegoPacheco@gmail.com'
            className={styles.socialImg}
          />
        </a>
        <a
          className={styles.social}
          href='https://wa.me/+573023449160'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='https://1000marcas.net/wp-content/uploads/2019/11/logotipo-Whatsapp.jpg'
            alt='WhatsApp (+57)302-3449160'
            className={styles.socialImg}
          />
        </a>
        <a
          className={styles.social}
          href='https://linkedin.com/in/diegoaph'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg'
            alt='linkedin.com/in/diegoaph'
            className={styles.socialImg}
          />
        </a>
        <a
          className={styles.social}
          href='https://t.me/pachecohdiego'
          target='_blank'
          rel='noopener noreferrer'>
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
        download={!lang ? 'diegoPachecoResume' : 'DiegoPachecoCurriculum'}
        target='_blank'
        rel='noopener noreferrer'>
        {!lang ? 'Download CV' : 'Descargar CV'}
      </a>
    </div>
  );

  return (
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
          bgcolor: 'transparent',
          boxShadow: 24,
          p: 4,
          minWidth: '350px',
          outline: 0
        }}>
        {modalContent}
      </Box>
    </Modal>
  );
};
