'use client';
import { useState } from "react";
import styles from "../styles/projects.module.css";

type Accent = "mint" | "amber" | "coral";

type WebProject = {
  title: string;
  url: string;
  accent: Accent;
  summary: string;
  detail: string;
  tags: string[];
};

type MobileProject = {
  title: string;
  accent: Accent;
  summary: string;
  detail: string;
  tags: string[];
};

const accentColors: Record<Accent, string> = {
  mint: "#7fd9a8",
  amber: "#e8b95c",
  coral: "#e8846f",
};

// Edit these two arrays with your real projects.
const webProjects: WebProject[] = [
  {
    title: "TaskFlow",
    url: "taskflow.app",
    accent: "mint",
    summary:
      "A collaborative task manager with real-time boards and deadlines.",
    detail:
      "Drag-and-drop boards with live sync across teammates, due-date reminders, and activity history per card.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "RecipeBox",
    url: "recipebox.io",
    accent: "amber",
    summary: "Search and save recipes with smart pantry-based suggestions.",
    detail:
      "Suggests recipes based on ingredients you already have, with saved collections and a weekly meal planner.",
    tags: ["Next.js", "Tailwind", "MongoDB"],
  },
  {
    title: "BudgetLine",
    url: "budgetline.app",
    accent: "coral",
    summary:
      "Track monthly spending across accounts with visual breakdowns.",
    detail:
      "Connects multiple accounts into one dashboard with category breakdowns and month-over-month spending trends.",
    tags: ["Vue", "Firebase"],
  },
];

const mobileProjects: MobileProject[] = [
  {
    title: "FitPing",
    accent: "mint",
    summary: "Simple workout reminders that adapt to your weekly schedule.",
    detail:
      "Learns your usual workout days and nudges you at the right time, with quick-log buttons for common exercises.",
    tags: ["React Native", "SQLite"],
  },
  {
    title: "DayJar",
    accent: "amber",
    summary: "A one-line journal app with mood tags and photo memories.",
    detail:
      "Encourages a single daily sentence, tagged with a mood and an optional photo, collected into a scrollable timeline.",
    tags: ["Swift", "CoreData"],
  },
];

function PlaceholderShot({ variant }: { variant: "web" | "mobile" }) {
  return (
    <div
      className={`${styles.shot} ${
        variant === "web" ? styles.shotWeb : styles.shotMobile
      }`}
    >
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="3"
          y="8"
          width="42"
          height="32"
          rx="3"
          stroke="#4d6b5c"
          strokeWidth="2"
        />
        <circle cx="15" cy="18" r="3.2" stroke="#4d6b5c" strokeWidth="2" />
        <path
          d="M3 33L16 22L25 30L33 21L45 32"
          stroke="#4d6b5c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ProjectRow({
  title,
  summary,
  detail,
  tags,
}: {
  title: string;
  summary: string;
  detail: string;
  tags: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.row}>
      <div className={styles.rowHead} onClick={() => setOpen(!open)}>
        <span
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
        >
          ▸
        </span>
        <div className={styles.titleBlock}>
          <p className={styles.projTitle}>{title}</p>
          <p className={styles.summary}>{summary}</p>
          <div className={`${styles.more} ${open ? styles.moreOpen : ""}`}>
            <div className={styles.moreInner}>
              {detail}
              <div className={styles.tags}>
                {tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserWindow({ project }: { project: WebProject }) {
  return (
    <div className={styles.browser}>
      <div className={styles.tabBar}>
        <div className={styles.lights}>
        </div>
        <div className={styles.tab}>
          <span
            className={styles.favicon}
            style={{ background: accentColors[project.accent] }}
          />
          {project.title}
          <span className={styles.close}>×</span>
        </div>
      </div>
      <div className={styles.navBar}>
        <div className={styles.navIcons}>
          <span>‹</span>
          <span>⟳</span>
        </div>
        <div className={styles.urlPill}>
          <span className={styles.u}>{project.url}</span>
        </div>
      </div>
      <div className={styles.deviceContent}>
        <PlaceholderShot variant="web" />
        <ProjectRow
          title={project.title}
          summary={project.summary}
          detail={project.detail}
          tags={project.tags}
        />
      </div>
    </div>
  );
}

function PhoneFrame({ project }: { project: MobileProject }) {
  return (
    <div className={styles.phone}>
      <div className={styles.speaker} />
      <div className={styles.deviceContent}>
        <PlaceholderShot variant="mobile" />
        <ProjectRow
          title={project.title}
          summary={project.summary}
          detail={project.detail}
          tags={project.tags}
        />
      </div>
      <div className={styles.homeButton} />
    </div>
  );
}

export default function Projects() {
  return (
    <div className={styles.wrap}>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>
          <span className={styles.k}>const</span> projects{" "}
          <span className={styles.p}>=</span> []
        </p>
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.hint}>click a project to expand it</p>

        <p className={styles.sectionLabel}>// web</p>
        <div className={styles.webGrid}>
          {webProjects.map((p) => (
            <BrowserWindow key={p.title} project={p} />
          ))}
        </div>

        <p className={styles.sectionLabel}>// mobile</p>
        <div className={styles.phoneGrid}>
          {mobileProjects.map((p) => (
            <PhoneFrame key={p.title} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}