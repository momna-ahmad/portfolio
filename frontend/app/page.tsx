import NavBar from '@/components/Navbar';
import styles from "./page.module.css";
import Stack from '@/components/Stack';
import ExperienceList from '@/components/Experience';
import Projects from '@/components/Projects';
import Chatbot from '@/components/Chatbot';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Contact from '@/components/Contact';

// Portfolio data - display design 
//General information - Hashmap 

const overview = new Map([["name", "Momina Ahmad"], 
  ["title", "Full Stack Developer"],
  ["description", "I pay close attention to the initial architecture of applications which ultimately makes them scalable and I ensure that agentic development doesn't compromise the architectural foundations with easy workarounds."]]);

// Tech stack - stack 

const stack = ["Next/React/Redux" ,
   "TypeScript", "Node.js/Express", 
    "Python/JavaScript/Java", 
    "MongoDB/PostgreSQL/SQL" 
];

//Experience - Linked list 

const experiences = [
  {
    position: "Full Stack Intern",
    company: "BitBash",
    startDate: "Jan 2026",
    endDate: "Feb 2026",
    skills: ["Python", "Web Scraping", "Automation"],
    description: "Developed Python-based automation pipelines, including a high-volume real estate data scraping tool for lead generation and a real-time Discord bot for monitoring Upwork opportunities. Audited web applications to improve Google Lighthouse performance metrics and loading speeds."
  },
  {
    position: "Full Stack Developer",
    company: "Fiverr - Freelance",
    startDate: "Feb 2026",
    endDate: "July 2026",
    skills: ["React", "Supabase", "Third-party APIs", "React Native", "Expo"],
    description: "- Developed full stack healthcare web application for international client using react and supabase, connecting patients with healthcare professionals including doctors, pharmacies and labs and developed its corresponding cross-platform mobile application using react native and expo"
  },
];

//Projects - array of objects

const projects = [
  {
      id: 1,
      type: "web",
      title: "Fundxprout - A Crowdfunding Platform",
      description: "A web platform for listing homes, vehicles, and halls for rent, enabling users to create and browse rental opportunities with real-time chat functionality.",
      image: "/fundxprout.png",
      tags: ["Next.js", "TypeScript", "Supabase", "Solidity"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 2,
      type: "web",
      title: "CliniConnect - A Healthcare Platform",
      description: "A web platform for listing homes, vehicles, and halls for rent, enabling users to create and browse rental opportunities with real-time chat functionality.",
      image: "/cliniconnect.png",
      tags: ["React", "TypeScript", "Supabase", "Jitsi Meet", "Paystack API"],
      liveUrl: "https://www.cliniconnectng.com",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 3,
      type: "mobile",
      title: "CliniConnect - A Healthcare Mobile App",
      description: "A cross-platform mobile application for connecting patients with healthcare professionals, featuring real-time video consultations and appointment scheduling.",
      image: "/cliniconnectmobile.png",
      tags: ["React Native", "Expo", "Supabase"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
  {
      id: 4,
      type: "web",
      title: "Rental Platform",
      description: "A web platform for listing homes, vehicles, and halls for rent, enabling users to create and browse rental opportunities with real-time chat functionality.",
      image: "/rentalot.png",
      tags: ["Next.js", "TypeScript", "Supabase", "Socket.io"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 5,
      type: "web",
      title: "CRM Website",
      description: "A comprehensive CRM dashboard to manage customer data, tasks and workflows with RESTful API integration and email support system.",
      image: "/globuy.png",
      tags: ["React", "Redux", "MongoDB", "Node.js"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 6,
      type: "web",
      title: "Mentorship Platform",
      description: "A platform connecting students with mentors for career guidance, featuring secure authentication and payment processing for priority services.",
      image: "/mentora.png",
      tags: ["React", "Node.js", "Stripe", "Auth0"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 7,
      type: "mobile",
      title: "Home Services Mobile App",
      description: "A job marketplace app enabling users to post jobs and professionals to request completion, with location-based matching within 5km radius.",
      image: "/homeServices.png",
      tags: ["Flutter", "Firebase", "Node.js", "Maps API"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 8,
      type: "web",
      title: "Web Application Firewall Optimizer",
      description: "An intelligent WAF optimizer using Groq API and LLM-driven analysis for continuous security and performance tuning with automatic rule optimization.",
      image: "/firewall-optimizer.png",
      tags: ["Python", "Supabase", "AI/ML", "Security"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    }
  ];

export default function Portfolio() {
  return (
    <div className="styles.stage">
      {/* Navigation */}
      <NavBar name={overview.get('name') ?? ""} />

      {/* Hero Section */}
      <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={`${styles.brace} ${styles.left}`}>{"{"}</div>
 
        <div className={styles.content}>
          <div className={`${styles.pair} ${styles.name}`}>
            <span className={styles.key}>
              <span className={styles.q}>&quot;</span>name
              <span className={styles.q}>&quot;</span>
              <span className={styles.colon}>:</span>
            </span>
            <span className={styles.value}>
              {overview.get("name") ?? ""}<span className={styles.comma}>,</span>
            </span>
          </div>
 
          <div className={`${styles.pair} ${styles.title}`}>
            <span className={styles.key}>
              <span className={styles.q}>&quot;</span>
              title
              <span className={styles.q}>&quot;</span>
              <span className={styles.colon}>:</span>
            </span>
            <span className={styles.value}>
              {overview.get("title") ?? ""}
              <span className={styles.comma}>,</span>
            </span>
          </div>
 
          <div className={`${styles.pair} ${styles.desc}`}>
            <span className={styles.key}>
              <span className={styles.q}>&quot;</span>
              description
              <span className={styles.q}>&quot;</span>
              <span className={styles.colon}>:</span>
            </span>
            <span className={styles.value}>
              <span className={styles.q}>&quot;</span>
              {overview.get("description") ?? ""}
              <span className={styles.q}>&quot;</span>
            </span>
          </div>
        </div>
 
        <div className={`${styles.brace} ${styles.right}`}>{"{"}</div>
      </div>
    </div>

    <Stack stack={stack}/>

    <ExperienceList experience={experiences} />

    <Projects projects={projects} />

    <Contact />

    </div>
  );
}