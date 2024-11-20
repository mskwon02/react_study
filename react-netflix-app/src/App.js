import requests_defined from "./api/requests_defined";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Row from "./components/Row";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        rUrl={requests_defined.fetchNetflixOriginals}
        isBig={true}
      />
      <Row title="TOP RATED" id="TR" rUrl={requests_defined.fetchTopRated} />
      <Row
        title="COMEDY MOVIES"
        id="CM"
        rUrl={requests_defined.fetchComedyMovies}
      />
      <Row
        title="HORROR MOVIES"
        id="HM"
        rUrl={requests_defined.fetchHorrorMovies}
      />
      <Row
        title="ROMANCE MOVIES"
        id="RM"
        rUrl={requests_defined.fetchRomanceMovies}
      />
      <Footer />
    </div>
  );
}

export default App;
