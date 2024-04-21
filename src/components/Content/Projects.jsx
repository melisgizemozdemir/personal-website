import ProjectCard from '../UI/ProjectCard';



const Projects = () => {
  return (
    <div className="flex flex-wrap">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;