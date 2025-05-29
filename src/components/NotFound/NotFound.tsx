import { useEffect, useRef } from 'react';
import styles from './NotFound.module.scss';
import { useLanguage } from '../../context/LangContext';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
const { lang } = useLanguage();
  useEffect(() => {
   
    const container = containerRef.current;
    const numbers = numbersRef.current;
    const robot = robotRef.current;

    if (container) {
      container.style.opacity = '0';
      container.style.transform = 'translateY(20px)';

      setTimeout(() => {
        container.style.transition = 'all 0.8s ease-out';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      }, 100);
    }

    if (numbers) {
      setTimeout(() => {
        numbers.classList.add(styles.animate);
      }, 300);
    }

    if (robot) {
      setTimeout(() => {
        robot.classList.add(styles.bounce);
      }, 800);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.container}>
      <div className={styles.content}>
        <div
          ref={numbersRef}
          className={styles.numbers}>
          <span className={styles.four}>4</span>
          <span className={styles.zero}>0</span>
          <span className={styles.fourTwo}>4</span>
        </div>

        {/* Robot/Character */}
        <div
          ref={robotRef}
          className={styles.robot}>
          <div className={styles.robotHead}>
            <div className={styles.eye}></div>
            <div className={styles.eye}></div>
            <div className={styles.mouth}></div>
          </div>
          <div className={styles.robotBody}>
            <div className={styles.antenna}></div>
          </div>
        </div>

        <h1 className={styles.title}>{!lang ? '¡Page Not Found!' : '¡Página no encontrada!'}</h1>

        {/* Funny Message */}
        <p className={styles.subtitle}>
          {!lang
            ? 'Yep, i did controled not found pages'
            : 'Sí, también controlé las páginas no encontradas'}
        </p>

        <p className={styles.description}>
          Parece que esta página decidió tomarse unas vacaciones. Pero no te preocupes, hasta los
          errores aquí tienen estilo.
        </p>

        {/* Floating Elements */}
        <div className={styles.floatingElements}>
          <div className={styles.circle}></div>
          <div className={styles.triangle}></div>
          <div className={styles.square}></div>
        </div>

        {/* Action Button */}
        <button
          className={styles.homeButton}
          onClick={() => window.history.back()}>
          <span>Volver atrás</span>
          <div className={styles.buttonGlow}></div>
        </button>
      </div>

      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={styles.dot}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}></div>
        ))}
      </div>
    </div>
  );
}
