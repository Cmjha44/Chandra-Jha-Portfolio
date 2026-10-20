/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioDataset, ProjectItem } from './types/portfolio';
import { SupportedLanguage } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactStrip } from './components/ImpactStrip';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

export default function App() {
  // Theme state with localStorage persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Language state with localStorage persistence
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'en' || saved === 'ne') return saved;
    return 'en';
  });

  const handleSelectLang = (lang: SupportedLanguage) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch (e) {
      console.warn('Lang save:', e);
    }
  };

  // Accessibility: High contrast state with localStorage persistence
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return localStorage.getItem('high_contrast') === 'true';
  });

  // Sync high-contrast class to <html>
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
      localStorage.setItem('high_contrast', 'true');
    } else {
      document.documentElement.classList.remove('high-contrast');
      localStorage.setItem('high_contrast', 'false');
    }
  }, [highContrast]);

  // Portfolio dataset state with localStorage persistence
  const [dataset, setDataset] = useState<PortfolioDataset>(() => {
    try {
      const saved = localStorage.getItem('chandra_portfolio_dataset_v14');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile && parsed.projects) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return initialPortfolioData;
  });

  // Modal visibility states
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync theme class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 dark:bg-[#151413] dark:text-stone-100 flex flex-col selection:bg-stone-200 selection:text-stone-900 dark:selection:bg-stone-800 dark:selection:text-stone-100">
      {/* Navigation Bar with Language Switcher */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        onOpenResume={() => setIsResumeOpen(true)}
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
      />

      {/* Main Content Layout */}
      <main id="main-content" tabIndex={-1} className="flex-1 outline-hidden">
        <Hero
          profile={dataset.profile}
          onOpenResume={() => setIsResumeOpen(true)}
          currentLang={currentLang}
        />

        <ImpactStrip stats={dataset.stats} />

        <AboutSection
          profile={dataset.profile}
          currentLang={currentLang}
        />

        <SkillsSection
          skills={dataset.skills}
          currentLang={currentLang}
        />

        <ExperienceTimeline experience={dataset.experience} />

        <EducationSection
          education={dataset.education}
          certifications={dataset.certifications}
          honors={dataset.honors}
        />

        <ProjectsGrid
          projects={dataset.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <ContactSection
          profile={dataset.profile}
          currentLang={currentLang}
        />
      </main>

      {/* Minimalist Contact & Footer */}
      <Footer profile={dataset.profile} />

      {/* Interactive Resume / CV Lightbox Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        dataset={dataset}
      />

      {/* Project Architectural Deep-Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
