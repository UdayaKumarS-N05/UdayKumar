import { FaLinkedin, FaArrowUp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
function Footer() {
  return (
    <div className="mb-10 my-20" id="contact">
      <h1 className="text-4xl text-center  my-10">Get in touch!</h1>
      <ul className="flex items-center justify-center gap-10">
        <li>
          <motion.a
            whileHover={{ scale: 1.4 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            href="https://www.linkedin.com/in/udaya-kumar-s/"
            target="_blank"
            className="block p-[0.2rem] hover:bg-[#00d9ffc1] hover:rounded-lg hover:backdrop-blur-sm "
          >
            <FaLinkedin className="text-3xl hover:rounded-lg" />
          </motion.a>
        </li>
        <li>
          <motion.a
            whileHover={{ scale: 1.4 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            href="mailto:udaydavis144@gmail.com"
            target="_blank"
            className="block p-[0.2rem] hover:bg-[#D30302] hover:rounded-lg hover:backdrop-blur-sm "
          >
            <SiGmail className="text-3xl hover:rounded-lg" />
          </motion.a>
        </li>
      </ul>
      <div className="flex items-center mt-16 justify-center relative">
        <h6 className="text-xs text-center ">Made by Uday!</h6>
        <motion.a
          whileHover={{ scale: 1.4 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          href="#nav"
          className="absolute right-10 bottom-10  w-10 h-10 flex items-center justify-center  hover:bg-slate-300/40  rounded-[50%] md:-bottom-2 md:bg-slate-300/40"
        >
          <FaArrowUp className="text-2xl block " />
        </motion.a>
      </div>
    </div>
  );
}

export default Footer;
