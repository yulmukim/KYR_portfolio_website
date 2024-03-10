import './App.css';
import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SkiisPage from './pages/SkillsPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="skills" element={<SkiisPage />}></Route>
          <Route path="portfolio" element={<PortfolioPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
