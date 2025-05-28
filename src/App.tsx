import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import { NavBar } from './components/NavBar';
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
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
