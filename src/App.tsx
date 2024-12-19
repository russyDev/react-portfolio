import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from 'src/pages/home/homePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
