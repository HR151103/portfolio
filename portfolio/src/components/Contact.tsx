"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 bg-gray-950 text-white flex flex-col items-center">
            <div className="max-w-xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-teal-400 font-mono mb-4 text-sm tracking-widest uppercase">
                        05. What&apos;s Next?
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                        I&apos;m currently looking for new opportunities in data analytics. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
                    </p>

                    <div className="flex flex-col items-center gap-6 mb-12 text-gray-400">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-teal-400" />
                            <a href="mailto:hrithik.a.r151103@gmail.com" className="hover:text-teal-400 transition-colors">
                                hrithik.a.r151103@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-teal-400" />
                            <a href="tel:+918072916717" className="hover:text-teal-400 transition-colors">
                                +91-8072916717
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-teal-400" />
                            <span>Chennai, India</span>
                        </div>
                    </div>

                    <a
                        href="mailto:hrithik.a.r151103@gmail.com"
                        className="inline-block px-8 py-4 rounded-md border border-teal-500 text-teal-400 font-bold text-lg hover:bg-teal-500/10 transition-colors duration-300"
                    >
                        Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-8 text-center bg-gray-950 text-gray-500 font-mono text-sm border-t border-gray-900">
            <div className="flex justify-center gap-6 mb-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/hrithik-a-ar-d47785247" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                </a>
            </div>
            <p>Designed & Built by Hrithik A.R.</p>
        </footer>
    );
}
