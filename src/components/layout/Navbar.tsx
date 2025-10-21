import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, XIcon, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';
import xLogo from '../../assets/hd-twitter-x-new-logo-png-735811696672788haniphkh2j.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Projects', to: '/projects' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  const iconStyle =
    'transition duration-300 transform hover:scale-110 text-gray-700 dark:text-gray-200 hover:text-yellow-400 hover:drop-shadow-[0_0_6px_#facc15]';

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          MyPortfolio
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`relative group transition duration-300 hover:text-yellow-500 ${
                  location.pathname === link.to ? 'text-yellow-500' : ''
                }`}
              >
                {link.name}
                <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-300 bg-yellow-400"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/Abhishekpandey009" target="_blank" rel="noreferrer" className={iconStyle} aria-label="GitHub Profile">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-pandey-ds/" target="_blank" rel="noreferrer" className={iconStyle} aria-label="LinkedIn Profile">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className={iconStyle}>
            <XIcon size={20} />
          </a>

          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-400 transition duration-300 transform hover:scale-110"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 hover:text-yellow-500 transition ${
                    location.pathname === link.to ? 'text-yellow-500' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 mt-4 text-gray-700 dark:text-gray-200">
            <a
              href="https://github.com/Abhishekpandey009"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition duration-300 transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-pandey-ds/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition duration-300 transform hover:scale-110"
            >
              <Linkedin size={20} />
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition duration-300 transform hover:scale-110"
            >
              <Twitter size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className="hover:text-yellow-400 dark:hover:text-yellow-400 transition duration-300 transform hover:scale-110"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
