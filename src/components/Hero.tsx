import React from 'react';
import { ArrowDown, Mail, Linkedin, Github, Globe, FileText, Sparkles } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Subtle ambient gradient mesh */}
      <div
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-10 -z-10 w-80 h-80 bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Applied AI &amp; Enterprise Systems</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance mb-4">
              {profile.name}
              <span className="block text-2xl sm:text-3xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mt-2">
                {profile.headline}
              </span>
            </h1>

            {/* Sub-headline / Credentials */}
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-5">
              {profile.subheadline}
            </p>

            {/* Lead Narrative Elevator Pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {profile.summary}
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg shadow-sm transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg shadow-2xs transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Get in Touch</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Professional Direct Links */}
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
              <span className="font-medium text-slate-700 dark:text-slate-300">Connect:</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
              {profile.github && (
                <>
                  <span aria-hidden="true">·</span>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    title="GitHub Repositories"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Visual Container & Editorial Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle decorative glow outline */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 blur-lg" />

              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
                <img
                  src={profile.avatarUrl}
                  alt={`${profile.name} — Professional Portrait`}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-square object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/src/assets/images/chandra_jha_portrait_1792048475063.jpg' && !target.src.includes('chandra_jha_portrait')) {
                      target.src = '/src/assets/images/chandra_jha_portrait_1792048475063.jpg';
                    } else {
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }
                  }}
                />
                <div
                  style={{ display: 'none' }}
                  className="w-full aspect-square flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 text-3xl font-bold">
                    CJ
                  </div>
                  <h3 className="text-xl font-bold">{profile.name}</h3>
                  <p className="text-xs text-indigo-300 mt-1">{profile.location}</p>
                </div>

                {/* Subtle caption bar */}
                <div className="px-5 py-3.5 bg-slate-50/90 dark:bg-slate-900/90 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-white">CUNY SPS</span> · MS in Generative AI
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">New York, NY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
