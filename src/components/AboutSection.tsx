import React from 'react';
import { Cpu, Activity, Database, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Background &amp; Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Transforming Complex Workflows into Clear, Intelligent Systems
          </h2>
          <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I am pursuing a Master of Science in Generative Artificial Intelligence at the CUNY School of Professional Studies, building on an academic and operational foundation that bridges business administration, data systems, and process improvement.
            </p>
            <p>
              My professional journey spans mission-critical domains: reconciling pediatric healthcare data against the NYS Early Intervention (EI) Hub, guiding clients through life insurance risk protection and living benefits, mentoring university students in instructional technology, and training in commercial aviation systems checklist protocols. Across all these domains, my focus is identical: diagnosing bottlenecks, eliminating discrepancies, and designing scalable automated solutions.
            </p>
          </div>
        </div>

        {/* 3 Core Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.coreExpertise.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                {item.description}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
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
