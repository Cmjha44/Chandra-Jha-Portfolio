import React from 'react';
import { Calendar, Check } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 border-t border-stone-200/80 dark:border-stone-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 block">
            Work &amp; Professional Background
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-4">
            Professional Experience
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Experience across client life insurance protection, healthcare data reconciliation, instructional technology support, and aviation systems.
          </p>
        </div>

        {/* Clean Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-stone-300 dark:border-stone-800 space-y-10">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline node */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-stone-400 dark:border-stone-600 bg-[#FAF9F6] dark:bg-[#151413]"
                aria-hidden="true"
              />

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 shadow-2xs">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-stone-900 dark:text-stone-100">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-stone-600 dark:text-stone-400">
                      {item.company} · {item.location}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-2 mt-4 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies / Focus Tags */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 mt-5 pt-3 border-t border-stone-100 dark:border-stone-800/80">
                  <span className="font-medium text-stone-700 dark:text-stone-300">Focus:</span>
                  {item.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span className="font-mono text-[11px]">{tech}</span>
                      {tIdx < item.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
