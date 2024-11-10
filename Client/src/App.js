import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Featured from './Components/Featured/Featured';
import Newarrived from './Components/Newarrived/Newarrived';
import Footer from './Components/Footer/Footer';
import Tc from './Components/Tc/Tc';
import PrivacyPolicy from './Components/PrivPol/PrivacyPolicy';
import Mostselled from './Components/Mostselled/Mostselled';
import Todaydeal from './Components/Todaydeal/Todaydeal';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';

function App() {
  return (
    <Router>  {/* Use only BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/newarrived" element={<Newarrived />} />
        <Route path="/mostselled" element={<Mostselled />} />
        <Route path="/todaydeal" element={<Todaydeal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/terms" element={<Tc />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
