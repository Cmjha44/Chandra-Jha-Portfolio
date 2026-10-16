/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioDataset, ProjectItem } from './types/portfolio';
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

  // Portfolio dataset state with localStorage persistence
  const [dataset, setDataset] = useState<PortfolioDataset>(() => {
    try {
      const saved = localStorage.getItem('chandra_portfolio_dataset_v7');
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
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F19] dark:text-slate-100 flex flex-col selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-400">
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="flex-1">
        <Hero
          profile={dataset.profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ImpactStrip stats={dataset.stats} />

        <AboutSection profile={dataset.profile} />

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

        <SkillsSection skills={dataset.skills} />

        <ContactSection profile={dataset.profile} />
      </main>

      {/* Site Footer */}
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
