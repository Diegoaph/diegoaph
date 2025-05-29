import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import { NavBar } from './components/NavBar';
import NotFound from './components/NotFound/NotFound';
import { LanguageProvider } from './context/LangContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<Landing />}
          />
          <Route
            path='/home'
            element={<Landing />}
          />
          <Route
            path='*'
            element={<NotFound/>}
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
