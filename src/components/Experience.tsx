import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    title: 'Data Practice Intern',
    company: 'MethodHub Software Limited',
    image: '',
    period: 'Nov 2025 - Present',
    location: '',
    description: 'Worked on designing and developing the data model for the ARROWS Applicant Tracking System by identifying core entities such as Candidate, Job, Client, and Recruitment Stages.',
    achievements: [
      'Defined relational database schema including primary and foreign key relationships, ensuring normalization and data integrity.',
      'Analyzed recruitment workflows and translated business requirements into scalable database structures.',
    ],
    technologies: [
      'Data Modeling',
      'Database Design',
      'Entity-Relationship',
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Infotact Solutions',
    image: '',
    period: 'Oct 2025 - Dec 2025',
    location: '',
    description: 'Performed data cleaning, preprocessing, and analysis using SQL, Excel, and Python.',
    achievements: [
      'Developed interactive Power BI dashboards to track key performance indicators and visualize business insights.',
      'Automated reporting processes and supported data-driven decision-making.',
    ],
    technologies: [
      'SQL',
      'Excel',
      'Python',
      'Power BI',
      'Data Visualization'
    ],
  },
  {
    title: 'Data Analytics Intern',
    company: 'TATA Group',
    image: '',
    period: 'Dec 2024',
    location: '',
    description: 'Built a logistic regression machine learning model to predict business risk and improve decision accuracy.',
    achievements: [
      'Performed preprocessing, feature selection, and model evaluation.',
      'Developed dashboards to visualize insights.',
    ],
    technologies: [
      'Machine Learning',
      'Logistic Regression',
      'Dashboards',
      'Data Analysis'
    ],
  },
  {
    title: 'Intern',
    company: 'MedTrust Healthcare',
    image: '',
    period: 'Dec 2023',
    location: '',
    description: 'Assisted in analyzing healthcare experimental data to support clinical and operational improvements. Maintained accurate data records and ensured compliance with healthcare data standards.',
    achievements: [
      'Improved data accuracy and reliability.',
      'Supported healthcare process optimization.',
    ],
    technologies: [
      'Excel',
      'Data Analysis',
      'Healthcare Data Systems'
    ],
  },
  {
    title: 'Intern',
    company: 'Trios Technologies',
    image: '',
    period: 'June 2023',
    location: '',
    description: 'Designed and supported development of user interfaces for IoT-based applications and devices. Assisted in testing and improving functionality of software and hardware systems.',
    achievements: [
      'Improved usability of IoT applications.',
      'Gained hands-on experience in real-world system development.',
    ],
    technologies: [
      'IoT Systems',
      'UI Design',
      'Embedded Systems'
    ],
  },
  {
    title: 'Intern',
    company: 'National Small Industries Corporation (NSIC)',
    image: '',
    period: 'Jan 2023',
    location: '',
    description: 'Worked with development teams to design and test embedded software and systems. Participated in debugging and improving system performance.',
    achievements: [
      'Contributed to system testing and development.',
      'Strengthened practical software debugging skills.',
    ],
    technologies: [
      'Embedded Systems',
      'Programming',
      'Debugging Tools'
    ],
  },
  {
    title: 'Intern',
    company: 'IIT Madras Research Park',
    image: '',
    period: 'Aug 2022',
    location: '',
    description: 'Supported implementation of Artificial Intelligence concepts in software applications. Assisted in research and development activities involving machine learning technologies.',
    achievements: [
      'Contributed to AI-based project development.',
      'Gained exposure to industry-level AI applications.',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'AI Tools'
    ],
  }
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From data analytics to automation and ML-driven insights, here’s my experience delivering business value with scalable solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[34px] md:left-[46px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full shadow-[0_0_12px_rgba(var(--primary-rgb),0.25)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);

              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 md:pl-28"
                >
                  <div className="absolute left-[27px] md:left-[39px] top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)] animate-pulse-glow" />

                  {/* Horizontal Connector Line */}
                  <div className="absolute left-[43px] md:left-[55px] top-6 w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full opacity-60" />

                  <motion.div
                    className={`glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 ${isExpanded ? 'border-primary/40 bg-secondary/40' : ''
                      }`}
                    whileHover={{ scale: 1.005 }}
                    layout
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 md:gap-6 mb-6">
                        {/* Logo Container */}
                        <div className="shrink-0">
                          <div className="w-20 h-16 md:w-24 md:h-18 rounded-xl bg-transparent flex items-center justify-center">
                            {exp.image ? (
                              <img
                                src={exp.image}
                                alt={exp.company}
                                className="w-full h-full object-contain p-0"
                              />
                            ) : null}
                          </div>
                        </div>

                        {/* Title & Company */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-base font-semibold text-primary mb-2">
                            {exp.company}
                          </h4>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              📅 {exp.period}
                            </span>
                            {exp.location && (
                              <span className="flex items-center gap-1.5">
                                🌍 {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                      >
                        {isExpanded ? 'Show Less' : 'Key Achievements & Skills'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                            }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 space-y-6 border-t border-border/50 mt-2">
                            {/* Achievements */}
                            <div className="pt-6">
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="text-primary">⚡</span> Key Achievements
                              </h5>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="text-primary">💻</span> Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
