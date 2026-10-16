import React, { useState, useEffect, useMemo } from 'react';
import { ExternalLink, Github, ArrowRight, Layers, Sparkles, Search, RefreshCw, AlertCircle, Code2, FolderGit2 } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { GitHubUser, GitHubRepo, GitHubEvent, fetchGitHubPortfolioData } from '../services/githubService';
import { GitHubActivityGraph } from './GitHubActivityGraph';
import { GitHubRepoCard } from './GitHubRepoCard';

interface ProjectsGridProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [githubUsername, setGithubUsername] = useState<string>('Cmjha44');
  const [isEditingUsername, setIsEditingUsername] = useState<boolean>(false);
  const [usernameInput, setUsernameInput] = useState<string>('Cmjha44');

  // GitHub Live state
  const [ghUser, setGhUser] = useState<GitHubUser | null>(null);
  const [ghRepos, setGhRepos] = useState<GitHubRepo[]>([]);
  const [ghEvents, setGhEvents] = useState<GitHubEvent[]>([]);
  const [isLoadingGh, setIsLoadingGh] = useState<boolean>(true);
  const [ghError, setGhError] = useState<string | null>(null);

  const loadGitHubData = async (userToFetch: string) => {
    setIsLoadingGh(true);
    setGhError(null);
    try {
      const res = await fetchGitHubPortfolioData(userToFetch);
      setGhUser(res.user);
      setGhRepos(res.repos);
      setGhEvents(res.events);
      if (res.error) {
        setGhError(res.error);
      }
    } catch (err: any) {
      setGhError(err?.message || 'Failed to load GitHub data');
    } finally {
      setIsLoadingGh(false);
    }
  };

  useEffect(() => {
    loadGitHubData(githubUsername);
  }, [githubUsername]);

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameInput.trim()) return;
    setGithubUsername(usernameInput.trim());
    setIsEditingUsername(false);
  };

  // Convert GitHub repos into compatible project items if needed
  const dynamicGhProjects: ProjectItem[] = useMemo(() => {
    return ghRepos.map((repo) => ({
      id: `gh-repo-${repo.id}`,
      title: repo.name,
      category: 'Data & Automation' as const,
      shortDescription: repo.description || 'Public open-source repository on GitHub.',
      fullDescription: `${repo.description || 'Public GitHub project'} — Default branch: ${repo.default_branch}, Stars: ${repo.stargazers_count}, Forks: ${repo.forks_count}.`,
      problemSolved: 'Open-source system automation and code repository managed through GitHub version control.',
      techStack: [
        repo.language || 'Code',
        ...(repo.topics || []).slice(0, 3),
        'GitHub API'
      ],
      liveUrl: repo.homepage || repo.html_url,
      githubUrl: repo.html_url,
      impactMetrics: [
        `${repo.stargazers_count} GitHub Stars`,
        `${repo.forks_count} Forks`,
        `Last updated ${new Date(repo.updated_at).toLocaleDateString()}`
      ],
      highlights: [
        `Public repository with ${repo.open_issues_count} open issues`,
        `Clone URL: ${repo.clone_url}`
      ],
      featured: repo.stargazers_count > 0 || (repo.topics && repo.topics.length > 0)
    }));
  }, [ghRepos]);

  const categories = [
    'All',
    'Live GitHub Repos',
    'Applied AI & RAG',
    'Data & Automation',
    'Web & EdTech',
    'Financial Systems'
  ];

  // Filtering logic
  const filteredProjects = useMemo(() => {
    let list: ProjectItem[] = [];

    if (activeCategory === 'Live GitHub Repos') {
      list = dynamicGhProjects;
    } else if (activeCategory === 'All') {
      // Merge unique projects, avoiding duplicate titles
      const existingTitles = new Set(projects.map((p) => p.title.toLowerCase()));
      const uniqueGh = dynamicGhProjects.filter(
        (gp) => !existingTitles.has(gp.title.toLowerCase())
      );
      list = [...projects, ...uniqueGh];
    } else {
      list = projects.filter((p) => p.category === activeCategory);
    }

    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase();
    return list.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.techStack.some((t) => t.toLowerCase().includes(query))
    );
  }, [activeCategory, projects, dynamicGhProjects, searchQuery]);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              Open Source &amp; Systems Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2 mb-3">
              Projects &amp; GitHub Repositories
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Live automated GitHub synchronization displaying public repositories, contribution activity graphs, and applied enterprise architectures.
            </p>
          </div>

          {/* GitHub Handle Switcher */}
          <div className="flex items-center gap-2">
            {isEditingUsername ? (
              <form onSubmit={handleUsernameSubmit} className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="GitHub username"
                  className="px-2.5 py-1 text-xs rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500 font-mono"
                />
                <button
                  type="submit"
                  className="px-2.5 py-1 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                >
                  Load
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingUsername(false)}
                  className="px-2 py-1 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <button
                onClick={() => {
                  setUsernameInput(githubUsername);
                  setIsEditingUsername(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>@{githubUsername}</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">(change)</span>
              </button>
            )}
          </div>
        </div>

        {/* GitHub Live Activity Graph Component */}
        <GitHubActivityGraph
          user={ghUser}
          repos={ghRepos}
          events={ghEvents}
          isLoading={isLoadingGh}
          onRefresh={() => loadGitHubData(githubUsername)}
          username={githubUsername}
        />

        {/* Rate limit or sync notice if applicable */}
        {ghError && (
          <div className="mb-8 p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3 text-xs text-amber-800 dark:text-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">GitHub Notice: </span>
              <span>{ghError}</span>
            </div>
          </div>
        )}

        {/* Search & Category Tabs Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
                {cat === 'Live GitHub Repos' && ghRepos.length > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    {ghRepos.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="w-full pl-9 pr-3.5 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* If user filtered strictly to Live GitHub Repos and we have real repo objects */}
        {activeCategory === 'Live GitHub Repos' ? (
          <div>
            {isLoadingGh ? (
              <div className="p-12 text-center text-sm text-slate-500 flex flex-col items-center gap-3">
                <RefreshCw className="w-6 h-6 animate-spin text-indigo-500" />
                <span>Fetching live repositories from GitHub API...</span>
              </div>
            ) : ghRepos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ghRepos.map((repo) => (
                  <GitHubRepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            ) : (
              <div className="p-10 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center space-y-2">
                <FolderGit2 className="w-8 h-8 text-slate-400 mx-auto" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  No public repositories found for @{githubUsername}
                </h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  New public repositories created on GitHub will appear here automatically upon sync.
                </p>
              </div>
            )}
          </div>
        ) : (
          /* General Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredProjects.length === 0 ? (
              <div className="col-span-2 p-12 text-center rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-500">
                  No projects matching &ldquo;{searchQuery}&rdquo;. Try clearing your search query.
                </p>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <div className="flex items-center gap-1.5 font-medium text-indigo-600 dark:text-indigo-400">
                        <Layers className="w-3.5 h-3.5" />
                        <span>{project.category}</span>
                      </div>
                      {project.id.startsWith('gh-repo-') ? (
                        <span className="flex items-center gap-1 text-slate-500 font-mono text-[11px]">
                          <Github className="w-3 h-3" />
                          <span>GitHub Live</span>
                        </span>
                      ) : project.featured ? (
                        <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 text-xs font-semibold">
                          <Sparkles className="w-3 h-3" />
                          <span>Featured Architecture</span>
                        </span>
                      ) : null}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>

                    {/* Impact metric highlight */}
                    {project.impactMetrics && project.impactMetrics.length > 0 && (
                      <div className="mb-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                        <div className="font-semibold text-slate-800 dark:text-slate-200">Outcome Highlight:</div>
                        <div className="leading-snug">{project.impactMetrics[0]}</div>
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="font-mono text-slate-700 dark:text-slate-300">{tech}</span>
                          {idx < project.techStack.length - 1 && (
                            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/btn"
                    >
                      <span>Architecture Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          title="View on GitHub"
                          className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          title="View Live System / Documentation"
                          className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};
