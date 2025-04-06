import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Map from "../../components/Map";
import List from "../../components/List";

function PageMap() {
  return (
    <>
      <Header />
      <Container>
        <Map />
      </Container>
      {/* <Container>
        <List />
      </Container> */}
      <Footer />
    </>
  );
}

export default PageMap;
