import React, { useState } from 'react';
import { X, RotateCcw, Download, Upload, Plus, Check, Sliders, Shield } from 'lucide-react';
import { PortfolioDataset, ProjectItem } from '../types/portfolio';

interface ProfileCustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  dataset: PortfolioDataset;
  onUpdateDataset: (newDataset: PortfolioDataset) => void;
  onResetDefaults: () => void;
}

export const ProfileCustomizerDrawer: React.FC<ProfileCustomizerDrawerProps> = ({
  isOpen,
  onClose,
  dataset,
  onUpdateDataset,
  onResetDefaults
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'addProject' | 'backup'>('profile');
  const [saveToast, setSaveToast] = useState(false);

  // Form states for profile edits
  const [profileForm, setProfileForm] = useState(dataset.profile);

  // Form states for adding a new project
  const [newProject, setNewProject] = useState<Partial<ProjectItem>>({
    title: '',
    category: 'Applied AI & RAG',
    shortDescription: '',
    fullDescription: '',
    problemSolved: '',
    techStack: ['Python', 'FastAPI', 'Tailwind'],
    impactMetrics: ['Cycle time improved by 40%'],
    highlights: ['Modular component architecture']
  });
  const [techInput, setTechInput] = useState('Python, FastAPI, Tailwind');

  if (!isOpen) return null;

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateDataset({
      ...dataset,
      profile: {
        ...profileForm,
        name: profileForm.name || 'Chandra Jha'
      }
    });
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.shortDescription) return;

    const stack = techInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const createdProject: ProjectItem = {
      id: `custom-proj-${Date.now()}`,
      title: newProject.title || 'Custom System Project',
      category: (newProject.category as any) || 'Applied AI & RAG',
      shortDescription: newProject.shortDescription || '',
      fullDescription: newProject.fullDescription || newProject.shortDescription || '',
      problemSolved: newProject.problemSolved || 'Automating manual operational bottlenecks.',
      techStack: stack.length > 0 ? stack : ['AI Automation', 'Data Systems'],
      impactMetrics: newProject.impactMetrics || ['100% operational reliability'],
      highlights: newProject.highlights || ['Cloud deployed scalable workflow']
    };

    onUpdateDataset({
      ...dataset,
      projects: [createdProject, ...dataset.projects]
    });

    setNewProject({
      title: '',
      category: 'Applied AI & RAG',
      shortDescription: '',
      fullDescription: '',
      problemSolved: '',
      techStack: ['Python', 'FastAPI', 'Tailwind'],
      impactMetrics: ['Cycle time improved by 40%'],
      highlights: ['Modular component architecture']
    });

    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(dataset, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `chandra-jha-portfolio-data-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.profile && parsed.projects) {
          onUpdateDataset(parsed);
          setProfileForm(parsed.profile);
          setSaveToast(true);
          setTimeout(() => setSaveToast(false), 2500);
        }
      } catch (err) {
        window.alert('Invalid portfolio JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-2xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Portfolio Live Customizer
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 bg-slate-50/40 dark:bg-slate-900/40">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-2.5 text-xs font-semibold border-b-2 mr-4 transition-colors ${
              activeTab === 'profile'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Edit Profile
          </button>
          <button
            onClick={() => setActiveTab('addProject')}
            className={`py-2.5 text-xs font-semibold border-b-2 mr-4 transition-colors ${
              activeTab === 'addProject'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Add Project
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`py-2.5 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'backup'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Backup &amp; Reset
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {saveToast && (
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-300">
              <Check className="w-4 h-4 shrink-0" />
              <span>Portfolio configuration updated successfully!</span>
            </div>
          )}

          {activeTab === 'profile' && (
            <form onSubmit={handleProfileSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Professional Headline
                </label>
                <textarea
                  rows={2}
                  value={profileForm.headline}
                  onChange={(e) => setProfileForm({ ...profileForm, headline: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Subheadline / Credentials Line
                </label>
                <input
                  type="text"
                  value={profileForm.subheadline}
                  onChange={(e) => setProfileForm({ ...profileForm, subheadline: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Executive Summary / Elevator Pitch
                </label>
                <textarea
                  rows={4}
                  value={profileForm.summary}
                  onChange={(e) => setProfileForm({ ...profileForm, summary: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={profileForm.email}
                  onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={profileForm.location}
                  onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          )}

          {activeTab === 'addProject' && (
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Agentic RAG Document Pipeline"
                  value={newProject.title || ''}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={newProject.category || 'Applied AI & RAG'}
                  onChange={(e) => setNewProject({ ...newProject, category: e.target.value as any })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                >
                  <option value="Applied AI & RAG">Applied AI &amp; RAG</option>
                  <option value="Data & Automation">Data &amp; Automation</option>
                  <option value="Web & EdTech">Web &amp; EdTech</option>
                  <option value="Financial Systems">Financial Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Short Description *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="1-2 sentences summarizing value and solution"
                  value={newProject.shortDescription || ''}
                  onChange={(e) => setNewProject({ ...newProject, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Tech Stack (comma-separated)
                </label>
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="e.g. Python, LangChain, React, FastAPI"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project to Portfolio</span>
                </button>
              </div>
            </form>
          )}

          {activeTab === 'backup' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1">
                  Export Data JSON
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Download your portfolio configurations and custom projects as a portable JSON backup.
                </p>
                <button
                  onClick={handleExportJSON}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Backup JSON</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1">
                  Import Data JSON
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Restore previously exported portfolio dataset from a local JSON file.
                </p>
                <label className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Select JSON File</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportJSON}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="p-4 rounded-xl bg-red-50/60 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40">
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400 mb-1">
                  Reset to Authentic Defaults
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                  Revert all edits back to the initial resume data from your CUNY SPS profile.
                </p>
                <button
                  onClick={() => {
                    if (window.confirm('Reset all custom edits back to default resume data?')) {
                      onResetDefaults();
                      setProfileForm(dataset.profile);
                      setSaveToast(true);
                      setTimeout(() => setSaveToast(false), 2500);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-red-600 hover:text-red-700 bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/60 rounded-lg"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All to Defaults</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
