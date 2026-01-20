import Header from "./components/Header";
import Main from "./components/MainContent";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";

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

      <Footer />
    </>
  );
}

export default App;
