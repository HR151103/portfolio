import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Index = () => {

  useEffect(() => {
    document.title = 'HRITHIK A.R | Data Analyst Portfolio';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      'Portfolio of HRITHIK A.R - Aspiring Data Analyst based in Chennai, India. Expertise in Python, SQL, Machine Learning, Power BI, and data modeling.'
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />

        <Certifications />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
