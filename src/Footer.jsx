import { FaLinkedin, FaArrowUp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="mb-10" id="contact">
      <h1 className="text-4xl text-center font-bold my-10">Get in touch!</h1>
      <ul className="flex items-center justify-center gap-8">
        <li>
          <a
            href="https://www.linkedin.com/in/udaya-kumar-s/"
            target="_blank"
            className="block p-[0.2rem] hover:bg-[#00d9ffc1] hover:rounded-lg hover:backdrop-blur-sm transition-all"
          >
            <FaLinkedin className="text-3xl hover:rounded-lg" />
          </a>
        </li>
        <li>
          <a
            href="mailto:udaydavis144@gmail.com"
            target="_blank"
            className="block p-[0.2rem] hover:bg-[#D30302] hover:rounded-lg hover:backdrop-blur-sm transition-all"
          >
            <SiGmail className="text-3xl hover:rounded-lg" />
          </a>
        </li>
      </ul>
      <div className="flex items-center mt-16 justify-center relative">
        <h6 className="text-xs text-center ">Made by Uday!</h6>
        <a
          href="#nav"
          className="absolute right-10 bottom-10  w-10 h-10 flex items-center justify-center  hover:bg-slate-300/40 transition-all duration-300 rounded-[50%]"
        >
          <FaArrowUp className="text-2xl block " />
        </a>
      </div>
    </div>
  );
}

export default Footer;
