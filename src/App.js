import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<p>Home Page</p>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
