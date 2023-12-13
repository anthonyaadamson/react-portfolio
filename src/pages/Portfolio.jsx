import projects from "../assets/projects";
import Project from "../components/Project";



export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
        {projects.map((project, index) =>
        <Project key={index} name={project.name} description={project.description} img={project.img} />
        )}
        </div>
    );
  }