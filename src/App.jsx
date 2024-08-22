import Footer from "./Footer";
import Home from "./Home";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Skills from "./Skills";
import { motion, useScroll, useSpring } from "framer-motion";
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="p-8">
      <motion.div
        className="fixed top-0 left-0 -right-10 h-2 w-screen bg-slate-950 origin-[0%] sm:sticky "
        style={{ scaleX }}
      />
      <div className="grid mx-9 md:ml-1 font-sans  ">
        <div className=" ">
          <Navigation />
          <Home />
          <Projects />
          <Skills />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
