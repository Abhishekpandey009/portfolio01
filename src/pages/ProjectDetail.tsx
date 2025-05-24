import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, User } from 'lucide-react';

// Project data (in real app, this would come from API)
const projectsData = [
  {
    id: "1",
    title: "YourHR – Simplify Your Hiring with Smart Resume Management",
    description: "YourHR is your all-in-one HR assistant that streamlines how candidates submit their information and how recruiters manage applications. Combining a user-friendly React frontend with a powerful Node.js backend and secure MongoDB storage, YourHR makes hiring effortless and organized.",
    longDescription: `YourHR is not just a resume submission platform—it’s your all-in-one HR assistant that streamlines how candidates submit their information and how recruiters manage applications. By combining a user-friendly React frontend with a powerful Node.js backend and secure MongoDB storage, YourHR makes hiring effortless and organized.

Traditional resume collection is tedious and inefficient. YourHR offers a modern, secure way for candidates to register, fill out detailed resume forms, and submit their information seamlessly online. Recruiters get reliable data stored in a secure database with role-based access, speeding up the hiring pipeline.

“YourHR doesn’t just gather resumes. It transforms scattered data into structured, actionable insights that help HR teams make faster, smarter decisions.”

Key Features:
- User Registration & Login: Secure authentication with JWT ensures only authorized users can access sensitive data.
- Comprehensive Resume Form: Capture personal details, education, work experience, and skills in one place.
- MongoDB Data Storage: Reliable and scalable backend database to store all candidate information safely.
- Role-Based Access Control: Fine-grained permissions for admins and HR users to protect your data.
- Responsive UI: Built with React and Tailwind CSS for a smooth and beautiful experience on all devices.

Who Is YourHR For?
- HR teams wanting an efficient candidate intake system
- Startups and SMEs streamlining recruitment
- Educational institutions managing student placements
- Anyone looking to digitize and simplify resume collection

Tech Stack:
- React.js for dynamic, component-driven frontend
- Tailwind CSS for clean and responsive design
- Axios for API calls and backend communication
- Node.js & Express.js for RESTful API backend
- MongoDB (Mongoose) for flexible, document-oriented data storage
- JWT Authentication for secure login and session management
- dotenv for environment variable management
`,
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Axios", "dotenv"],
    category: "Full Stack",
    github: "https://github.com",
    live: "https://frontend-2drz.onrender.com/",
    featured: true,
    completedDate: "2024",
    client: "Recruitment Teams",
    screenshots: [
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    challenges: "Traditional resume collection is tedious and inefficient. Ensuring secure, structured, and actionable data for HR teams.",
    solutions: "Modern, secure online forms, JWT authentication, role-based access, and a robust backend for reliable data management."
  },
  {
    id: "2",
    title: "SaferSathi – Your Personal Safety Companion",
    description: "SaferSathi is a revolutionary safety app built to protect you in any situation. With real-time location sharing, one-tap emergency alerts, and a network of trusted contacts, help is always just a tap away.",
    longDescription: `SaferSathi is a revolutionary safety app built to protect you in any situation. Whether you're traveling alone or navigating unfamiliar areas, SaferSathi ensures you're never truly alone. With real-time location sharing, one-tap emergency alerts, and a network of trusted contacts, help is always just a tap away.

Features:
- Real-Time Location Sharing: Share your live location with trusted contacts during emergencies or travel.
- Emergency SOS: One-tap SOS alerts send your current location to all your emergency contacts instantly.
- Trusted Contacts Network: Build a circle of reliable family and friends who can monitor and respond in real time.
- Scheduled Check-ins: Set up check-in times that notify your contacts if missed.
- Safe Route Suggestions: Get AI-powered route recommendations for safer travel, especially at night.
- One-Tap Emergency Call: Instantly dial emergency services and notify your safety circle simultaneously.

How It Works:
1. Download & Install – Get SaferSathi from the app store and sign up.
2. Add Trusted Contacts – Create your safety circle of friends and family.
3. Set Up Features – Configure emergency settings, check-ins, and preferences.
4. Stay Protected – Go about your day with peace of mind.

Professional Safety Services:
- Safety Escort: Get a trained escort for safe travel
- Emergency Response: 24/7 emergency response support

Testimonials:
"SaferSathi changed the way I feel about solo travel. The real-time updates give my family peace of mind." – Priya Sharma, College Student

"Check-in alerts help me stay connected with my daughter’s commute. Highly recommended!" – Rajesh Patel, Parent

"I felt unsafe and the SOS feature instantly alerted my contacts. I got help quickly!" – Ananya Gupta, Working Professional

Tech Stack:
- React.js, Node.js, MongoDB, Socket.io, Tailwind CSS
`,
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    category: "Mobile/Web App",
    github: "https://github.com",
    live: "https://neon-smakager-d6c048.netlify.app/",
    featured: true,
    completedDate: "2024",
    client: "General Public",
    screenshots: [
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    challenges: "Ensuring real-time, reliable emergency communication and privacy for users.",
    solutions: "Used Socket.io for real-time updates, robust authentication, and privacy-focused design."
  },
  {
    id: "3",
    title: "Weather.ai – Smarter Forecasts with the Power of AI",
    description: "Weather.ai is your personal weather intelligence platform, offering hyper-accurate, deeply personalized weather updates powered by AI.",
    longDescription: `Weather.ai is not just another weather app—it's your personal weather intelligence platform, designed for people who think ahead. By fusing real-time meteorological data with cutting-edge artificial intelligence, Weather.ai offers hyper-accurate, deeply personalized weather updates that empower you to plan with confidence.

Why Weather.ai?
Traditional weather apps only scratch the surface. Weather.ai uses advanced machine learning to analyze multiple data sources, historical weather trends, and your preferences. The result? Forecasts that aren’t just data—they’re meaningful insights tailored to your location, habits, and needs.

Key Features:
- AI-Enhanced Forecasts: Smarter predictions powered by machine learning—forecasts that get sharper and more personalized over time.
- Real-Time Alerts: Be the first to know about rain, storms, temperature swings, or any sudden changes—wherever you are.
- Location-Based Insights: Hyperlocal, city- and neighborhood-level forecasts. Your weather, your way, wherever you go.
- Clean, Intuitive UI: A sleek, modern interface with beautiful visuals, simple summaries, and all the details you need at a glance.
- Hourly, Daily & Weekly Views: Zoom in for the next hour, or look ahead to the weekend—stay prepared for every moment.

Who Is Weather.ai For?
- Commuters who need to dodge surprise showers
- Travelers who want peace of mind on the road or in the air
- Event Planners staying a step ahead of unpredictable skies
- Anyone who wants weather to work smarter for them

Tech Stack:
- React + TypeScript for robust, scalable UI
- Vite for lightning-fast builds and development
- Tailwind CSS for instant, beautiful styling
- AI/ML integrations (expandable for your own models!)
`,
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "AI/ML"],
    category: "AI/Web App",
    github: "https://github.com",
    live: "https://jovial-conkies-90ba97.netlify.app/",
    featured: true,
    completedDate: "2024",
    client: "General Public",
    screenshots: [
      "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    challenges: "Delivering hyperlocal, personalized forecasts and integrating AI/ML models for smarter predictions.",
    solutions: "Used advanced ML algorithms, real-time data sources, and a scalable, modern frontend."
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProject = () => {
      setLoading(true);
      const foundProject = projectsData.find(p => p.id === id);
      
      if (foundProject) {
        setProject(foundProject);
        document.title = `My Portfolio | ${foundProject.title}`;
      }
      
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        {/* Back Button */}
        <Link 
          to="/projects"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Projects
        </Link>

        {/* Project Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 text-sm font-semibold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                Featured
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {project.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-3xl">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-8 mb-8">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar size={18} className="mr-2" />
              Completed: {project.completedDate}
            </div>
            {project.client && (
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <User size={18} className="mr-2" />
                Client: {project.client}
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <Github size={18} /> View on GitHub
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div 
          className="mb-16 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto"
          />
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {project.longDescription.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className="text-gray-600 dark:text-gray-400 mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Challenges & Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Challenges</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.challenges}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.solutions}</p>
                </div>
              </div>
            </div>

            {/* Project Screenshots */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot: string, index: number) => (
                  <motion.div 
                    key={index} 
                    className="rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  >
                    <img 
                      src={screenshot} 
                      alt={`${project.title} screenshot ${index + 1}`} 
                      className="w-full h-auto"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 mb-8 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech: string, i: number) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Details</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Category:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{project.category}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Completed:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{project.completedDate}</span>
                </li>
                {project.client && (
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Client:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{project.client}</span>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;