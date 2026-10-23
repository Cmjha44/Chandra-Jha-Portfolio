import React from 'react';
import { Compass, Trees, Mountain } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { SupportedLanguage, translations } from '../data/translations';

interface AboutSectionProps {
  profile: ProfileData;
  currentLang: SupportedLanguage;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, currentLang }) => {
  const t = translations[currentLang].about;

  return (
    <section id="about" className="py-20 border-t border-stone-200/80 dark:border-stone-800/80 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Reflective Narrative */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 block">
              {t.kicker}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-6">
              {t.headline}
            </h2>

            <div className="space-y-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-stone-500 dark:text-stone-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Mountain className="w-4 h-4 text-stone-600 dark:text-stone-300" />
                <span>{t.hiking}</span>
              </div>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <div className="flex items-center gap-1.5">
                <Trees className="w-4 h-4 text-stone-600 dark:text-stone-300" />
                <span>{t.wilderness}</span>
              </div>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-stone-600 dark:text-stone-300" />
                <span>{t.exploration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
