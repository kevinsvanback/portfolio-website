import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import starStyles from './components/Stars.module.css';
import ufo from './images/ufo.png';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div className={starStyles.background}>
      <div className={starStyles.starContainer}>
        <div className={starStyles.stars} />
        <div className={starStyles.starsX} />
        <div className={starStyles.stars2} />
        <div className={starStyles.stars2X} />
        <div className={starStyles.stars3} />
        <div className={starStyles.stars3X} />
      </div>

      <Header />
      <img className={starStyles.ufo} src={ufo} alt=':)' />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/projects'} element={<ProjectsPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
