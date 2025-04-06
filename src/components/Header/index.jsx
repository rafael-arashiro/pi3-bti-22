import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <nav>
        <header className={styles.header}>
          <span>Mapeamento Colaborativo de Instituições Sociais</span>
        </header>
        <Link to="/">Home</Link>
        <Link to="/pagemap">Mapa</Link>
      </nav>
    </>
  );
}

export default Header;
