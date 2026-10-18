import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Globe, Download } from 'lucide-react';
import { SupportedLanguage, translations } from '../data/translations';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
  currentLang: SupportedLanguage;
  onSelectLang: (lang: SupportedLanguage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume,
  currentLang,
  onSelectLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.experience, href: '#experience' },
    { name: t.skills, href: '#skills' },
    { name: t.education, href: '#education' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' }
  ];

  const languages: { code: SupportedLanguage; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'ne', label: 'नेपाली', flag: 'NE' },
    { code: 'es', label: 'Español', flag: 'ES' }
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
        <div className="flex items-center justify-between gap-4 sm:gap-6 h-16">
          {/* Wordmark */}
          <a
            href="#"
            className="font-serif text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            Chandra Jha
          </a>

          {/* Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-stone-600 dark:text-stone-300">
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

          {/* Action & Toggle Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                title="Switch Language / भाषा परिवर्तन"
                aria-label="Language switcher"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 rounded-md hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors border border-stone-200/80 dark:border-stone-800 bg-[#FAF9F6] dark:bg-[#151413]"
              >
                <Globe className="w-3.5 h-3.5 text-stone-500" />
                <span>{currentLang.toUpperCase()}</span>
              </button>

              {langMenuOpen && (
                <div
                  className="absolute right-0 mt-1.5 w-32 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg py-1 z-50 text-xs"
                  onClick={() => setLangMenuOpen(false)}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => onSelectLang(l.code)}
                      className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ${
                        currentLang === l.code
                          ? 'font-bold text-stone-900 dark:text-stone-100 bg-stone-50 dark:bg-stone-800/50'
                          : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      <span>{l.label}</span>
                      <span className="font-mono text-[10px] text-stone-400">{l.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark/Light mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-1.5 sm:p-2 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 rounded-md hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors border border-stone-200/80 dark:border-stone-800 bg-[#FAF9F6] dark:bg-[#151413]"
            >
              {darkMode ? <Sun className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-500" /> : <Moon className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-stone-700" />}
            </button>

            {/* Resume button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-100 bg-stone-900 hover:bg-stone-800 dark:text-stone-900 dark:bg-stone-100 dark:hover:bg-stone-200 rounded-md transition-colors whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.resume}</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 md:hidden text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
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

            <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <span className="text-xs text-stone-500">Language:</span>
              <div className="flex gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onSelectLang(l.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1 text-xs rounded ${
                      currentLang === l.code
                        ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-bold'
                        : 'text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-100 bg-stone-900 dark:text-stone-900 dark:bg-stone-100 rounded-md mt-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.resume}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
