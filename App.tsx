import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
