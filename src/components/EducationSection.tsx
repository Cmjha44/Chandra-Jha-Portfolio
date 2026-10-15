import React from 'react';
import { GraduationCap, Award, CheckCircle, Calendar } from 'lucide-react';
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
    <section id="education" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Academic Credentials &amp; Honors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Education &amp; Professional Certifications
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            A comprehensive academic foundation spanning applied Generative AI, management information systems, business analytics, and aeronautics.
          </p>
        </div>

        {/* Academic Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {edu.major}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono tabular-nums">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-sans text-slate-700 dark:text-slate-300 font-medium">
                    {edu.institution}
                  </span>
                </div>

                {edu.honors && (
                  <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.honors}</span>
                  </div>
                )}

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="space-y-2 mt-2">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Honors & Awards Bar */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Academic Honors &amp; Dean&apos;s List Recognitions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {honors.map((honor) => (
              <div
                key={honor.id}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-2xs"
              >
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">
                  {honor.title}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {honor.institution}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                  Awarded: {honor.date}
                </div>
                {honor.note && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {honor.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Professional Certifications &amp; Licenses
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.name}
                  </h4>
                </div>
                <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                  {cert.issuer}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>{cert.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
