import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import TimelinePage from './pages/TimelinePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/timeline'} element={<TimelinePage />} />
        <Route path={'/projects'} element={<ProjectsPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
