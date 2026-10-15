import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Professional Experience &amp; Impact
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            A track record of solving critical operational bottlenecks across healthcare data reconciliation, financial protection, educational technology mentorship, and aviation systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-12">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node (clean, solid, no pulsing animation) */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  item.isCurrent
                    ? 'border-indigo-600 bg-white dark:bg-[#0B0F19]'
                    : 'border-slate-400 dark:border-slate-600 bg-slate-200 dark:bg-slate-800'
                }`}
                aria-hidden="true"
              />

              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                      {item.company}
                    </div>
                  </div>

                  {/* Clean unboxed date & status */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-mono tabular-nums">{item.period}</span>
                    {item.isCurrent && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">Active</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Subtitle location & department */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-5">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  {item.department && (
                    <>
                      <span aria-hidden="true">·</span>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{item.department}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Achievements Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Unboxed inline tools & competencies with typographic separators */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Competencies:</span>
                  {item.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-600 dark:text-slate-300">{tech}</span>
                      {idx < item.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
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
