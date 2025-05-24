import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImg from '../assets/1727367257314.jpg';
import { Download, Award, Book, ArrowRight, Calendar } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'My Portfolio | About';
  }, []);

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={profileImg}
                    alt="John Doe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <div className="text-blue-600 dark:text-blue-400 font-bold text-lg">5+ Years Experience</div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <div className="text-blue-600 dark:text-blue-400 font-bold text-lg">MERN Specialist</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                I'm John Doe, a passionate Full Stack Developer with expertise in the MERN 
                stack and a strong background in creating responsive, user-friendly web applications. 
                With over 5 years of professional experience, I've worked on a wide range of projects 
                from small business websites to large-scale enterprise applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                My approach to development combines technical expertise with a keen eye for design 
                and user experience. I believe that great software should not only function flawlessly 
                but also provide an intuitive and enjoyable experience for the end user.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through blog posts and community forums.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/resume.pdf" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300"
                  download
                >
                  Download Resume <Download size={18} />
                </a>
                <Link 
                  to="/contact"
                  className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-medium flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  Contact Me <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              I specialize in creating modern, efficient, and scalable web applications
              using the latest technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Front-End Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating responsive, accessible, and visually appealing user interfaces using 
                React.js, TypeScript, and modern CSS frameworks like Tailwind CSS.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Back-End Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building robust server-side applications with Node.js, Express, and MongoDB. 
                Designing efficient APIs, implementing authentication, and managing databases.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Full Stack Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connecting front-end and back-end components to create seamless, full-stack 
                applications. Implementing features like real-time updates, data visualization, and more.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analyzing and improving application performance through code optimization, 
                lazy loading, caching strategies, and database query optimization.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating intuitive user interfaces and experiences. Collaborating with designers 
                to implement visually appealing and user-friendly designs.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Deployment & DevOps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Setting up continuous integration and deployment pipelines. Configuring servers, 
                managing environments, and implementing best practices for deployment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Certifications
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              I'm committed to continuous learning and staying updated with the latest technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Book className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
                Education
              </h3>
              
              <div className="space-y-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Bachelor of Technology in Computer Science</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">Delhi Technological University</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>2013 - 2017</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Graduated with First Class Honors. Specialized in Software Engineering and Database Management.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Master's in Software Engineering</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">Indian Institute of Technology</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>2017 - 2019</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Focus on Advanced Software Architecture, Cloud Computing, and Big Data Analytics.
                  </p>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
                Certifications
              </h3>
              
              <div className="space-y-8">
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">AWS Certified Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">Amazon Web Services</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>2022</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Expertise in developing and maintaining applications on the AWS platform.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">MongoDB Certified Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">MongoDB, Inc.</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>2021</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Demonstrated proficiency in building applications with MongoDB.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">React.js Developer Certification</h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">Meta (formerly Facebook)</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>2020</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Advanced React.js concepts including Hooks, Context API, and Performance Optimization.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;