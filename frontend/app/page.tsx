import NavBar from '@/components/Navbar';
import styles from "./page.module.css";
import Chatbot from '@/components/Chatbot';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

// Portfolio data - display design 
//General information - Hashmap 

const overview = new Map([["name", "Momina Ahmad"], 
  ["title", "Full Stack Developer"],
  ["description", "I pay close attention to the initial architecture of applications which ultimately makes them scalable and I ensure that agentic development doesn't compromise the architectural foundations with easy workarounds."]]);

// Tech stack - stack 

const stack = ["PostgreSQL" , "SQL" , "Express", "React" , "Expo",
   "TypeScript", "Node.js",
    "Python", "JavaScript", "Java", "C++",
    "Supabase", "Firebase", "MySQL",
    "Express", "Flutter", "MongoDB", "Redux"
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
      type: "Web Application",
      title: "Fundxprout - A Crowdfunding Platform",
      description: "A web platform for listing homes, vehicles, and halls for rent, enabling users to create and browse rental opportunities with real-time chat functionality.",
      image: "/fundxprout.png",
      tags: ["Next.js", "TypeScript", "Supabase", "Solidity"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 2,
      type: "Web Application",
      title: "CliniConnect - A Healthcare Platform",
      description: "A web platform for listing homes, vehicles, and halls for rent, enabling users to create and browse rental opportunities with real-time chat functionality.",
      image: "/rentalot.png",
      tags: ["React", "TypeScript", "Supabase", "Jitsi Meet", "Paystack API"],
      liveUrl: "https://www.cliniconnectng.com",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 3,
      type: "Mobile Application",
      title: "CliniConnect - A Healthcare Mobile App",
      description: "A cross-platform mobile application for connecting patients with healthcare professionals, featuring real-time video consultations and appointment scheduling.",
      image: "/rentalot.png",
      tags: ["React Native", "Expo", "Supabase"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
  {
      id: 4,
      type: "Web Application",
      title: "Rental Platform",
      description: "A web platform for listing homes, vehicles, and halls for rent, enabling users to create and browse rental opportunities with real-time chat functionality.",
      image: "/rentalot.png",
      tags: ["Next.js", "TypeScript", "Supabase", "Socket.io"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 5,
      type: "Web Application",
      title: "CRM Website",
      description: "A comprehensive CRM dashboard to manage customer data, tasks and workflows with RESTful API integration and email support system.",
      image: "/globuy.png",
      tags: ["React", "Redux", "MongoDB", "Node.js"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 6,
      type: "Web Application",
      title: "Mentorship Platform",
      description: "A platform connecting students with mentors for career guidance, featuring secure authentication and payment processing for priority services.",
      image: "/mentora.png",
      tags: ["React", "Node.js", "Stripe", "Auth0"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 7,
      type: "Mobile Application",
      title: "Home Services Mobile App",
      description: "A job marketplace app enabling users to post jobs and professionals to request completion, with location-based matching within 5km radius.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      tags: ["Flutter", "Firebase", "Node.js", "Maps API"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 8,
      type: "Web Application",
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
    <div className="min-h-screen bg-white text-black">
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

      {/* Skills Section */}
      {/* <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-white shadow-md rounded-full font-medium hover:bg-black hover:text-white hover:shadow-lg transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      {/* <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 flex space-x-4">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
                      >
                        <ExternalLink size={20} className="text-black" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
                      >
                        <Github size={20} className="text-black" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-black text-white rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href={`mailto:${portfolioData.email}`}
              className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition"
            >
              Email Me
            </a>
            <a 
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-black text-black rounded-full font-semibold text-lg hover:bg-black hover:text-white transition"
            >
              View GitHub
            </a>
          </div>
          <p className="text-gray-600">
            📍 {portfolioData.location} | 📞 {portfolioData.phone}
          </p>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2024 {portfolioData.name}. Built with Next.js & React.</p>
        </div>
      </footer> */}

      {/*<Chatbot />*/}

    </div>
  );
}