"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
    {
        title: "Spotify Data Analysis",
        description: "Performed data cleaning and preprocessing on Spotify dataset using Python and SQL. Conducted exploratory data analysis to identify trends and developed interactive Power BI dashboards to visualize insights.",
        tech: ["Python", "SQL", "Power BI"],
        github: "https://github.com",
        external: "#"
    },
    {
        title: "Quantitative Analysis of Sweat Gland Activity",
        description: "Developed a system using image processing and machine learning techniques. Applied feature extraction and classification algorithms to identify dermatological disorder severity and achieved high accuracy.",
        tech: ["Python", "MATLAB", "Machine Learning"],
        github: "https://github.com",
        external: "#"
    },
    {
        title: "ICU Mortality Prediction using Machine Learning",
        description: "Built predictive models using Logistic Regression and Random Forest. Performed preprocessing and evaluation to improve performance and support healthcare decision-making.",
        tech: ["Python", "Machine Learning", "Logistic Regression", "Random Forest"],
        github: "https://github.com",
        external: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 bg-gray-950 text-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 whitespace-nowrap">
                            <span className="text-teal-400 font-mono text-xl mr-2">03.</span> Some Things I&apos;ve Built
                        </h2>
                        <div className="h-[1px] bg-gray-700 w-full md:w-64"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900 rounded-lg p-6 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 border border-gray-800 hover:border-teal-500/30"
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <Folder className="w-10 h-10 text-teal-400" />
                                        <div className="flex gap-4">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                            {project.external && (
                                                <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-teal-400 transition-colors">
                                        <a href={project.external} target="_blank" rel="noopener noreferrer">
                                            {project.title}
                                        </a>
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-gray-500 mt-auto">
                                    {project.tech.map((tech, techIndex) => (
                                        <li key={techIndex}>{tech}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
