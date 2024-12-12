// Import React and necessary modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './Post';
import Details from './Details';
import Update from './Update';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Post />} />
        <Route path="/details" element={<Details />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
