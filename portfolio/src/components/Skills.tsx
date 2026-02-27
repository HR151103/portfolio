"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["Python", "SQL", "MATLAB"],
    },
    {
        title: "Data & ML Skills",
        skills: ["Data Modeling", "Data Cleaning", "Data Visualization", "Machine Learning", "Deep Learning"],
    },
    {
        title: "Tools & Databases",
        skills: ["Power BI", "Excel", "MySQL"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-4 bg-gray-950 text-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 whitespace-nowrap">
                            <span className="text-teal-400 font-mono text-xl mr-2">02.</span> Technical Skills
                        </h2>
                        <div className="h-[1px] bg-gray-700 w-full md:w-64"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-teal-500/50 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-gray-100 mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex} className="flex items-center text-gray-400">
                                            <span className="text-teal-400 mr-2 text-sm">▹</span>
                                            {skill}
                                        </li>
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
