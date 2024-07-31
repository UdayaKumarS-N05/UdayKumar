import { FaMoon } from "react-icons/fa6";

function Navigation() {
  return (
    <nav
      className="flex list-none gap-12  pt-9 pr-6  text-lg w-full place-content-end  md:text-base md:w-screen md:pr-4 md:pt-7  items-center"
      id="nav"
    >
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
      <FaMoon className="items-center" />
    </nav>
  );
}

export default Navigation;
