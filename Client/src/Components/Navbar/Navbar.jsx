import React, { useState } from 'react';
import './Navbar.css';
import pe_logo3 from './logo.jpg';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { UserRound } from 'lucide-react';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCartClick = (e) => {
    e.preventDefault();
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={pe_logo3} alt="Pearl Essence Logo" className="logo-image" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className="hamburger">&#9776;</span>
        </div>

        {/* Navbar Links for Desktop */}
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Tempered Glass</a></li>
          <li><a href="#collections">Back Covers</a></li>
          <li><a href="#about">Mobile Chargers</a></li>
          <li><a href="#contact">Charging Cable</a></li>
          <li><a href="#tws-case">TWS Case</a></li>
          <li><a href="#camera-lens">Camera Protection Lens</a></li>
        </ul>

        {/* Navbar Icons */}
        <ul className="navbar-links2">
          <li>
            <a href="#search" aria-label="Search">
              <Search size={18} />
              <span className="sr-only">Search</span>
            </a>
          </li>
          <li>
            <a href="#cart" onClick={handleCartClick} aria-label="Shopping Cart">
              <ShoppingCart size={18} />
              <span className="sr-only">Cart</span>
            </a>
          </li>
          <li>
            <a href="#user-account" aria-label="User Account">
              <UserRound size={18} />
              <span className="sr-only">Account</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />

      {/* Mobile Menu Icons */}
      <div className={`mobile-menu-icons ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#search" aria-label="Search">
          <Search size={24} />
        </a>
        <a href="#cart" onClick={handleCartClick} aria-label="Cart">
          <ShoppingCart size={24} />
        </a>
        <a href="#user-account" aria-label="User Account">
          <UserRound size={24} />
        </a>
      </div>
    </>
  );
};

export default Navbar;
