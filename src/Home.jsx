import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};
const name = "Udaya Kumar";

function Home() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => name.slice(0, latest));
  console.log(displayText);
  useEffect(() => {
    const controls = animate(count, name.length, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <section
      id="introduction"
      className="mt-40 pb-20 md:w-screen md:text-xl font-sans md:mt-12"
    >
      <div id="name" className="text-7xl font-bold mb-2 md:text-5xl ">
        <span className="mr-4 md:mr-1">&gt;</span>
        <motion.span>{displayText}</motion.span>
        <motion.span
          variants={cursorVariants}
          animate="blinking"
          className="bg-slate-950 text-transparent   inline-block ml-2"
        >
          S
        </motion.span>
      </div>
      <div id="interests" className="mb-8 mt-8 text-xl md:text-base">
        <span>Front-End Developer</span>
        <span>React Developer</span>
      </div>
      <div id="description">
        <p className="text-lg mb-4 md:text-lg">Hi,</p>
        <p className="text-2xl md:text-lg md:pr-4 text-justify">
          I&apos;m eager to step into a Front End Developer role where I can
          unleash my skills in Javascript{" "}
          <img
            src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
            alt=""
            className="inline-block w-6 mx-[0.1rem]"
          />
          , React
          <img
            src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
            alt=""
            className="inline-block w-[1.4rem] mx-[0.1rem]"
          />{" "}
          and more. I thrive on learning new things and making a tangible impact
          in the real world. When I&apos;m not crafting code, you might catch me
          watching Sci-Fi movies or hitting the gym.
        </p>
        <p className="text-2xl mt-12 md:text-lg">
          Let&apos;s team up and build something amazing together!
        </p>
        <section id="links" className="mt-28 md:mt-7">
          <ul className="flex gap-36 justify-center md:gap-20">
            <motion.a
              href="https://www.linkedin.com/in/udaya-kumar-s/"
              target="_blank"
              whileHover={{ scale: 1.4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="block p-[0.2rem] hover:bg-[#00d9ffc1] hover:rounded-lg hover:backdrop-blur-sm "
            >
              <FaLinkedin className="text-3xl hover:rounded-lg" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.4 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              href="https://github.com/UdayaKumarS-N05"
              target="_blank"
              className="block  p-1 hover:bg-[#B983FF] hover:rounded-3xl "
            >
              <FaGithub className="text-3xl hover:rounded-lg" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="Udaya_KumarS_Resume_React.pdf"
              download="Udaya_KumarS_Resume_React.pdf"
              className="block p-1"
            >
              <FaFile className="text-3xl  hover:rounded-md" />
            </motion.a>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Home;
