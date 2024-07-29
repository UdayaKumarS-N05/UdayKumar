import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa6";

const name = "Udaya Kumar";

function Home() {
  return (
    <section id="introduction" className="mt-40 pb-20">
      <div id="name" className="text-7xl mb-2">
        <span className="mr-4">&gt;</span>
        <span>{name}</span>
        {/* <span className="w-2 bg-red-500 h-4 text-center">|</span> */}
      </div>
      <div id="interests" className="mb-8 mt-8 text-xl">
        <span>Front-End Developer</span>
        <span>React Developer</span>
      </div>
      <div id="description">
        <p className="text-lg mb-4 ">Hi,</p>
        <p className="text-2xl">
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
        <p className="text-2xl mt-12">
          Let&apos;s team up and build something amazing together!
        </p>
        <section id="links" className="mt-28 ">
          <ul className="flex gap-36 justify-center">
            <a
              href="https://www.linkedin.com/in/udaya-kumar-s/"
              target="_blank"
              className="block p-[0.2rem] hover:bg-[#00d9ffc1] hover:rounded-lg hover:backdrop-blur-sm transition-all"
            >
              <FaLinkedin className="text-3xl hover:rounded-lg" />
            </a>
            <a
              href="https://github.com/UdayaKumarS-N05"
              target="_blank"
              className="block  p-1 hover:bg-[#B983FF] hover:rounded-3xl transition-all"
            >
              <FaGithub className="text-3xl hover:rounded-lg" />
            </a>
            <a
              href="Udaya_KumarS_Resume_React.pdf"
              download="Udaya_KumarS_Resume_React.pdf"
              className="block p-1"
            >
              <FaFile className="text-3xl hover:scale-110 transition-all hover:rounded-md" />
            </a>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Home;
