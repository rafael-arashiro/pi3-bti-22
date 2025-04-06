import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Input type="text" />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
