import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./PageNotFound.module.css";


function PageNotFound() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <h2>Ops! Conteúdo não localizado!</h2>
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
