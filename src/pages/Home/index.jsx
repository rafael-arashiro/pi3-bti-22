import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";

//Conexão com o Banco
import apiUrl from '../../api/api';

fetch(`${apiUrl}/api/v1/instituicoes`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Erro ao buscar instituições:', error));


function Home() {
  return (
    <>
      <Header />
      <Container>
        <Form />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
