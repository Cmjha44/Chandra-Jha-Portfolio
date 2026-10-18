import React from 'react';
import { Mail, Linkedin, Github, FileText, ArrowRight } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { SupportedLanguage, translations } from '../data/translations';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
  currentLang: SupportedLanguage;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume, currentLang }) => {
  const t = translations[currentLang].hero;

  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left Column: Typographic Focus */}
          <div className="md:col-span-8 flex flex-col justify-center">
            {/* Minimalist kicker */}
            <div className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4">
              {t.kicker}
            </div>

            {/* Large Serif Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-100 leading-[1.2] mb-5 text-balance">
              {t.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl mb-8">
              {t.summary}
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-stone-100 bg-stone-900 hover:bg-stone-800 dark:text-stone-900 dark:bg-stone-100 dark:hover:bg-stone-200 rounded-md transition-colors"
              >
                <span>{t.getInTouch}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-300 dark:border-stone-700 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors"
              >
                <FileText className="w-4 h-4 text-stone-500" />
                <span>{t.viewResume}</span>
              </button>
            </div>

            {/* Minimal Direct Links */}
            <div className="flex items-center gap-4 text-xs text-stone-500 dark:text-stone-400 pt-4 border-t border-stone-200/80 dark:border-stone-800">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Editorial Portrait */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative w-48 sm:w-56 md:w-full max-w-[260px] aspect-square rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800 shadow-xs bg-stone-100 dark:bg-stone-900">
              <img
                src={profile.avatarUrl}
                alt={`${profile.name} — Professional Portrait`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/src/assets/images/chandra_jha_portrait_1792048475063.jpg' && !target.src.includes('chandra_jha_portrait')) {
                    target.src = '/src/assets/images/chandra_jha_portrait_1792048475063.jpg';
                  } else {
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }
                }}
              />
              <div
                style={{ display: 'none' }}
                className="w-full h-full flex-col items-center justify-center p-6 bg-stone-800 text-stone-200 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-stone-700 flex items-center justify-center mb-2 font-serif text-xl font-bold">
                  CJ
                </div>
                <h3 className="font-serif text-base font-bold">{profile.name}</h3>
                <p className="text-xs text-stone-400 mt-1">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
