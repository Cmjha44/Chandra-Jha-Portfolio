import React from 'react';
import { Terminal, Cpu, ShieldCheck, Database, Check } from 'lucide-react';
import { SkillCategory } from '../types/portfolio';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const coreCompetencies = [
    {
      title: 'Python programming',
      description: 'Scripting, workflow automation, and structured data manipulation fundamentals.',
      icon: Terminal
    },
    {
      title: 'Google AI Studio orchestration',
      description: 'Generative AI API integration, prompt design, and workflow orchestration.',
      icon: Cpu
    },
    {
      title: 'DevSecOps governance',
      description: 'Responsible AI compliance, ethical model boundaries, and secure operations.',
      icon: ShieldCheck
    },
    {
      title: 'Vector databases',
      description: 'Semantic vector indexing, embedding search, and retrieval-augmented architectures.',
      icon: Database
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-stone-200/80 dark:border-stone-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 block">
            Core Competencies &amp; Skills
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-4">
            Technical foundation and operational capabilities.
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Focused on systems-level AI management, structured workflow design, and regulated operational environments.
          </p>
        </div>

        {/* 4 Highlighted Core Competencies */}
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
                    <Icon className="w-4 h-4" />
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

        {/* Categorized Skills Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 shadow-2xs"
            >
              <h4 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100 mb-1">
                {cat.categoryName}
              </h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-4 leading-relaxed">
                {cat.summary}
              </p>

              <div className="space-y-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between text-xs py-1 border-b border-stone-100 dark:border-stone-800/60 last:border-b-0"
                  >
                    <span
                      className={
                        skill.highlighted
                          ? 'font-medium text-stone-900 dark:text-stone-100'
                          : 'text-stone-600 dark:text-stone-300'
                      }
                    >
                      {skill.name}
                    </span>
                    {skill.highlighted && (
                      <Check className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
