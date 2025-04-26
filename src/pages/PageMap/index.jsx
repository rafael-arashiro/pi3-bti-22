import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Map from "../../components/Map";
import List from "../../components/List";

import apiUrl from '../../api/api';

function PageMap() {
  const [instituicoes, setInstituicoes] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/v1/instituicoes`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setInstituicoes(data);
      })
      .catch(error => console.error('Erro ao buscar instituições:', error));
  }, []); // ← Array vazio significa: só roda uma vez quando o componente carrega

  return (
    <>
      <Header />
      <Container>
        <Map instituicoes={instituicoes} />
      </Container>
      {/* <Container>
        <List />
      </Container> */}
      <Footer />
    </>
  );
}

export default PageMap;

