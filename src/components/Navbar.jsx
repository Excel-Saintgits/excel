import { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import excelLogo from '../assets/excel 2 (1).png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const MenuItem = ({ text, letter, to }) => (
    <li className="flex items-center cursor-pointer">
      <Link
        to={to}
        smooth={true}
        duration={500}
        onClick={() => setActiveItem(to)}
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
      </Link>
    </li>
  );

  MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    letter: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };

  const menuItems = [
    { text: "ABOU", letter: "T", to: "about" },
    { text: "EVENT", letter: "S", to: "events" },
    { text: "GALLER", letter: "Y", to: "gallery" },
    { text: "CONTACT U", letter: "S", to: "contact-us" },
  ];

  return (
    <nav className="bg-white p-8 relative">
      <div className="container mx-auto flex justify-between items-center md:justify-center">
        <img 
          src={excelLogo}
          alt="Excel Logo" 
          className="h-10 w-10 md:hidden"
        />
        
        <ul className="hidden md:flex space-x-32 text-lg font-semibold items-center">
          {menuItems.map((item) => (
            <MenuItem key={item.to} {...item} />
          ))}
        </ul>
        
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? (
            <X className="h-10 w-10 text-[#35374E]" />
          ) : (
            <Menu className="h-10 w-10 text-[#35374E]" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-semibold">
            {menuItems.map((item) => (
              <MenuItem key={item.to} {...item} />
            ))}
          </ul>
        </div>
      )}

      <div className="container mx-auto border-t-2 border-[#0C9E8F] opacity-50 mt-8 w-3/4"></div>
    </nav>
  );
};

export default Navbar;