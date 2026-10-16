export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  pushed_at: string;
  clone_url: string;
  default_branch: string;
  homepage: string | null;
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload?: {
    commits?: {
      message: string;
      sha: string;
    }[];
    action?: string;
    ref?: string;
  };
}

export interface GitHubDataResult {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  events: GitHubEvent[];
  rateLimited: boolean;
  error: string | null;
  lastFetched: number;
}

const CACHE_KEY_PREFIX = 'gh_cache_';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

export async function fetchGitHubPortfolioData(username = 'Cmjha44'): Promise<GitHubDataResult> {
  const cacheKey = `${CACHE_KEY_PREFIX}${username.toLowerCase()}`;

  // Try reading from sessionStorage to respect rate limits
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const parsed: GitHubDataResult = JSON.parse(cached);
      if (Date.now() - parsed.lastFetched < CACHE_TTL_MS) {
        return parsed;
      }
    }
  } catch {
    // ignore storage error
  }

  const result: GitHubDataResult = {
    user: null,
    repos: [],
    events: [],
    rateLimited: false,
    error: null,
    lastFetched: Date.now()
  };

  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json'
    };

    // Parallel fetch user profile, repos, and events
    const [userRes, reposRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { headers }),
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=30`, { headers }),
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}/events/public?per_page=15`, { headers })
    ]);

    if (userRes.status === 403 || reposRes.status === 403) {
      result.rateLimited = true;
      result.error = 'GitHub API rate limit reached (60 req/hr). Showing cached / portfolio data.';
      return result;
    }

    if (!userRes.ok) {
      result.error = `User not found or GitHub API error (${userRes.status})`;
      return result;
    }

    result.user = await userRes.json();

    if (reposRes.ok) {
      result.repos = await reposRes.json();
    }

    if (eventsRes.ok) {
      result.events = await eventsRes.json();
    }

    // Cache successful fetch
    try {
      sessionStorage.setItem(cacheKey, JSON.stringify(result));
    } catch {
      // ignore
    }

    return result;
  } catch (err: any) {
    result.error = err?.message || 'Network error connecting to GitHub API';
    return result;
  }
}
