import React from "react";
import styles from "./Projects.module.scss";
import { useLanguage } from "../context/LangContext";

const clients = [
  { name: "DA Haus Mérida", url: "https://dahausmerida.com" },
  { name: "Consultar Nutricionista", url: "https://consultarnutricionista.com" },
  { name: "Siempre Más – Mi Cuenta", url: "https://micuenta.siempremas.com.ar" },
];

const Projects: React.FC = () => {
  const { lang } = useLanguage();
  const title = lang
    ? "Clientes que han confiado en mis servicios"
    : "Clients who have trusted my services";

  const description = lang
    ? "Como desarrollador fullstack, me han delegado el diseño, despliegue, responsividad, identidad digital, seguridad de datos y escalabilidad de sus plataformas."
    : "As a full‑stack developer, I've led design, deployment, responsiveness, digital identity, client data security, and scalability for their platforms.";

  const benefits = lang
    ? ["Diseño", "Despliegue", "Responsividad", "Identidad digital", "Seguridad de datos", "Escalabilidad"]
    : ["Design", "Deployment", "Responsiveness", "Digital identity", "Data security", "Scalability"];

  return (
    <section className={styles.clientsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.benefits}>
          {benefits.map((b) => (
            <span key={b} className={styles.badge}>✓ {b}</span>
          ))}
        </div>
      </div>

      {/* Floating elements inspired by Cta */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCircle}></div>
        <div className={styles.floatingSquare}></div>
        <div className={styles.floatingTriangle}></div>
      </div>

      <div className={styles.grid}>
        {clients.map((client) => (
          <div key={client.url} className={styles.card}>
            <div className={styles.iframeWrapper}>
              {/* Some sites may restrict embedding; the link below provides a fallback. */}
              <iframe
                src={client.url}
                title={client.name}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              />
            </div>
            <div className={styles.clientInfo}>
              <span className={styles.clientName}>{client.name}</span>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.clientLink}
              >
                {lang ? "Ver sitio" : "Visit site"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
