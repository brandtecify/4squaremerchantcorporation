import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import Contact from './pages/Contact';
import Navbar from './component/NavBar';
import Footer from './component/Footer';



function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/client">Client</Link> | <Link to="/contact">Contact</Link>
      </nav> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/client" element={<Client />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

    </Router>
  );
}

export default App;
