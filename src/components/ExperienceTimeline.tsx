import React from 'react';
import { Calendar, TrendingUp, Layers } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experience }) => {
  // Separate into the two required overarching categories
  const transformationRoles = experience.filter(
    (e) => e.category === 'Business Transformation using AI' || e.category === 'AI & Systems Architecture'
  );
  const domainOperationsRoles = experience.filter(
    (e) => e.category === 'Domain Expertise & Operations'
  );

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 border-t border-stone-200/80 dark:border-stone-800/80 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 block">
            Work &amp; Professional Background
          </span>
          <h2
            id="experience-heading"
            className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-4"
          >
            Professional Experience &amp; Strategic Impact
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Organized across current focus in strategic AI business transformation and high-governance domain operations across healthcare data reconciliation, financial risk assessment, and aviation safety protocols.
          </p>
        </div>

        {/* =========================================================
            CATEGORY 1: Current Focus: Business Transformation using AI
           ========================================================= */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 pb-4 mb-8 border-b border-stone-200/80 dark:border-stone-800">
            <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300">
              <TrendingUp className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
                Current Focus: Business Transformation using AI
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Strategic AI implementation, executive governance frameworks, process re-engineering, and organizational value creation
              </p>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-stone-300 dark:border-stone-800 space-y-10">
            {transformationRoles.map((item) => (
              <article
                key={item.id}
                aria-labelledby={`role-${item.id}`}
                className="relative group"
              >
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    item.isCurrent
                      ? 'border-stone-900 dark:border-stone-100 bg-stone-900 dark:bg-stone-100'
                      : 'border-stone-400 dark:border-stone-600 bg-[#FAF9F6] dark:bg-[#151413]'
                  }`}
                  aria-hidden="true"
                />

                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 shadow-2xs">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <div>
                      <h4
                        id={`role-${item.id}`}
                        className="font-serif text-lg font-semibold text-stone-900 dark:text-stone-100"
                      >
                        {item.role}
                      </h4>
                      <div className="text-sm font-medium text-stone-600 dark:text-stone-400">
                        {item.company} · {item.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      <time>{item.period}</time>
                      {item.isCurrent && (
                        <span className="ml-1.5 px-2 py-0.5 text-[10px] font-mono rounded bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-semibold">
                          Active
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Standard paragraph formatting without tick marks or bullets */}
                  <div className="space-y-3 mt-4 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {item.achievements.map((ach, aIdx) => (
                      <p key={aIdx}>{ach}</p>
                    ))}
                  </div>

                  {/* Technologies / Strategic Focus */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 mt-5 pt-3 border-t border-stone-100 dark:border-stone-800/80">
                    <span className="font-medium text-stone-700 dark:text-stone-300">Strategic Focus:</span>
                    {item.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="font-mono text-[11px] text-stone-700 dark:text-stone-300">{tech}</span>
                        {tIdx < item.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =========================================================
            CATEGORY 2: Domain Expertise & Operations
           ========================================================= */}
        <div>
          <div className="flex items-center gap-2.5 pb-4 mb-8 border-b border-stone-200/80 dark:border-stone-800">
            <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300">
              <Layers className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
                Domain Expertise &amp; Operations
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Healthcare data governance, actuarial risk assessment, regulatory compliance, and high-consequence operations
              </p>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-stone-300 dark:border-stone-800 space-y-10">
            {domainOperationsRoles.map((item) => (
              <article
                key={item.id}
                aria-labelledby={`role-${item.id}`}
                className="relative group"
              >
                {/* Timeline node */}
                <div
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-stone-400 dark:border-stone-600 bg-[#FAF9F6] dark:bg-[#151413]"
                  aria-hidden="true"
                />

                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 shadow-2xs">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <div>
                      <h4
                        id={`role-${item.id}`}
                        className="font-serif text-lg font-semibold text-stone-900 dark:text-stone-100"
                      >
                        {item.role}
                      </h4>
                      <div className="text-sm font-medium text-stone-600 dark:text-stone-400">
                        {item.company} · {item.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      <time>{item.period}</time>
                    </div>
                  </div>

                  {/* Standard paragraph formatting without tick marks or bullets */}
                  <div className="space-y-3 mt-4 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {item.achievements.map((ach, aIdx) => (
                      <p key={aIdx}>{ach}</p>
                    ))}
                  </div>

                  {/* Technologies / Focus Tags */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 mt-5 pt-3 border-t border-stone-100 dark:border-stone-800/80">
                    <span className="font-medium text-stone-700 dark:text-stone-300">Operational Focus:</span>
                    {item.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="font-mono text-[11px] text-stone-700 dark:text-stone-300">{tech}</span>
                        {tIdx < item.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
