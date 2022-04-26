import logo from "../images/logo.png";
import Link from "./Link";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a className="logo" href="https://adalab.es/">
        <img src={logo} title="Adalab" alt="logo adalab" />
      </a>
      <nav>
        <ul className="nav">
          <Link
            title="Blog"
            href="https://es.wikipedia.org/wiki/Blog"
            text="Blog"
            openInNewTab={true}
          />

          <Link
            title="Contacto"
            href="https://es.wikipedia.org/wiki/Contacto"
            text="Contacto"
            openInNewTab={false}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
