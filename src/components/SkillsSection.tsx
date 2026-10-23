import React from 'react';
import { TrendingUp, ShieldCheck, Cpu, Briefcase } from 'lucide-react';
import { SkillCategory } from '../types/portfolio';
import { SupportedLanguage, translations } from '../data/translations';

interface SkillsSectionProps {
  skills: SkillCategory[];
  currentLang: SupportedLanguage;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, currentLang }) => {
  const t = translations[currentLang].skills;

  const coreCompetencies = [
    {
      title: t.pythonTitle,
      description: t.pythonDesc,
      icon: TrendingUp
    },
    {
      title: t.aiStudioTitle,
      description: t.aiStudioDesc,
      icon: ShieldCheck
    },
    {
      title: t.devSecOpsTitle,
      description: t.devSecOpsDesc,
      icon: Briefcase
    },
    {
      title: t.vectorDbTitle,
      description: t.vectorDbDesc,
      icon: Cpu
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-stone-200/80 dark:border-stone-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 block">
            {t.kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-4">
            {t.headline}
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            {t.subhead}
          </p>
        </div>

        {/* 4 Highlighted Strategic Core Competencies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {coreCompetencies.map((comp) => {
            const Icon = comp.icon;
            return (
              <div
                key={comp.title}
                className="p-5 rounded-xl bg-stone-50/80 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-stone-200/60 dark:bg-stone-800 flex items-center justify-center mb-3 text-stone-700 dark:text-stone-300">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 mb-1.5">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Categorized Skills Breakdown in clean standard paragraph formatting */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <h4 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 mb-1.5">
                  {cat.categoryName}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-3.5 leading-relaxed">
                  {cat.summary}
                </p>
                {/* Standard paragraph formatting without tick marks or bullets */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed pt-3 border-t border-stone-100 dark:border-stone-800">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={
                        skill.highlighted
                          ? 'font-medium text-stone-900 dark:text-stone-100'
                          : 'text-stone-600 dark:text-stone-300'
                      }
                    >
                      {skill.name}
                      {sIdx < cat.skills.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
