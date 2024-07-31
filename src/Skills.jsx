const skills = [
  {
    name: "HTML5",
    link: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    name: "CSS",
    link: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
  },
  {
    name: "JavaScript",
    link: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    name: "Tailwind CSS",
    link: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
  },
  {
    name: "ReactJS",
    link: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  },
  {
    name: "React Router",
    link: "https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png",
  },
  {
    name: "Redux",
    link: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
  },
  {
    name: "TanStack Query",
    link: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
  },
  {
    name: "Git",
    link: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  },
  {
    name: "Github",
    link: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
  },
];

function Skills() {
  return (
    // <div className="mb-10 md:w-screen border" id="skills">
    //   <h2 className="text-4xl text-center  my-10 ">Skills</h2>
    //   <div className=" marquee-horizontal border border-red-400 ">
    //     <div className="track-horizontal">
    //       {skills.map((skill) => (
    //         <span key={skill.name} className="w-16 marquee-item">
    //           <img src={skill.link} alt={skill.name} />
    //         </span>
    //       ))}
    //     </div>
    //   </div>
    // </div>.
    <div className="mb-10 md:w-screen" id="skills">
      <h2 className="text-4xl text-center  my-10 ">Skills</h2>
      <ul className="flex items-center  justify-between">
        {skills.map((skill) => (
          <li key={skill.name} className="w-16">
            <img src={skill.link} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
