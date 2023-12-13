import projects from "../assets/projects";
import Project from "../components/Project";



export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
          <div className="row">
          {projects.map((project, index) =>
            <Project key={index} name={project.name} description={project.description} img={project.img} link={project.link} />
          )}
          </div>
        </div>
    );
  }