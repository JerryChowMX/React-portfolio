import Project from '../../components/Project/Project'; 
import './Portfolio.css'; 

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a brief description of Project 1.',
    imageUrl: 'path/to/image1.jpg',
    liveUrl: 'https://liveurl.com/project1',
    githubUrl: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a brief description of Project 2.',
    imageUrl: 'path/to/image2.jpg',
    liveUrl: 'https://liveurl.com/project2',
    githubUrl: 'https://github.com/yourusername/project2',
  },
  // Here I'll add more projects as needed
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
