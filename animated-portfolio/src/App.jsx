import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Cursor from "./components/cursor/Cursor";
import Technologies from "./components/Technologies/Technologies";
// import Test from "./Test";

const App = () => {
  return <div>
  <Cursor />
  <section id="Homepage">
    <Navbar/>
    <Hero/>
  </section>

  {/* <section><Technologies/></section> */}

  <section id="My Journey"><Parallax type="services"/></section>
  <section><Services/></section>
  <section id="Projects"><Parallax type="portfolio"/></section>
  <Portfolio/>
  <section id="Contact">
    <Contact/>
  </section>
  {/* <Test/>
  <Test/> */}

  </div>;
};

export default App;
