import './Footer.css'; // Import the CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        {/* Replace href values with your actual profile URLs */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-link">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-link">
          Twitter
        </a>
        {/* Add or remove social links as needed */}
      </div>
      <div className="copy-info">
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
