'use client';
import { useState } from "react";
import styles from "../styles/projects.module.css";

type Accent = "mint" | "amber" | "coral";

type ProjectsProps = {
  id: number;
  title: string;
  type: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
};

const accentColors: Record<Accent, string> = {
  mint: "#7fd9a8",
  amber: "#e8b95c",
  coral: "#e8846f",
};


function PlaceholderShot({ variant , src }: { variant: "web" | "mobile"  , src?: string}) {
  return (
    <div
      className={`${styles.shot} ${
        variant === "web" ? styles.shotWeb : styles.shotMobile
      }`}
    >
      {src ? (
        <img
          src={src.startsWith("/") ? src : `/${src}`}
          alt="Project Screenshot"
          
        />
      ) : (
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
      )}
    </div>
  );
}

function ProjectRow({
  title,
  detail,
  tags,
}: {
  title: string;
  detail: string;
  tags: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.row}>
      <div className={styles.rowHead} onClick={() => setOpen(!open)}>
            <div className={styles.detailExpanded}>
              <p className={styles.detailText}>{detail}</p>
              
              {tags && tags.length > 0 && (
                <div className={styles.tags}>
                  {tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
      </div>
    </div>
  );
}

function BrowserWindow({ project }: { project: ProjectsProps }) {
  return (
    <div className={styles.browser}>
      <div className={styles.tabBar}>
        <div className={styles.lights}>
        </div>
        <div className={styles.tab}>
          <span
            className={styles.favicon}
            
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
          <span className={styles.u}>{project.liveUrl}</span>
        </div>
      </div>
      <div className={styles.deviceContent}>
        <PlaceholderShot variant="web" src={project.image} />
        <ProjectRow
          title={project.title}
          detail={project.description}
          tags={project.tags}
        />
      </div>
    </div>
  );
}

function PhoneFrame({ project }: { project: ProjectsProps }) {
  return (
    <div className={styles.phone}>
      <div className={styles.speaker} />
      <div className={styles.deviceContent}>
        <PlaceholderShot variant="mobile" src={project.image} />
        <ProjectRow
          title={project.title}
          detail={project.description}
          tags={project.tags}
        />
      </div>
      <div className={styles.homeButton} />
    </div>
  );
}

export default function Projects({projects}: {projects: ProjectsProps[]}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.panel}>
        <h2 className={styles.heading}>/ Projects</h2>

        <p className={styles.sectionLabel}>// web</p>
        <div className={styles.webGrid}>
          {projects
    .filter((project) => project.type === "web")
    .map((project) => (
      <BrowserWindow key={project.title} project={project} />
  ))}
        </div>

        <p className={styles.sectionLabel}>// mobile</p>
        <div className={styles.phoneGrid}>
          {projects
    .filter((project) => project.type === "mobile")
    .map((project) => (
      <PhoneFrame key={project.title} project={project} />
  ))}
        </div>
      </div>
    </div>
  );
}