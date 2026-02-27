"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-4 bg-gray-950 text-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 whitespace-nowrap">
                            <span className="text-teal-400 font-mono text-xl mr-2">01.</span> About Me
                        </h2>
                        <div className="h-[1px] bg-gray-700 w-full md:w-64"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                Hello! My name is Hrithik and I enjoy finding insights hidden within data. My interest in data analysis started when I realized the power of transforming raw numbers into actionable business strategies.
                            </p>
                            <p>
                                Fast-forward to today, and I&apos;ve had the privilege of working as an intern at multiple companies including <span className="text-teal-400">MethodHub Software Limited</span>, <span className="text-teal-400">Infotact Solutions</span>, and the <span className="text-teal-400">TATA Group</span>. My main focus these days is building scalable database structures, creating interactive Power BI dashboards, and developing machine learning models.
                            </p>
                            <p>
                                I am currently pursuing my Bachelor of Engineering in Biomedical Engineering at Rajalakshmi Engineering College (Expected 2025).
                            </p>
                        </div>

                        <div className="relative group max-w-sm mx-auto md:mx-0">
                            {/* Optional Image container - placeholder for now */}
                            <div className="relative z-10 w-full aspect-square border-2 border-teal-400 rounded bg-gray-900/50 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                                {/*  To add your actual photo later:
                      <img src="/profile.jpg" alt="Hrithik A.R." className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 Mix-blend-multiply" /> 
                 */}
                                <span className="text-gray-600 font-mono">Profile Image Placehoder</span>
                            </div>
                            <div className="absolute inset-0 border-2 border-teal-400 rounded translate-x-4 translate-y-4 -z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
