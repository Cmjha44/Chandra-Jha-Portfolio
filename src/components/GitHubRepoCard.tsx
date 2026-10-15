import React, { useState } from 'react';
import { Star, GitFork, ExternalLink, Copy, Check, Calendar, AlertCircle, BookOpen } from 'lucide-react';
import { GitHubRepo } from '../services/githubService';

interface GitHubRepoCardProps {
  repo: GitHubRepo;
}

export const GitHubRepoCard: React.FC<GitHubRepoCardProps> = ({ repo }) => {
  const [copied, setCopied] = useState(false);

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case 'python':
        return '#3572A5';
      case 'typescript':
        return '#3178C6';
      case 'javascript':
        return '#F7DF1E';
      case 'html':
        return '#E34C26';
      case 'css':
        return '#563D7C';
      case 'shell':
        return '#89E051';
      case 'jupyter notebook':
        return '#DA5B0B';
      default:
        return '#6366F1';
    }
  };

  const handleCopyClone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(repo.clone_url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedDate = new Date(repo.pushed_at || repo.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all flex flex-col justify-between">
      <div>
        {/* Header: Name & Visibility */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate"
              title={repo.name}
            >
              {repo.name}
            </a>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 shrink-0">
            public
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4 min-h-[3rem]">
          {repo.description || 'Public repository by Chandra Jha on GitHub.'}
        </p>

        {/* Topics / Tags */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 mb-4">
            {repo.topics.slice(0, 4).map((topic, tIdx) => (
              <React.Fragment key={topic}>
                <span className="font-mono text-indigo-600 dark:text-indigo-400">#{topic}</span>
                {tIdx < Math.min(repo.topics.length, 4) - 1 && (
                  <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Repository Metadata: Language, Stars, Forks, Updated */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            {repo.language && (
              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: getLanguageColor(repo.language) }}
                />
                <span>{repo.language}</span>
              </div>
            )}

            <div className="flex items-center gap-1 font-mono tabular-nums" title="Stars">
              <Star className="w-3.5 h-3.5" />
              <span>{repo.stargazers_count}</span>
            </div>

            {repo.forks_count > 0 && (
              <div className="flex items-center gap-1 font-mono tabular-nums" title="Forks">
                <GitFork className="w-3.5 h-3.5" />
                <span>{repo.forks_count}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyClone}
              className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded transition-colors"
              title="Copy clone URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              title="Open in GitHub"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Updated date bar */}
        <div className="mt-2 text-[11px] text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>Updated {formattedDate}</span>
        </div>
      </div>
    </div>
  );
};
