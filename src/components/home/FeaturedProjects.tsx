import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

import project1Img from '../../assets/3851200.jpg';
import project2Img from '../../assets/Screenshot 2025-05-25 023853.png';
import project3Img from '../../assets/Screenshot 2025-05-25 023605.png';

const projectData = [
	{
		id: 1,
		title: 'YourHR – Simplify Your Hiring with Smart Resume Management',
		description:
			'YourHR is your all-in-one HR assistant that streamlines how candidates submit their information and how recruiters manage applications.',
		image: project1Img,
		technologies: [
			'React.js',
			'Node.js',
			'Express.js',
			'MongoDB',
			'Tailwind CSS',
			'JWT',
			'Axios',
			'dotenv',
		],
		github: 'https://github.com',
		live: 'https://frontend-2drz.onrender.com/',
	},
	{
		id: 2,
		title: 'SaferSathi – Your Personal Safety Companion',
		description:
			'SaferSathi is a revolutionary safety app built to protect you in any situation. With real-time location sharing, one-tap emergency alerts, and a network of trusted contacts, help is always just a tap away.',
		image: project2Img,
		technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
		github: 'https://github.com',
		live: 'https://neon-smakager-d6c048.netlify.app/',
	},
	{
		id: 3,
		title: 'Weather.ai – Smarter Forecasts with the Power of AI',
		description:
			'Weather.ai is your personal weather intelligence platform, offering hyper-accurate, deeply personalized weather updates powered by AI.',
		image: project3Img,
		technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI/ML'],
		github: 'https://github.com',
		live: 'https://jovial-conkies-90ba97.netlify.app/',
	},
];

const FeaturedProjects: React.FC = () => {
	return (
		<section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
			<div className="container mx-auto px-4 md:px-8">
				<div className="flex justify-between items-end mb-12">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Featured Projects
						</h2>
						<p className="text-gray-600 dark:text-gray-400 max-w-2xl">
							Here are some of my recent projects that showcase my skills and
							expertise. Each project represents a unique challenge and solution.
						</p>
					</div>
					<Link
						to="/projects"
						className="hidden md:flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
					>
						View All Projects <ArrowRight size={18} className="ml-1" />
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectData.map((project, index) => (
						<motion.div
							key={project.id}
							className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 transition-colors duration-300 flex flex-col"
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
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech, i) => (
										<span
											key={i}
											className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
							<div className="p-6 pt-0 border-t border-gray-200 dark:border-gray-800 flex justify-between">
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
					))}
				</div>

				<div className="mt-10 text-center md:hidden">
					<Link
						to="/projects"
						className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
					>
						View All Projects <ArrowRight size={18} className="ml-1" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;