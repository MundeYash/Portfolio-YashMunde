import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  SkyCanvas,
} from "./components";
import { ThemeContext } from "./ThemeContext";
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary dark:bg-white transition-colors duration-300">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center dark:bg-cyan-100 transition-colors duration-300">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          {theme === "light" ? <StarsCanvas /> : <SkyCanvas />}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
