import ProjectCard from '../UI/ProjectCard';

const projects = [
  {
    title: 'Workintech',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, esse sed assumenda aliquam minus nobis itaque veniam laborum a amet deleniti dolor magni, ad mollitia voluptates non ut velit nihil!',
    tags: ['react', 'redux', 'axios'],
    image: 'src/assets/images/69bb4825e42350e768340fdbec09d78b.png'
  },
];

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