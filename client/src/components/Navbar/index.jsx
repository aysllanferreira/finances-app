import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Navbar.scss';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Features', id: 'features' },
  { name: 'Benefits', id: 'benefits' },
  { name: 'Examples', id: 'examples' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Testimonial', id: 'testimonial' },
  { name: 'Contact', id: 'contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="Navbar">
      <div className="Navbar__logo">
        <Link to="/">Finance Star</Link>
      </div>

      <ul className="Navbar__items">
        {navItems.map((item) => (
          <li key={item.id}>
            <button type="button">
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="Navbar__menu">
        {isMenuOpen ? (
          <AiOutlineClose
            className="Navbar__menu__icon"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <AiOutlineMenu
            className="Navbar__menu__icon"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      <div className="invisible_div" />

      <div className={isMenuOpen ? 'Navbar__mobile__items' : 'hidden'}>
        {navItems.map((item) => (
          <li key={item.id}>
            <button type="button">
              {item.name}
            </button>
          </li>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
