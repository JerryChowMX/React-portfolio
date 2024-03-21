import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './sections/AboutMe/AboutMe';
import Contact from './sections/Contact/Contact';
import Portfolio from './sections/Portfolio/Portfolio';
import Resume from './sections/Resume/Resume';


const Main = () => {
  return (
    <Router>
      <Header />
      <main>
        
        {/* Scroll Restoration or further configurations can be added here */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />

          {/* Here I would add more routes as needed */}
        </Routes>

      </main>
      <Footer />
    </Router>
  );
};

export default Main;
