import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { EducationItem, CertificationItem, HonorItem } from '../types/portfolio';

interface EducationSectionProps {
  education: EducationItem[];
  certifications: CertificationItem[];
  honors: HonorItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  certifications,
  honors
}) => {
  return (
    <section id="education" className="py-20 border-t border-stone-200/80 dark:border-stone-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 block">
            Academic Background
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-4">
            Education &amp; Academic Credentials
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Graduate study in Generative AI for business transformation and undergraduate foundation in Information Systems at the City University of New York.
          </p>
        </div>

        {/* Clean Degrees List */}
        <div className="space-y-6 mb-16">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 shadow-2xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
                    {edu.degree} in {edu.major}
                  </h3>
                  <div className="text-sm font-medium text-stone-600 dark:text-stone-400">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {edu.honors && (
                <div className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 dark:text-amber-400 mt-1 mb-3">
                  <Award className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{edu.honors}</span>
                </div>
              )}

              {edu.programOverview && (
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-2 mb-4">
                  {edu.programOverview}
                </p>
              )}

              {/* Coursework Topics without GAI codes or credits */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2.5">
                    Coursework &amp; Subject Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 text-xs rounded-md bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights in standard paragraph formatting without tick marks or bullets */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="space-y-2 mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {edu.highlights.map((hl, hIdx) => (
                    <p key={hIdx}>{hl}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Strip */}
        <div>
          <h3 className="font-serif text-xl font-semibold text-stone-900 dark:text-stone-100 mb-6">
            Professional Certifications &amp; Licenses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-stone-50/80 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-stone-400 dark:text-stone-500 mb-1">
                    {cert.category}
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-stone-900 dark:text-stone-100 mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
