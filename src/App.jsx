import Header from "./components/Header";
import Main from "./components/MainContent";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import BlueBar from "./components/BlueBar";
import FooterLinks from "./components/FooterLinks"

import './App.css'

function App() {
  return (
    <>


      <Header />
      <section className="jumbo-section">
        <Jumbo />
      </section>

      <section className="card-section">
        <Main />
      </section>

      <BlueBar />
      <FooterLinks />
      <Footer />

    </>
  );
}

export default App;
