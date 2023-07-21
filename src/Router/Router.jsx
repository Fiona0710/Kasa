import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'; // Adjust the import path for the Home component
import Lodging from '../pages/Lodging/Lodging'; // Adjust the import path for the Lodging component
import About from '../pages/About/About'; // Adjust the import path for the About component
import Error from '../pages/Error/Error'; // Adjust the import path for the Error component

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lodging" element={<Lodging />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRouter;