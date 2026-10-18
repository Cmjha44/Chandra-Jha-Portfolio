import React from 'react';
import { Compass, Trees, Mountain } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 border-t border-stone-200/80 dark:border-stone-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left Column: Reflective Narrative */}
          <div className="md:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 block">
              About &amp; Perspective
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-6">
              Precision in systems, grounded in the outdoors.
            </h2>

            <div className="space-y-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              <p>
                My professional background is rooted in deep administrative diligence and systematic problem solving. From reconciling patient treatment records against the official NYS Early Intervention (EI) Hub to helping families navigate Universal Index Life (IUL) and Term insurance protection, I focus on bringing clarity to intricate rules and data.
              </p>
              <p>
                Currently pursuing my Master of Science in Generative AI at the CUNY School of Professional Studies, I examine how machine learning models, vector databases, and workflow orchestration can be managed responsibly to create genuine organizational value.
              </p>
              <p>
                Beyond work and study, I find balance along hiking trails, in the quiet expanse of pine forests, and on unhurried adventures in nature. Stepping into the outdoors provides the stillness and perspective needed to approach complex technical challenges with patience and clear intent.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-stone-500 dark:text-stone-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Mountain className="w-4 h-4 text-stone-600 dark:text-stone-300" />
                <span>Trail Hiking</span>
              </div>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <div className="flex items-center gap-1.5">
                <Trees className="w-4 h-4 text-stone-600 dark:text-stone-300" />
                <span>Quiet Wilderness</span>
              </div>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-stone-600 dark:text-stone-300" />
                <span>Thoughtful Exploration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Nature & Hiking Themed Image */}
          <div className="md:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800 shadow-xs bg-stone-100 dark:bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
                alt="Tranquil alpine mountain ridge and hiking wilderness"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-stone-50/90 dark:bg-stone-900/90 border-t border-stone-200/80 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                <span className="font-serif italic">Alpine trail reflections</span>
                <span className="font-mono text-[11px]">Nature &amp; Hiking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
