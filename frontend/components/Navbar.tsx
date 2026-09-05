'use client';

import { useState } from "react";
import styles from "../styles/navbar.module.css";
import "../styles/aibutton.css";
import Chatbot from "./Chatbot";
import { Sparkles } from "lucide-react";

export default function Navbar({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
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
        <button className={styles.menuItem} onClick={() => scrollToSection('experience')}>
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
          <button
          className="ai-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open Assistant Chat"
          style={{
            borderColor: 'var(--punct)',
            backgroundColor: 'var(--bg-glow)',
            color: 'var(--mint)',
          }}
        >
          <div className="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="chat-bubble"
              style={{ stroke: 'var(--mint)' }}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10" />
            </svg>
            <Sparkles className="sparkles" size={12} style={{ color: 'var(--amber)' }} />
          </div>
        </button>
        </div>
      </div>

      <Chatbot isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={styles.right}></div>
    </nav>
  );
}