import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  // Languages
  { name: 'Python', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'C++', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },

  // Web Development (MERN)
  { name: 'React', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },

  // Machine Learning
  { name: 'scikit-learn', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }, // used Python fallback
  { name: 'TensorFlow', level: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'OpenCV', level: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },

  // Tools
  { name: 'Git', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', level: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'JWT', level: 70, icon: 'https://img.icons8.com/color/48/000000/jwt.png' }, // JWT not in Devicon
  { name: 'REST APIs', level: 80, icon: 'https://img.icons8.com/external-flat-juicy-fish/60/000000/external-api-coding-and-development-flat-flat-juicy-fish.png' },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I have a diverse skill set that spans across various domains including web development, mobile development, machine learning, and more.
            Here are some of the technologies I work with:
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name + index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-gray-900 dark:text-white font-medium text-center">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
