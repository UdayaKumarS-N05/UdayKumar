function Project({ project }) {
  return (
    <div
      className="grid grid-cols-3 gap-2 border border-red-200 h-52 my-6 md:flex md:flex-col md:border md:h-fit"
      id="skills"
    >
      <div className="">
        <img src={project.image} alt={project.title} className="h-52" />
      </div>
      <div className="col-span-2 space-y-3">
        <p className="font-bold text-xl">{project.title}</p>
        <p>{project.description}</p>
        <ul className="flex gap-3 md:flex-wrap">
          {project.skills.map((skill) => {
            console.log(skill);
            return (
              <li key={skill} className="border border-red-400 ">
                {skill}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4">
          <button>{project.github}</button>
          <button>{project.live}</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
