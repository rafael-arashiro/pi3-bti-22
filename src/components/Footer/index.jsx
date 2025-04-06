import styles from "./Footer.module.css";

function Container({ children }) {
  return <section className={styles.container}>{children}</section>;
}

export default Container;
