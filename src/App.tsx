import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from 'src/pages/home/homePage';
import { AboutPage } from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
