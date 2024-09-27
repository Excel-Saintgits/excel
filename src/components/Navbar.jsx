// Navbar.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import excelLogo from '../assets/excel 2 (1).png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLandingPage = location.pathname === '/';

  const MenuItem = ({ text, letter, to }) => (
    <li className="flex items-center cursor-pointer mx-16">
      <HashLink
        smooth
        to={to}
        onClick={() => {
          setActiveItem(to);
          setIsMenuOpen(false); // Close menu on mobile after click
        }}
        className="flex items-center"
      >
        <span className="text-[#35374E]">{text}</span>
        <span
          className={`w-8 h-8 rounded-full text-white flex justify-center items-center ${
            activeItem === to ? 'bg-[#35374E]' : 'bg-[#0C9E8F] opacity-70'
          }`}
        >
          {letter}
        </span>
      </HashLink>
    </li>
  );

  MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    letter: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };

  // Split the menu items for left and right
  const leftMenuItems = [
    { text: 'ABOU', letter: 'T', to: '/#about' },
    { text: 'EVENT', letter: 'S', to: '/#events' },
  ];

  const rightMenuItems = [
    { text: 'GALLER', letter: 'Y', to: '/#gallery' },
    { text: 'CONTACT U', letter: 'S', to: '/#contact-us' },
  ];

  return (
    <nav className="bg-white py-4 md:py-8 relative">
      {/* Mobile View */}
      <div className="container mx-auto flex items-center justify-between px-4 md:hidden">
        {/* Logo */}
        <Link to="/">
          <img
            src={excelLogo}
            alt="Excel Logo"
            className="h-10 w-10 cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X className="h-8 w-8 text-[#35374E]" />
          ) : (
            <Menu className="h-8 w-8 text-[#35374E]" />
          )}
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex container mx-auto items-center justify-center relative px-4">
        {/* Left Menu Items */}
        {!isLandingPage && (
          <ul className="flex text-lg font-semibold items-center">
            {leftMenuItems.map((item) => (
              <MenuItem key={item.to} {...item} />
            ))}
          </ul>
        )}

        {/* Logo */}
        {!isLandingPage && (
          <div className="absolute left-1/2 transform -translate-x-[100%]">
            <Link to="/">
              <img
                src={excelLogo}
                alt="Excel Logo"
                className="h-12 w-12 cursor-pointer"
              />
            </Link>
          </div>
        )}

        {/* Navbar Content on Landing Page */}
        {isLandingPage && (
          <ul className="flex text-lg font-semibold items-center">
            {leftMenuItems.concat(rightMenuItems).map((item) => (
              <MenuItem key={item.to} {...item} />
            ))}
          </ul>
        )}

        {/* Right Menu Items */}
        {!isLandingPage && (
          <ul className="flex text-lg font-semibold items-center">
            {rightMenuItems.map((item) => (
              <MenuItem key={item.to} {...item} />
            ))}
          </ul>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-semibold">
            {leftMenuItems.concat(rightMenuItems).map((item) => (
              <MenuItem key={item.to} {...item} />
            ))}
          </ul>
        </div>
      )}

      {/* Separator Line */}
      <div
        className={`container mx-auto border-t-2 border-[#0C9E8F] opacity-50 w-3/4 ${
          isLandingPage ? 'mt-8' : 'mt-10'
        }`}
      ></div>
    </nav>
  );
};

export default Navbar;
