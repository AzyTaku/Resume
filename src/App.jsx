import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './layouts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}

        {/* Redirect all unknown routes to homepage */}
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  );
}

export default App;
