import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './sections/AboutMe/AboutMe';
import Contact from './sections/Contact/Contact';
import Portfolio from './sections/Portfolio/Portfolio';
import Resume from './sections/Resume/Resume';
import './index.css'; 

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          {/* Redirect to AboutMe as the default route if no other route matches */}
          <Route path="*" element={<AboutMe />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
