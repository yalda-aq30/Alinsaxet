import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#contact', label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fi' ? 'en' : 'fi');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-950/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-2xl sm:text-3xl font-semibold text-gold-400 tracking-wide transition-colors hover:text-gold-300"
          >
            Alin Saxet
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium text-white/80 hover:text-gold-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-full border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="font-body text-sm font-medium uppercase">
                {language === 'fi' ? 'EN' : 'FI'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-gold-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gold-500/20">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 font-body text-base font-medium text-white/80 hover:text-gold-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
