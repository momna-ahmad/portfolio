'use client';

import styles from "../styles/navbar.module.css";
import Chatbot from "./Chatbot";

export default function Navbar({ name }: { name: string }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      {/* Left — simple text links, no pill/border, like a VS Code menu bar */}
      <div className={styles.menu}>
        <button className={styles.menuItem} onClick={() => scrollToSection('skills')}>
          Skills
        </button>
        <button className={styles.menuItem} onClick={() => scrollToSection('skills')}>
          Experience
        </button>
        <button className={styles.menuItem} onClick={() => scrollToSection('projects')}>
          Projects
        </button>
        <button className={styles.menuItem} onClick={() => scrollToSection('contact')}>
          Contact
        </button>
      </div>

      {/* Center — mirrors the VS Code command bar */}
      <div className={styles.center}>
        <div className={styles.searchPill}>
          <span>{name}&apos;s Portfolio</span>
          <Chatbot />
        </div>
      </div>
    </nav>
  );
}