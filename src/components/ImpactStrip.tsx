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
    <section className="py-8 border-y border-stone-200/80 dark:border-stone-800/80 bg-[#FAF9F6]/60 dark:bg-[#151413]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100 tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-stone-800 dark:text-stone-200 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-snug">
                {stat.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
