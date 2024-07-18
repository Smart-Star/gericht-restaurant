/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../assets';
import { navLinks } from '../../constants';
import './navbar.css';

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu((menu) => !menu);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {navLinks.map((link) => (
          <li key={link.label} className="p__opensans">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-login p__opensans">
        <a href="#login">Log In / Register</a>
        <div />
        <a href="/">Book Table</a>
      </div>

      {/* Mobile menu */}
      <div className="app__navbar-smallScreen">
        <button type="button" onClick={handleMenu}>
          <GiHamburgerMenu color="#fff" fontSize={27} />
        </button>

        {toggleMenu && (
          <div className="app__navbar-smallScreen_overlay flex__center slide-bottom">
            <button type="button" onClick={handleMenu}>
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" />
            </button>

            <ul className="app__navbar-smallScreen-links">
              {navLinks.map((link) => (
                <li key={link.label} className="p__opensans" onClick={handleMenu}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Mobile menu */}
    </nav>
  );
};
