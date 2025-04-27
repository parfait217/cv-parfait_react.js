// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Experience from './pages/Experience';
import Loisirs from './pages/Loisirs';
import Contact from './pages/Contact';
import InstallPWA from './components/InstallPWA';

function App() {
  return (
    <Router basename="/cv-parfait_react.js/">
      <div className="app">
        <InstallPWA />
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/loisirs" element={<Loisirs />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirection pour toutes les routes non trouvées vers l'accueil */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;