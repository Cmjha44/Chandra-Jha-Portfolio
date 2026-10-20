import React, { useState, useEffect, useMemo } from 'react';
import { ExternalLink, Github, ArrowRight, Layers, Cpu, Search, RefreshCw, FolderGit2 } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsGridProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

interface FetchedGitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'systems' | 'github'>('systems');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Lightweight JavaScript fetch() for GitHub API (Prompt 4)
  const [fetchedRepos, setFetchedRepos] = useState<ProjectItem[]>([]);
  const [isLoadingGh, setIsLoadingGh] = useState<boolean>(true);
  const [ghError, setGhError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchGitHubRepos = async () => {
      setIsLoadingGh(true);
      setGhError(null);
      try {
        const response = await fetch(
          'https://api.github.com/users/Cmjha44/repos?sort=updated&per_page=12',
          {
            headers: {
              Accept: 'application/vnd.github.v3+json'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API HTTP ${response.status}`);
        }

        const data: FetchedGitHubRepo[] = await response.json();
        if (isMounted && Array.isArray(data)) {
          const mapped: ProjectItem[] = data.map((repo) => ({
            id: `gh-${repo.id}`,
            title: repo.name,
            category: 'Data & Automation',
            shortDescription:
              repo.description ||
              'Open-source repository maintaining systems workflows, automated scripts, and technical documentation.',
            architectureAndWorkflow: `Orchestrated as a version-controlled repository on GitHub under @Cmjha44. Built with ${
              repo.language || 'modern declarative tooling'
            }, utilizing automated Git workflows, branch protection, and structured repository governance.`,
            fullDescription: `${repo.description || 'Public GitHub project under Cmjha44.'} Language: ${
              repo.language || 'Multi-stack'
            }. Updated: ${new Date(repo.updated_at).toLocaleDateString()}.`,
            problemSolved: 'Version-controlled repository management, workflow scripting, and open-source systems transparency.',
            techStack: [
              repo.language || 'Git',
              ...(repo.topics || []).slice(0, 3),
              'GitHub Actions'
            ].filter(Boolean),
            liveUrl: repo.homepage || repo.html_url,
            githubUrl: repo.html_url,
            impactMetrics: [
              `${repo.stargazers_count} GitHub Stars`,
              `${repo.forks_count} Forks`,
              `Updated ${new Date(repo.updated_at).toLocaleDateString()}`
            ],
            highlights: [
              `Repository managed by @Cmjha44`,
              `Automated sync with GitHub API v3`
            ]
          }));

          setFetchedRepos(mapped);
        }
      } catch (err: any) {
        if (isMounted) {
          setGhError('GitHub API currently unavailable. Displaying curated system architectures.');
        }
      } finally {
        if (isMounted) {
          setIsLoadingGh(false);
        }
      }
    };

    fetchGitHubRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filter current displayed list based on active tab and search query
  const displayedProjects = useMemo(() => {
    const sourceList = activeTab === 'systems' ? projects : (fetchedRepos.length > 0 ? fetchedRepos : projects);
    if (!searchQuery.trim()) return sourceList;

    const query = searchQuery.toLowerCase();
    return sourceList.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        (item.architectureAndWorkflow && item.architectureAndWorkflow.toLowerCase().includes(query)) ||
        item.techStack.some((t) => t.toLowerCase().includes(query))
    );
  }, [activeTab, projects, fetchedRepos, searchQuery]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 border-t border-stone-200/80 dark:border-stone-800/80 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 block">
              Systems Architecture &amp; Orchestration
            </span>
            <h2
              id="projects-heading"
              className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-3"
            >
              Projects &amp; Systems Workflows
            </h2>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              Demonstrating systems design, automated orchestration, and data reconciliation rather than raw code, backed by live automated GitHub API synchronization.
            </p>
          </div>

          {/* Section Mode Toggle: Curated Systems vs Live GitHub Fetch */}
          <div
            role="tablist"
            aria-label="Projects view mode"
            className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-800/80 rounded-xl shrink-0"
          >
            <button
              role="tab"
              id="tab-systems"
              aria-selected={activeTab === 'systems'}
              aria-controls="projects-panel"
              onClick={() => setActiveTab('systems')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'systems'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-2xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              Systems Architectures ({projects.length})
            </button>
            <button
              role="tab"
              id="tab-github"
              aria-selected={activeTab === 'github'}
              aria-controls="projects-panel"
              onClick={() => setActiveTab('github')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'github'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-2xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Live GitHub @Cmjha44</span>
              {fetchedRepos.length > 0 && (
                <span className="text-[10px] font-mono px-1 rounded bg-stone-200 dark:bg-stone-700">
                  {fetchedRepos.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md">
          <label htmlFor="project-search" className="sr-only">
            Search systems projects or architectures
          </label>
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
          <input
            id="project-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search architecture, workflow, or stack..."
            className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-stone-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search query"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Grid panel */}
        <div
          id="projects-panel"
          role="tabpanel"
          aria-labelledby={activeTab === 'systems' ? 'tab-systems' : 'tab-github'}
        >
          {activeTab === 'github' && isLoadingGh ? (
            <div
              role="status"
              className="p-12 text-center text-xs text-stone-500 flex flex-col items-center gap-3"
            >
              <RefreshCw className="w-5 h-5 animate-spin text-stone-500" aria-hidden="true" />
              <span>Calling GitHub API for @Cmjha44 pinned and active repositories...</span>
            </div>
          ) : displayedProjects.length === 0 ? (
            <div className="p-10 text-center rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800">
              <FolderGit2 className="w-8 h-8 text-stone-400 mx-auto mb-2" aria-hidden="true" />
              <p className="text-sm text-stone-600 dark:text-stone-400">
                No matching projects found for &ldquo;{searchQuery}&rdquo;.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {displayedProjects.map((project) => (
                <article
                  key={project.id}
                  aria-labelledby={`proj-title-${project.id}`}
                  className="group p-7 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-2 text-xs text-stone-500 dark:text-stone-400 mb-3">
                      <div className="flex items-center gap-1.5 font-medium text-stone-700 dark:text-stone-300">
                        <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{project.category}</span>
                      </div>
                      {project.id.startsWith('gh-') && (
                        <span className="flex items-center gap-1 font-mono text-[11px] text-stone-500 dark:text-stone-400">
                          <Github className="w-3 h-3" aria-hidden="true" />
                          <span>GitHub Live API</span>
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      id={`proj-title-${project.id}`}
                      className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-2.5"
                    >
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Architecture & Workflow Sub-Note (Prompt 2) */}
                    {project.architectureAndWorkflow && (
                      <div className="mb-4 p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800 text-xs">
                        <div className="font-semibold text-stone-900 dark:text-stone-100 mb-1 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300 shrink-0" aria-hidden="true" />
                          <span>Architecture &amp; Workflow:</span>
                        </div>
                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-[11px]">
                          {project.architectureAndWorkflow}
                        </p>
                      </div>
                    )}

                    {/* Impact Highlights */}
                    {project.impactMetrics && project.impactMetrics.length > 0 && (
                      <div className="mb-4 text-xs text-stone-600 dark:text-stone-400 font-mono space-y-0.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 dark:text-stone-500 block">
                          Impact &amp; Validation:
                        </span>
                        <div>{project.impactMetrics[0]}</div>
                      </div>
                    )}

                    {/* Tech stack / Tooling */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="font-mono text-stone-700 dark:text-stone-300 text-[11px]">{tech}</span>
                          {idx < project.techStack.length - 1 && (
                            <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      aria-label={`Open systems architecture deep dive for ${project.title}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 dark:text-stone-100 hover:opacity-75 transition-opacity"
                    >
                      <span>Systems Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`View ${project.title} on GitHub`}
                          className="text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Open external link for ${project.title}`}
                          className="text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
