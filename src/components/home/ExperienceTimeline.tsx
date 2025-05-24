import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const certifications = [
	{
		id: 1,
		title: 'Supervised Machine Learning',
		issuer: 'Stanford University (Coursera)',
		duration: '2025',
		description:
			"Completed Stanford's Supervised Machine Learning specialization, covering foundational ML algorithms, model evaluation, and practical applications.",
		skills: [
			'Machine Learning',
			'Supervised Learning',
			'Python',
			'Model Evaluation',
		],
	},
	{
		id: 2,
		title: 'Generative AI with Large Language Models',
		issuer: 'AWS (Coursera)',
		duration: '2025',
		description:
			'Learned the fundamentals of generative AI, prompt engineering, and building applications with large language models using AWS tools.',
		skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AWS'],
	},
	{
		id: 3,
		title: 'AWS APAC Solution Architecture Job Simulation',
		issuer: 'AWS',
		duration: '2025',
		description:
			'Completed a hands-on job simulation focused on AWS solution architecture, cloud design, and deployment best practices.',
		skills: ['AWS', 'Cloud Architecture', 'Solution Design'],
	},
	{
		id: 4,
		title: 'Data Analytics',
		issuer: 'Deloitte',
		duration: '2025',
		description:
			'Gained practical experience in data analytics, including data visualization, reporting, and business insights using real-world datasets.',
		skills: ['Data Analytics', 'Data Visualization', 'Business Insights'],
	},
];

const ExperienceTimeline: React.FC = () => {
	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<div className="container mx-auto px-4 md:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Certifications
					</h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Here are some of the certifications I have earned in machine
						learning, AI, cloud, and analytics.
					</p>
				</div>

				<div className="relative max-w-4xl mx-auto">
					{/* Timeline Line */}
					<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-900 transform md:translate-x-px"></div>

					{/* Certification Items */}
					{certifications.map((cert, index) => (
						<motion.div
							key={cert.id}
							className={`relative mb-12 md:mb-16 ${
								index % 2 === 0
									? 'md:pr-10 md:ml-auto md:mr-0'
									: 'md:pl-10'
							} md:w-1/2`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							{/* Timeline Dot */}
							<div
								className={`absolute top-0 ${
									index % 2 === 0
										? 'left-0 md:-left-4'
										: 'left-0 md:-left-4'
								} w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-md`}
							>
								<Award size={16} className="text-white" />
							</div>

							{/* Content Card */}
							<div
								className={`ml-12 md:ml-0 ${
									index % 2 === 0 ? 'md:text-right' : ''
								} bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700`}
							>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									{cert.title}
								</h3>
								<h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
									{cert.issuer}
								</h4>
								<div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 text-sm">
									<Calendar size={14} className="mr-1" />
									<span>{cert.duration}</span>
								</div>
								<p className="text-gray-600 dark:text-gray-400 mb-4">
									{cert.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{cert.skills.map((skill, i) => (
										<span
											key={i}
											className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceTimeline;