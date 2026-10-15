import React from 'react';

interface ImpactStripProps {
  stats: {
    label: string;
    value: string;
    caption: string;
  }[];
}

export const ImpactStrip: React.FC<ImpactStripProps> = ({ stats }) => {
  return (
    <section className="py-8 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 font-mono tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                {stat.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
