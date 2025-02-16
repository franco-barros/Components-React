import React from "react";
import styles from "../../styles/Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} LT Estética Vehicular. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
