import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF9F6]/90 dark:bg-[#151413]/90 backdrop-blur-md shadow-xs border-b border-stone-200/80 dark:border-stone-800/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Wordmark */}
          <a
            href="#"
            className="font-serif text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            Chandra Jha
          </a>

          {/* Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-stone-600 dark:text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action & Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 rounded-md hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors border border-stone-200/80 dark:border-stone-800 bg-[#FAF9F6] dark:bg-[#151413]"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-stone-700" />}
            </button>

            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-stone-100 bg-stone-900 hover:bg-stone-800 dark:text-stone-900 dark:bg-stone-100 dark:hover:bg-stone-200 rounded-md transition-colors whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 py-1"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-100 bg-stone-900 dark:text-stone-900 dark:bg-stone-100 rounded-md mt-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
