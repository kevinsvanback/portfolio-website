import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import starStyles from './components/Stars.module.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import TimelinePage from './pages/TimelinePage';
import WhiteSpace from './pages/WhiteSpace';


function App() {
  return (
    <div className={starStyles.background}>
      <div className={starStyles.stars} />
      <div className={starStyles.stars2} />
      <div className={starStyles.stars3} />
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/timeline'} element={<TimelinePage />} />
        <Route path={'/projects'} element={<ProjectsPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
      </Routes>
      <WhiteSpace />
      <Footer />
    </div>
  );
}

export default App;
