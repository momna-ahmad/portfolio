import NavBar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

// Portfolio data - customize this section
const portfolioData = {
  name: "Momina Ahmad",
  title: "Full Stack Developer",
  bio: "I build exceptional digital experiences with modern web technologies. Passionate about creating scalable solutions and user-centric applications.",
  email: "momnaahmdd@gmail.com",
  phone: "0305 4049768",
  location: "Lahore",
  github: "https://github.com/momna-ahmad",
  linkedin: "https://www.linkedin.com/in/momina-ahmad-509baa2a8",
  
  skills: [
    "React", "Next.js", "TypeScript", "Node.js",
    "Python", "JavaScript", "Java", "C++",
    "PostgreSQL", "Supabase", "Firebase", "MySQL",
    "Express", "Flutter", "MongoDB", "Redux"
  ],
  
  projects: [
    {
      id: 1,
      title: "Rental Platform",
      description: "A web platform for listing homes, vehicles, and halls for rent, enabling users to create and browse rental opportunities with real-time chat functionality.",
      image: "/rentalot.png",
      tags: ["Next.js", "TypeScript", "Supabase", "Socket.io"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 2,
      title: "CRM Website",
      description: "A comprehensive CRM dashboard to manage customer data, tasks and workflows with RESTful API integration and email support system.",
      image: "/globuy.png",
      tags: ["React", "Redux", "MongoDB", "Node.js"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 3,
      title: "Mentorship Platform",
      description: "A platform connecting students with mentors for career guidance, featuring secure authentication and payment processing for priority services.",
      image: "/mentora.png",
      tags: ["React", "Node.js", "Stripe", "Auth0"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 4,
      title: "Home Services Mobile App",
      description: "A job marketplace app enabling users to post jobs and professionals to request completion, with location-based matching within 5km radius.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      tags: ["Flutter", "Firebase", "Node.js", "Maps API"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    },
    {
      id: 5,
      title: "Web Application Firewall Optimizer",
      description: "An intelligent WAF optimizer using Groq API and LLM-driven analysis for continuous security and performance tuning with automatic rule optimization.",
      image: "/firewall-optimizer.png",
      tags: ["Python", "Supabase", "AI/ML", "Security"],
      liveUrl: "https://github.com/momna-ahmad",
      githubUrl: "https://github.com/momna-ahmad"
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <NavBar name={portfolioData.name} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            {portfolioData.name}
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-700 mb-4">{portfolioData.title}</p>
          <p className="text-lg text-gray-600 mb-8">
            BSc. Software Engineering @ COMSATS (2023 - 2027)
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">{portfolioData.bio}</p>
          
          <div className="flex justify-center space-x-6">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              <Github size={24} />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${portfolioData.email}`}
               className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2024 {portfolioData.name}. Built with Next.js & React.</p>
        </div>
      </footer>

      <Chatbot />

    </div>
  );
}