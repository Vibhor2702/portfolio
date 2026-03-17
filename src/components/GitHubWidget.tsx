"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, Circle, ArrowUpRight } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

type Status = "loading" | "done" | "error";

// Language → colour mapping (subset; fallback to --muted)
const LANG_COLOR: Record<string, string> = {
  Python:           "#3572a5",
  TypeScript:       "#3178c6",
  JavaScript:       "#f1e05a",
  Rust:             "#dea584",
  Go:               "#00add8",
  HTML:             "#e34c26",
  CSS:              "#563d7c",
  "Jupyter Notebook": "#da5b0b",
  Shell:            "#89e051",
  C:                "#555555",
  "C++":            "#f34b7d",
};

// ── Skeleton ─────────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="glass-card animate-pulse rounded-2xl p-5 space-y-4">
      <div className="h-4 w-1/2 rounded-full bg-[var(--surface-strong)]" />
      <div className="space-y-2">
        <div className="h-3 w-full rounded-full bg-[var(--surface-strong)]" />
        <div className="h-3 w-3/4 rounded-full bg-[var(--surface-strong)]" />
      </div>
      <div className="flex gap-4 pt-1">
        <div className="h-3 w-14 rounded-full bg-[var(--surface-strong)]" />
        <div className="h-3 w-10 rounded-full bg-[var(--surface-strong)]" />
        <div className="h-3 w-10 rounded-full bg-[var(--surface-strong)]" />
      </div>
    </div>
  );
}

// ── Repo Card ─────────────────────────────────────────────────────────────────

function RepoCard({ repo }: { repo: Repo }) {
  const langColor = repo.language ? (LANG_COLOR[repo.language] ?? "#8b949e") : undefined;
  const updatedDate = new Date(repo.updated_at).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="glass-card hover-glow group flex flex-col gap-4 rounded-2xl p-5 no-underline transition-transform duration-200 hover:-translate-y-1"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <p className="font-[family:var(--font-heading)] text-[1.05rem] font-semibold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-150">
          {repo.name}
        </p>
        <ArrowUpRight
          size={15}
          className="mt-0.5 shrink-0 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-150"
        />
      </div>

      {/* Description */}
      {repo.description ? (
        <p className="line-clamp-2 text-sm leading-6 text-[var(--muted)]">
          {repo.description}
        </p>
      ) : (
        <p className="text-sm italic text-[var(--border)]">No description</p>
      )}

      {/* Metadata row */}
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--muted)]">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <Circle
              size={9}
              fill={langColor}
              color={langColor}
              strokeWidth={0}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={11} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={11} />
          {repo.forks_count}
        </span>
        <span className="ml-auto font-[family:var(--font-body)] text-[0.68rem] uppercase tracking-[0.12em] text-[var(--border)]">
          {updatedDate}
        </span>
      </div>
    </a>
  );
}

// ── Widget ────────────────────────────────────────────────────────────────────

export function GitHubWidget() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    fetch(
      "https://api.github.com/users/Vibhor2702/repos?sort=updated&direction=desc&per_page=4&type=public",
      { headers: { Accept: "application/vnd.github+json" } }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
        return res.json() as Promise<Repo[]>;
      })
      .then((data) => {
        if (!cancelled) {
          setRepos(data);
          setStatus("done");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      className="section-shell py-20 sm:py-24"
      aria-labelledby="github-activity-heading"
    >
      {/* Section header */}
      <div className="mb-12 max-w-3xl space-y-4">
        <p className="section-kicker">Live Activity</p>
        <h2
          id="github-activity-heading"
          className="section-title text-4xl sm:text-5xl"
        >
          GitHub
        </h2>
        <p className="section-copy">
          Most recently updated public repositories, fetched live from the
          GitHub REST API.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {status === "loading" &&
          Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}

        {status === "error" && (
          <p className="col-span-full text-sm text-[var(--muted)]">
            Unable to reach GitHub API right now — check back later.
          </p>
        )}

        {status === "done" &&
          repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </div>

      {/* Footer link */}
      <div className="mt-8 text-right">
        <a
          href="https://github.com/Vibhor2702"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-150"
        >
          View all repositories on GitHub
          <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}
