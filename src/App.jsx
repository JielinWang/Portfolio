import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import css from "./styles/app.module.scss";
import Footer from "./components/Footer/Footer";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
