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
import AboutUs from './Components/AboutUs';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
function App() {
  return (
    <Router>  {/* Use only BrowserRouter */}
      <Navbar />
      <Hero/>
      <Featured/>
      <Mostselled/>
      <Todaydeal/>
      <Newarrived/>
      <FAQ/>
      <Contact/>
      <Routes>
        <Route path="/terms" element={<Tc />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
      </Routes>
      <Signup></Signup>
      <Footer />
    </Router>
  );
}

export default App;
