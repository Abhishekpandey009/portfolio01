import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Github, ExternalLink } from 'lucide-react';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SkillsSection from '../components/home/SkillsSection';
import ExperienceTimeline from '../components/home/ExperienceTimeline';
import profileImg from '../assets/1727367257314.jpg';
import resumeFile from '../assets/Resume (1).pdf';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'My Portfolio | Home';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Abhishek Pandey</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 h-12">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1000,
                    'MERN Stack Developer',
                    1000,
                    'Software Developer',
                    1000,
                    'ML/AI Enthusiast',
                    1000
                    , 'Open Source Contributor',
                  ]}
                  speed={40}
                  repeat={Infinity}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-xl">
                I am a passionate Full Stack Developer specializing in building exceptional digital experiences. 
                I create responsive web applications with clean, efficient, and maintainable code.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300"
                >
                  View Projects <ArrowRight size={18} />
                </Link>
                <a 
                  href={resumeFile}
                  className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-medium flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
                  download
                >
                  Download Resume <Download size={18} />
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img 
                    src={profileImg} 
                    alt="Abhishek Pandey" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
                  <div className="text-blue-600 dark:text-blue-400 font-bold">Fresher</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your project?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            I'm currently available for freelance work or full-time positions.
            If you're looking for a developer who can bring your ideas to life, let's talk!
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium inline-flex items-center gap-2 hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;