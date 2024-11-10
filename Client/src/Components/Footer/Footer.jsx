import React, { useRef } from 'react';
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">AccessZone</h1>
          <p>
            AccessZone focuses on developing an e-commerce platform dedicated to selling a wide range of mobile accessories. The platform will provide
            a user-friendly interface for customers to browse, select, and purchase products online. It aims to cater to a broad audience, including both end-users and retailers.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Discover</h3>
          <ul>
            <li><Link to="/">Home</Link></li> {/* Use Link for routing */}
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>About</h3>
          <ul>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/journal">Journal</Link></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Help</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/partners">Partners</Link></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AccessZone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;