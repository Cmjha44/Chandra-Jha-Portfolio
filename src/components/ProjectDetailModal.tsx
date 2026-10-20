import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/60 backdrop-blur-xs"
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-white dark:bg-[#1c1a18] border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200/80 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300">
            <Layers className="w-4 h-4 text-stone-500" aria-hidden="true" />
            <span>{project.category}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal dialog"
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          <div>
            <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-2">
              {project.title}
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture & Workflow Sub-note (Prompt 2) */}
          {project.architectureAndWorkflow && (
            <div className="p-5 rounded-xl bg-stone-100/70 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-800 dark:text-stone-200 mb-2">
                <Layers className="w-4 h-4 text-stone-700 dark:text-stone-300" aria-hidden="true" />
                <span>Architecture &amp; Workflow Orchestration</span>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {project.architectureAndWorkflow}
              </p>
            </div>
          )}

          {/* Problem & Solution Callout */}
          <div className="p-5 rounded-xl bg-stone-50 dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              <span>Operational Challenge Solved &amp; Business Impact</span>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-3">
                Key Architectural Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-stone-700 dark:text-stone-300 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact Metrics */}
          {project.impactMetrics && project.impactMetrics.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-3">
                Measurable Impact &amp; Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.impactMetrics.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-stone-100/70 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-800 text-xs font-medium text-stone-800 dark:text-stone-200">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100 mb-2">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-600 dark:text-stone-400">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-stone-800 dark:text-stone-200">{tech}</span>
                  {idx < project.techStack.length - 1 && (
                    <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-200/80 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/60">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 dark:text-stone-900 dark:bg-stone-100 dark:hover:bg-stone-200 rounded-lg transition-colors"
              >
                <span>Live Project Doc</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-700 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
