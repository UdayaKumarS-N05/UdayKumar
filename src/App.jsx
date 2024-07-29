import Footer from "./Footer";
import Home from "./Home";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="">
      <div className="grid mx-9">
        <Navigation />
        <Home />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
