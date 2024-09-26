import { useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types
import { Menu, X } from 'lucide-react';
import excelLogo from '../assets/excel 2 (1).png'; // Importing the image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // MenuItem component with props validation
  const MenuItem = ({ text, letter }) => (
    <li className="flex items-center">
      <span className="text-[#35374E]">{text}</span>
      <span className="bg-[#0C9E8F] w-8 h-8 rounded-full text-white flex justify-center items-center opacity-70">
        {letter}
      </span>
    </li>
  );

  // Add prop-types for props validation
  MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    letter: PropTypes.string.isRequired,
  };

  return (
    <nav className="bg-white p-8 relative">
      <div className="container mx-auto flex justify-between items-center md:justify-center">
        {/* Logo for mobile with increased size */}
        <img 
          src={excelLogo} // Using the imported image
          alt="Excel Logo" 
          className="h-10 w-10 md:hidden"  // Increased size of logo for mobile (h-20 w-20)
        />
        
        {/* Centered menu items for desktop */}
        <ul className="hidden md:flex space-x-32 text-lg font-semibold items-center">
          <MenuItem text="ABOU" letter="T" />
          <MenuItem text="EVENT" letter="S" />
          <MenuItem text="GALLER" letter="Y" />
          <MenuItem text="CONTACT U" letter="S" />
        </ul>
        
        {/* Hamburger menu for mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? (
            <X className="h-10 w-10 text-[#35374E]" />
          ) : (
            <Menu className="h-10 w-10 text-[#35374E]" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-semibold">
            <MenuItem text="ABOU" letter="T" />
            <MenuItem text="EVENT" letter="S" />
            <MenuItem text="GALLER" letter="Y" />
            <MenuItem text="CONTACT U" letter="S" />
          </ul>
        </div>
      )}

      <div className="container mx-auto border-t-2 border-[#0C9E8F] opacity-50 mt-8 w-3/4"></div>
    </nav>
  );
};

export default Navbar;
