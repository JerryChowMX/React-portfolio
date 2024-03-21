import './Resume.css'; 

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>
      <p>Here is a brief overview of my professional skills and experiences. For a detailed view, please download my full resume below.</p>

      <h3>Skills</h3>
      <ul className="skills-list">
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        {/* Here I would add more skills as needed */}
      </ul>

      <h3>Experience</h3>
      {/* Example Experience Entry */}
      <div className="experience-entry">
        <h4>Product Director at Vanguardia MX</h4>
        <p className="date">Jan 2023 - Present</p>
        <ul>
          <li>Developed a digital-first approach that boosted our online presence by 100%</li>
          <li>Managed time-sensitive projects, such as user sign-ups and subscriptions models</li>
          <li>Optimized internal workflow and improved team communication</li>
        </ul>
      </div>

      <div className="resume-download">
        <a href="path/to/my_resume.pdf" download="GGC_Resume.pdf" className="resume-download-link">
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
