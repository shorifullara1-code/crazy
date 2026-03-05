import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Clients', path: '/clients' },
    { name: 'Vision', path: '/vision' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollingText = "This Website IS Owned By SHoriful ISlam,,And Crazy Soul Solution Is Estd ON Savar";

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col">
      {/* Scrolling Text Bar */}
      <div className="bg-brand-accent text-white py-2 overflow-hidden relative shadow-md z-50 flex">
        {/* Ticker Set 1 */}
        <div className="animate-marquee whitespace-nowrap flex shrink-0 min-w-full items-center">
             <span className="mx-8 font-bold text-sm tracking-wide">{scrollingText}</span>
             <span className="mx-8 font-bold text-sm tracking-wide">{scrollingText}</span>
             <span className="mx-8 font-bold text-sm tracking-wide">{scrollingText}</span>
             <span className="mx-8 font-bold text-sm tracking-wide">{scrollingText}</span>
        </div>
        {/* Ticker Set 2 (Duplicate for seamless loop) */}
        <div className="animate-marquee whitespace-nowrap flex shrink-0 min-w-full items-center" aria-hidden="true">
             <span className="mx-8 font-bold text-sm tracking-wide">{scrollingText}</span>
             <span className="mx-8 font-bold text-sm tracking-wide">{scrollingText}</span>
             <span className="mx-8 font-bold text-sm tracking-wide">{scrollingText}</span>
             <span className="mx-8 font-bold text-sm tracking-wide">{scrollingText}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-accent p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading text-2xl font-bold text-white tracking-tight">
              Crazy Soul <span className="text-brand-accent">Solution</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path ? 'text-brand-accent' : 'text-slate-300 hover:text-brand-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-accent hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5 text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-slate-800 border-t border-slate-700 shadow-xl">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-brand-accent' : 'text-slate-300 hover:text-brand-accent'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-brand-accent text-white text-center py-3 rounded-lg font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;