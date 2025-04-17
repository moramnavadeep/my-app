import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Company from "./components/Companies/Company";
import Residence from "./components/Residence/Residence";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/getstarted/GetStarted";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Company />
        <Residence />

        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
