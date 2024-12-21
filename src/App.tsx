import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from 'src/pages/home/homePage';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { ServicesPage } from './pages/services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
