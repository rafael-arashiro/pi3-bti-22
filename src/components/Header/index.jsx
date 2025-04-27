import { Link, useLocation } from "react-router-dom";
import styles from './Header.module.css';

function Header() {
  const location = useLocation(); // pega a URL atual

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        Mapeamento Colaborativo de Instituições Sociais
      </h1>
      <nav className={styles.navLinks}>
        {location.pathname === "/" && (
          <Link to="/pagemap">Mapa</Link>
        )}
        {location.pathname === "/pagemap" && (
          <Link to="/">Home</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
