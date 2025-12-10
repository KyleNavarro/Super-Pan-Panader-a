import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.main}>
      <h3>Kyle Navarro</h3>
      <p>
        @2025. Desarrollado por :
        <a
          href="https://www.linkedin.com/in/kyle-navarro-geek/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kyle Navarro
        </a>
      </p>
    </footer>
  );
};

export default Footer;
