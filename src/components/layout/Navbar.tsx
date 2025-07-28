import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400" onClick={closeMenu}>
            Abhishek Pandey
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['/', '/about', '/projects', '/contact'].map((path) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium ${
                  isActive(path)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                } transition-colors duration-300`}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Desktop Only */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="https://github.com/Abhishekpandey009" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/abhishek-pandey-3b3542217/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/shubham_0834" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                <Twitter size={20} />
              </a>
            </div>

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <nav className="flex flex-col py-4 px-8 space-y-4">
          {['/', '/about', '/projects', '/contact'].map((path) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu}
              className={`text-base font-medium ${
                isActive(path) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}

          {/* Social Icons - Mobile */}
          <div className="flex items-center space-x-4 pt-2">
            <a href="https://github.com/Abhishekpandey009" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/abhishek-pandey-3b3542217/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/shubham_0834" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
