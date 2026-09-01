"use client";
import { useState, FormEvent } from "react";
import styles from "../styles/contact.module.css";

const email = "momnaahmdd@gmailcom";
const github = "github.com/momna-ahmad";
const linkedin = "linkedin.com/in/momena-ahmad-9448a1412/";

export default function Contact() {
  const [name, setName] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: connect this to Formspree, EmailJS, or your own backend.
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName("");
      setMessageEmail("");
      setMessage("");
    }, 2200);
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>
          <span className={styles.k}>const</span> contact{" "}
          <span className={styles.p}>=</span> {"{}"}
        </p>
        <h2 className={styles.heading}>Let's Connect</h2>

        <div className={styles.grid}>
          <div>
            <p className={styles.sectionLabel}>// reach me</p>
            <div className={styles.linkList}>
              <a className={styles.linkRow} href={`mailto:${email}`}>
                <div className={styles.iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#7fd9a8" strokeWidth="1.6" />
                    <path d="M3.5 6.5L12 13L20.5 6.5" stroke="#7fd9a8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.linkText}>
                  <p className={styles.linkKey}>email</p>
                  <p className={styles.linkValue}>{email}</p>
                </div>
              </a>

              <a className={styles.linkRow} href={`https://${github}`} target="_blank" rel="noopener noreferrer">
                <div className={styles.iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-1-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.6-1.1-4.6-5.1 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1a10.4 10.4 0 0 1 5.4 0c2.1-1.3 3-1 3-1 .6 1.5.2 2.6.1 2.9.7.7 1.1 1.6 1.1 2.7 0 4-2.3 4.8-4.6 5.1.4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" stroke="#7fd9a8" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.linkText}>
                  <p className={styles.linkKey}>github</p>
                  <p className={styles.linkValue}>{github}</p>
                </div>
              </a>

              <a className={styles.linkRow} href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer">
                <div className={styles.iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#7fd9a8" strokeWidth="1.6" />
                    <path d="M7.5 10v6.5M7.5 7.2v.1M11.5 16.5V13c0-1.4 1-2.2 2.1-2.2 1.1 0 1.9.8 1.9 2.2v3.5" stroke="#7fd9a8" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={styles.linkText}>
                  <p className={styles.linkKey}>linkedin</p>
                  <p className={styles.linkValue}>{linkedin}</p>
                </div>
              </a>
            </div>

            <div className={styles.status}>
              <span className={styles.dot} />
              currently open to new opportunities
            </div>
          </div>

          <div>
            <p className={styles.sectionLabel}>// send a message</p>
            <form className={styles.formCard} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="cf-name">name</label>
                <input
                  id="cf-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="cf-email">email</label>
                <input
                  id="cf-email"
                  type="email"
                  placeholder="you@example.com"
                  value={messageEmail}
                  onChange={(e) => setMessageEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="cf-message">message</label>
                <textarea
                  id="cf-message"
                  placeholder="What's on your mind?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className={`${styles.submitBtn} ${sent ? styles.sent : ""}`}
              >
                {sent ? "sent ✓" : "send message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}