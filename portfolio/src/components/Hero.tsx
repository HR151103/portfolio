"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-12 bg-gray-950 text-white selection:bg-teal-500 selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-teal-400 font-medium tracking-wide mb-4 text-lg"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-100"
        >
          HRITHIK A.R.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl md:text-5xl text-gray-400 font-bold mb-8"
        >
          I build data-driven solutions.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl text-gray-400 mb-12 leading-relaxed text-lg md:text-xl"
        >
          Aspiring Data Analyst with strong skills in SQL, Power BI, Excel, and Python. Passionate about data modeling, making interactive dashboards, and developing machine learning models to generate actionable business insights.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <a href="#projects" className="px-8 py-3 rounded-md bg-teal-500 text-gray-950 font-bold hover:bg-teal-400 transition-colors duration-300">
            View My Work
          </a>
          <a href="mailto:hrithik.a.r151103@gmail.com" className="px-8 py-3 rounded-md border border-teal-500 text-teal-400 font-bold hover:bg-teal-500/10 transition-colors duration-300">
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center gap-8"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 hover:-translate-y-1 transition-all duration-300">
            <Github className="w-7 h-7" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/hrithik-a-ar-d47785247" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 hover:-translate-y-1 transition-all duration-300">
            <Linkedin className="w-7 h-7" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:hrithik.a.r151103@gmail.com" className="text-gray-400 hover:text-teal-400 hover:-translate-y-1 transition-all duration-300">
            <Mail className="w-7 h-7" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
