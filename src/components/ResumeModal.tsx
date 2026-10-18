import React, { useEffect } from 'react';
import { X, Printer, Download, ExternalLink, Mail, MapPin, Linkedin, Award, CheckCircle } from 'lucide-react';
import { PortfolioDataset } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  dataset: PortfolioDataset;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, dataset }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { profile, experience, education, certifications, honors, skills } = dataset;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs"
    >
      <div
        className="relative w-full max-w-4xl my-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (hidden during print) */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Curriculum Vitae / Resume
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-2xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 print:text-black print:bg-white print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
            <h1 id="resume-title" className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black">
              {profile.name}
            </h1>
            <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 print:text-slate-800 mt-1">
              {profile.headline}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {profile.subheadline}
            </p>

            {/* Contact details bar: STRICTLY NO PHONE NUMBER */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{profile.location}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/chandrajha44</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 print:text-slate-800">
              {profile.summary}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-900 dark:text-white print:text-black">
                    <span>{edu.institution}</span>
                    <span className="font-mono tabular-nums text-slate-500 dark:text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-400 print:text-slate-800 font-semibold">
                    {edu.degree} — {edu.major}
                  </div>
                  {edu.honors && (
                    <div className="text-amber-600 dark:text-amber-400 font-medium mt-0.5">
                      {edu.honors}
                    </div>
                  )}
                  {edu.coursework && (
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 print:text-slate-700 mt-1.5">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">Coursework: </span>
                      <span>{edu.coursework.join(' · ')}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-900 dark:text-white print:text-black">
                    <span>
                      {exp.role} · <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{exp.company}</span>
                    </span>
                    <span className="font-mono tabular-nums text-slate-500 dark:text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 mb-2">
                    {exp.location}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-slate-600 dark:text-slate-300 print:text-slate-800">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Honors &amp; Awards
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {honors.map((h) => (
                  <li key={h.id} className="flex justify-between">
                    <span className="font-medium">{h.title} ({h.institution.replace('CUNY ', '')})</span>
                    <span className="font-mono text-slate-400">{h.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Certifications &amp; Credentials
              </h2>
              <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                {certifications.map((c) => (
                  <li key={c.id}>
                    <span className="font-semibold">{c.name}</span> — <span className="text-slate-500">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Key Domain Competencies
            </h2>
            <div className="space-y-2 text-xs">
              {skills.map((cat, idx) => (
                <div key={idx}>
                  <span className="font-semibold text-slate-900 dark:text-white">{cat.categoryName}: </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
