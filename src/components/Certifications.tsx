import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const certifications = [
  {
    name: 'Data Analytics Certificate',
    authority: 'Great Learning',
    period: '2026',
    description: ['Completed course covering data analysis, visualization, and business insights using real-world datasets.'],
  },
  {
    name: 'Data Analyst Course',
    authority: 'Simplilearn',
    period: '2026',
    description: ['Completed training in Excel, SQL, and dashboard development for analytics.'],
  },
  {
    name: 'Databricks Data Analytics Certificate',
    authority: 'Databricks',
    period: '2026',
    description: ['Completed certification covering SQL analytics, big data processing, and modern data analytics platform concepts.'],
  },
  {
    name: 'Python for Data Analysis and Machine Learning',
    authority: 'Udemy',
    period: '2025',
    description: ['Completed Udemy certification covering Python programming, Pandas, NumPy, data visualization, and machine learning applications.'],
  },
  {
    name: 'Python Bootcamp: From Zero to Hero',
    authority: 'Udemy',
    period: '2024',
    description: ['Gained hands-on experience in Python programming, data analysis, and automation using libraries such as NumPy and Pandas.', 'Built strong programming skills required for data analysis, machine learning, and backend development.'],
  },
  {
    name: 'Introduction to Generative AI',
    authority: 'Google Cloud (or equivalent)',
    period: '2024',
    description: ['Learned core concepts of Generative AI, including large language models and real-world AI applications.', 'Understood how AI models can be applied for automation, data analysis, and intelligent systems.'],
  },
  {
    name: 'Introduction to HTML',
    authority: 'Udemy',
    period: '2024',
    description: ['Learned the fundamentals of web development and webpage structure using HTML.', 'Developed the ability to create and design basic web pages and user interfaces.'],
  },
  {
    name: 'UI/UX for Beginners',
    authority: 'Great Learning (or equivalent)',
    period: '2024',
    description: ['Learned principles of user interface design and user experience optimization.', 'Developed understanding of creating user-friendly and visually appealing applications.'],
  },
  {
    name: 'Introduction to Flutter',
    authority: 'Simplilearn (or equivalent)',
    period: '2024',
    description: ['Learned fundamentals of mobile app development using Flutter framework.', 'Developed basic applications with modern UI design and functionality.'],
  }
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise across data science and analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 border border-border/20 transition-all duration-300"
            >
              <h3 className="font-display font-bold text-lg mb-2 text-primary">
                {cert.name}
              </h3>

              <p className="text-sm font-semibold mb-3 text-muted-foreground">
                {cert.authority} • {cert.period}
              </p>

              <ul className="space-y-2 mb-4">
                {cert.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
