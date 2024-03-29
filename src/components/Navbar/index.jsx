import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Navbar.scss';
import navItems from '../../constants/navlink';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? 'Nav_scrolled' : 'Navbar'}>
      <div className={isScrolled ? 'Nav_scrolled__logo' : 'Navbar__logo'}>
        <Link to="/">Finance Star</Link>
      </div>

      <ul className={isScrolled ? 'Nav_scrolled__items' : 'Navbar__items'}>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => scrollToId(item.id)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      <div className={isScrolled ? 'Nav_scrolled__menu' : 'Navbar__menu'}>
        {isMenuOpen ? (
          <AiOutlineClose
            className={isScrolled ? 'Nav_scrolled__menu__icon' : 'Navbar__menu__icon'}
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <AiOutlineMenu
            className={isScrolled ? 'Nav_scrolled__menu__icon' : 'Navbar__menu__icon'}
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      <div className="invisible_div" />

      <div className={isMenuOpen ? 'Navbar__mobile__items' : 'hidden'}>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => {
                scrollToId(item.id);
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
