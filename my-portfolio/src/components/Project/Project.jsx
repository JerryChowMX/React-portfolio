import PropTypes from 'prop-types'; 
import './Project.css'; 

const Project = ({ title, description, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={`Screenshot of ${title}`} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
};

export default Project;
