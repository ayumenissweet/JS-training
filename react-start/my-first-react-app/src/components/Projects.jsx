import "../styles/Projects.css";

function Projects({ person }) {
  function displayElements() {
    return person.projects.map((project) => {
      return (
        <li key={project.id}>
          <h3>{project.projectName}</h3>
          <a rel="noopener noreferrer" target="_blank" href={project.visitLink}>
            Visit
          </a>
        </li>
      );
    });
  }

  return (
    <>
      <ul className="projects">{displayElements()}</ul>
    </>
  );
}

export default Projects;
