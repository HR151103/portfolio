"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "MethodHub Software Limited",
        role: "Data Practice Intern",
        period: "Nov 2025 – Present",
        description: [
            "Worked on designing and developing the data model for the ARROWS Applicant Tracking System by identifying core entities such as Candidate, Job, Client, and Recruitment Stages.",
            "Defined relational database schema including primary and foreign key relationships, ensuring normalization and data integrity.",
            "Analyzed recruitment workflows and translated business requirements into scalable database structures.",
        ],
    },
    {
        company: "Infotact Solutions",
        role: "Data Analyst Intern",
        period: "Oct 2025 – Dec 2025",
        description: [
            "Performed data cleaning, preprocessing, and analysis using SQL, Excel, and Python.",
            "Developed interactive Power BI dashboards to track key performance indicators and visualize business insights.",
            "Automated reporting processes and supported data-driven decision-making.",
        ],
    },
    {
        company: "TATA Group",
        role: "Data Analytics Intern",
        period: "Dec 2024",
        description: [
            "Built a logistic regression machine learning model to predict business risk and improve decision accuracy.",
            "Performed preprocessing, feature selection, and model evaluation.",
            "Developed dashboards to visualize insights.",
        ],
    },
];

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="py-24 px-4 bg-gray-950 text-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 whitespace-nowrap">
                            <span className="text-teal-400 font-mono text-xl mr-2">04.</span> Where I&apos;ve Worked
                        </h2>
                        <div className="h-[1px] bg-gray-700 w-full md:w-64"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 min-h-[400px]">
                        {/* Tabs Sidebar */}
                        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-gray-800 md:w-48 shrink-0 relative scrollbar-hide">
                            {experiences.map((exp, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`
                    flex items-center px-4 py-3 md:py-4 text-left font-mono text-sm whitespace-nowrap transition-colors duration-300 border-b-2 md:border-b-0 md:border-l-2
                    ${activeTab === index
                                            ? "text-teal-400 border-teal-400 bg-teal-500/5"
                                            : "text-gray-500 border-transparent hover:text-gray-300 hover:bg-gray-800/50"}
                  `}
                                    style={{
                                        marginLeft: activeTab === index && typeof window !== 'undefined' && window.innerWidth >= 768 ? "-2px" : "0",
                                        marginBottom: activeTab === index && typeof window !== 'undefined' && window.innerWidth < 768 ? "-2px" : "0",
                                    }}
                                >
                                    {exp.company}
                                </button>
                            ))}

                            {/* Animated Indicator line for mobile/desktop (Optional smooth effect) */}
                        </div>

                        {/* Experience Content Container */}
                        <div className="flex-grow pt-2">
                            <motion.div
                                key={activeTab} // Changing key forces re-render/re-animation
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-4 text-lg"
                            >
                                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-100">
                                        {experiences[activeTab].role} <span className="text-teal-400">@ {experiences[activeTab].company}</span>
                                    </h3>
                                    <p className="text-gray-500 font-mono text-sm mt-2 md:mt-0 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" /> {experiences[activeTab].period}
                                    </p>
                                </div>

                                <ul className="space-y-4">
                                    {experiences[activeTab].description.map((item, index) => (
                                        <li key={index} className="flex text-gray-400 leading-relaxed">
                                            <span className="text-teal-400 mr-3 mt-1.5 shrink-0">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
