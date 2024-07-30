import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "Fast React Pizza",
    description:
      "A beautifully designed SPA (Single Page Application) using React. The goal was to provide users with a convenient way to order pizzas online",
    image: "src/Fast_React_Pizza.jpg",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React-Router",
      "Redux",
      "Git",
    ],
    github: "github link",
    live: "live link",
  },
  {
    id: 1,
    title: "Fast React Pizza",
    description:
      "A beautifully designed SPA (Single Page Application) using React. The goal was to provide users with a convenient way to order pizzas online",
    image: "src/Fast_React_Pizza.jpg",
    skills: ["HTML", "CSS", "JavaScript", "React", "React-Router", "Redux"],
    github: "github link",
    live: "live link",
  },
  {
    id: 1,
    title: "Fast React Pizza",
    description:
      "A beautifully designed SPA (Single Page Application) using React. The goal was to provide users with a convenient way to order pizzas online",
    image: "src/Fast_React_Pizza.jpg",
    skills: ["HTML", "CSS", "JavaScript", "React", "React-Router", "Redux"],
    github: "github link",
    live: "live link",
  },
];

function Projects() {
  return (
    <section id="projects" className="md:w-screen">
      <h1 className="text-center text-4xl mb-16">Projects</h1>

      <div className="md:w-full">
        {projects.map((project) => {
          console.log(project);
          return <Project project={project} key={project.id} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
