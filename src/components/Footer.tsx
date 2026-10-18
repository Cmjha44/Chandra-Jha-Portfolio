import React from 'react';
import { ArrowUp, Mail, Linkedin, Github, Download, FileCode } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-stone-200/80 dark:border-stone-800/80 bg-[#FAF9F6] dark:bg-[#151413]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
          <div>
            <span className="font-serif font-medium text-stone-900 dark:text-stone-200">
              {profile.name}
            </span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>New York City</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()} All rights reserved</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/chandra-jha-portfolio-dist.zip"
              download="chandra-jha-portfolio-dist.zip"
              className="inline-flex items-center gap-1 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              title="Download compiled production build"
            >
              <Download className="w-3.5 h-3.5" />
              <span>dist.zip</span>
            </a>
            <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
            <a
              href="/README.md"
              download="README.md"
              className="inline-flex items-center gap-1 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              title="Download project README"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>README</span>
            </a>
            <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              Email
            </a>
            <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors ml-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
