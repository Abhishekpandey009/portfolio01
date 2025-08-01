import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Search } from 'lucide-react';
import project1Img from '../assets/3851200.jpg';
import project2Img from '../assets/Screenshot 2025-05-25 023853.png';
import project3Img from '../assets/Screenshot 2025-05-25 023605.png';
import project4Img from '../assets/CRM-1-scaled.webp'; // Assuming you have an image for YourHR

// Project data (in real app, this would come from API)
const projectsData = [
  {
    id: 1,
    title: "YourHR – Simplify Your Hiring with Smart Resume Management",
    description: "YourHR is your all-in-one HR assistant that streamlines how candidates submit their information and how recruiters manage applications. Combining a user-friendly React frontend with a powerful Node.js backend and secure MongoDB storage, YourHR makes hiring effortless and organized.",
    image: project1Img,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Axios", "dotenv"],
    category: "Full Stack",
    github: "https://github.com",
    live: "https://frontend-2drz.onrender.com/",
    featured: true
  },
  {
    id: 2,
    title: "CRM – Campaign Management Platform",
    description: "CRM is a comprehensive campaign management platform designed to streamline your marketing efforts. With powerful analytics, user-friendly interfaces, and seamless integration with your favorite tools, CRM empowers you to take your campaigns to the next level.",
    image: project4Img,
    technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS", "Express.js", "TypeScript", "React + Vite + TypeScript", "Express + TypeScript", "Firebase Firestore", "TailwindCSS", "Node.js", "Lucide Icons", "REST APIs"],
    category: "Full Stack",
    github: "https://github.com/Abhishekpandey009/xeno_crm",
    live: "https://xeno-crm-abhishek-pandeys-projects-2208186e.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "SaferSathi – Your Personal Safety Companion",
    description: "SaferSathi is a revolutionary safety app built to protect you in any situation. With real-time location sharing, one-tap emergency alerts, and a network of trusted contacts, help is always just a tap away.",
    image: project2Img,
    technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    category: "Mobile/Web App",
    github: "https://github.com",
    live: "https://neon-smakager-d6c048.netlify.app/",
    featured: true
  },
  {
    id: 4,
    title: "Weather.ai – Smarter Forecasts with the Power of AI",
    description: "Weather.ai is your personal weather intelligence platform, offering hyper-accurate, deeply personalized weather updates powered by AI.",
    image: project3Img,
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "AI/ML"],
    category: "AI",
    github: "https://github.com",
    live: "https://jovial-conkies-90ba97.netlify.app/",
    featured: true
  }
];

// Categories
const categories = ["All", "Frontend", "Backend", "Full Stack"];

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'My Portfolio | Projects';
  }, []);

  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on category and search term
  useEffect(() => {
    let filtered = projectsData;
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(project => project.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredProjects(filtered);
  }, [activeCategory, searchTerm]);

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Here's a collection of my recent work. These projects showcase my skills, 
              experience, and approach to problem-solving across different domains.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      activeCategory === category 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300 flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="inline-block ml-2 px-2 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 pt-0 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      <Github size={18} className="mr-1" /> GitHub
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      <ExternalLink size={18} className="mr-1" /> Live Demo
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="text-gray-500 dark:text-gray-400 text-lg">
                  No projects found matching your criteria. Try adjusting your filters.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;