import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Globe, Contrast } from 'lucide-react';
import { SupportedLanguage, translations } from '../data/translations';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  onOpenResume: () => void;
  currentLang: SupportedLanguage;
  onSelectLang: (lang: SupportedLanguage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  highContrast,
  setHighContrast,
  onOpenResume,
  currentLang,
  onSelectLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const toggleLanguage = () => {
    onSelectLang(currentLang === 'en' ? 'ne' : 'en');
  };

  return (
    <header
      role="banner"
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF9F6]/90 dark:bg-[#151413]/90 backdrop-blur-md shadow-xs border-b border-stone-200/80 dark:border-stone-800/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Skip to Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-stone-900 focus:text-stone-100 dark:focus:bg-stone-100 dark:focus:text-stone-900 focus:rounded-md focus:shadow-lg focus:outline-hidden"
      >
        Skip to main content
      </a>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-6 h-16">
          {/* Wordmark / Brand */}
          <a
            href="#"
            aria-label="Chandra Jha Portfolio Home"
            className="font-serif text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            Chandra Jha
          </a>

          {/* Clean Semantic Nav Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-6 text-sm text-stone-600 dark:text-stone-300"
          >
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

          {/* Accessibility & Preference Controls Toolbar */}
          <div
            role="toolbar"
            aria-label="Display and Language Preferences"
            className="flex items-center gap-2 shrink-0"
          >
            {/* Language Switcher: Only EN & NE (Prompt 4) */}
            <button
              onClick={toggleLanguage}
              title={currentLang === 'en' ? 'नेपाली भाषामा हेर्नुहोस् (Switch to Nepali)' : 'Switch to English'}
              aria-label={`Current language: ${currentLang === 'en' ? 'English' : 'Nepali'}. Click to switch language.`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 rounded-md hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors border border-stone-200/80 dark:border-stone-800 bg-[#FAF9F6] dark:bg-[#151413]"
            >
              <Globe className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
              <span>{currentLang === 'en' ? 'EN' : 'NE'}</span>
            </button>

            {/* Subtle High Contrast Mode Toggle (Prompt 3) */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              aria-pressed={highContrast}
              title={highContrast ? 'High Contrast: Enabled (Click to disable)' : 'High Contrast: Disabled (Click to enable)'}
              aria-label={highContrast ? 'Disable high contrast mode' : 'Enable high contrast mode for improved readability'}
              className={`p-1.5 sm:p-2 rounded-md transition-colors border ${
                highContrast
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100'
                  : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 border-stone-200/80 dark:border-stone-800 bg-[#FAF9F6] dark:bg-[#151413] hover:bg-stone-200/60 dark:hover:bg-stone-800'
              }`}
            >
              <Contrast className="w-3.5 sm:w-4 h-3.5 sm:h-4" aria-hidden="true" />
            </button>

            {/* Dark/Light mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-pressed={darkMode}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              className="p-1.5 sm:p-2 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 rounded-md hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors border border-stone-200/80 dark:border-stone-800 bg-[#FAF9F6] dark:bg-[#151413]"
            >
              {darkMode ? (
                <Sun className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-500" aria-hidden="true" />
              ) : (
                <Moon className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-stone-700" aria-hidden="true" />
              )}
            </button>

            {/* Resume modal trigger button */}
            <button
              onClick={onOpenResume}
              aria-label="Open Curriculum Vitae resume modal"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-100 bg-stone-900 hover:bg-stone-800 dark:text-stone-900 dark:bg-stone-100 dark:hover:bg-stone-200 rounded-md transition-colors whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.resume}</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="p-1.5 md:hidden text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile Navigation Menu"
            className="md:hidden py-4 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-3"
          >
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
                <button
                  onClick={() => {
                    onSelectLang('en');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2 py-1 text-xs rounded ${
                    currentLang === 'en'
                      ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-bold'
                      : 'text-stone-600 dark:text-stone-400'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    onSelectLang('ne');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2 py-1 text-xs rounded ${
                    currentLang === 'ne'
                      ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-bold'
                      : 'text-stone-600 dark:text-stone-400'
                  }`}
                >
                  नेपाली
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              aria-label="Open Curriculum Vitae resume modal"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-100 bg-stone-900 dark:text-stone-900 dark:bg-stone-100 rounded-md mt-1"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.resume}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
