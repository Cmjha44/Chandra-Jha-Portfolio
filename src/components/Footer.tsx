import React from 'react';
import { ArrowUp, Mail, Linkedin, Globe, Github } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Brand & copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-900 dark:text-white">
              {profile.name}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()} All rights reserved</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>New York City</span>
          </div>

          {/* Center: Clean links */}
          <div className="flex items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Email
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={profile.gammaPortfolio}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Portfolio Doc
            </a>
            {profile.github && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  GitHub
                </a>
              </>
            )}
          </div>

          {/* Right: Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
