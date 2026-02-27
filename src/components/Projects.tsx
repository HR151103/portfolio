import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const categories = [
  '🎯 All Projects',
  '📊 Data Analysis',
  '🧠 ML & Deep Learning',
];

const projects = [
  {
    title: 'Automated Segmentation of Myocardium using Cardiac MRI',
    description: 'Developed an automated system using Convolutional Neural Networks (CNNs) to segment myocardium regions in cardiac MRI images, improving accuracy and efficiency compared to manual analysis. Applied advanced image preprocessing and deep learning techniques to enhance segmentation performance, supporting improved medical diagnosis and analysis.',
    tags: ['Python', 'CNN', 'Deep Learning', 'Image Processing'],
    categories: ['🧠 ML & Deep Learning'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '/project-cardiac-mri.jpg',
  },
  {
    title: 'Heart Stroke Prediction System',
    description: 'Developed a machine learning–based system that predicts the probability of stroke using patient health and personal data provided through a web interface or medical device. The system analyzes input data and displays prediction results along with health precautions and recommendations for medical consultation.',
    tags: ['Python', 'Machine Learning', 'Logistic Regression', 'Pandas', 'NumPy', 'FastAPI', 'HTML', 'CSS'],
    categories: ['🧠 ML & Deep Learning'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '/project-heart-stroke.jpg',
  },
  {
    title: 'YouTube Transcript Q&A Chatbot',
    description: 'Developed an AI-powered chatbot that allows users to input a YouTube video URL and ask questions based on the video content. The system extracts video transcripts and uses a Large Language Model (LLM) to generate accurate, context-based answers.',
    tags: ['Python', 'FastAPI', 'Large Language Models (LLM)', 'NLP', 'YouTube Transcript API'],
    categories: ['🧠 ML & Deep Learning', '🤖 AI'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '/project-youtube-qa.jpg',
  },
  {
    title: 'Quantitative Analysis of Sweat Gland Activity',
    description: 'Developed a system using image processing and machine learning techniques. Applied feature extraction and classification algorithms to identify dermatological disorder severity and achieved high accuracy.',
    tags: ['Python', 'MATLAB', 'Machine Learning', 'Image Processing'],
    categories: ['🧠 ML & Deep Learning'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '/project-sweat-gland.jpg',
  },
  {
    title: 'ICU Mortality Prediction using Machine Learning',
    description: 'Built predictive models using Logistic Regression and Random Forest. Performed preprocessing and evaluation to improve performance and support healthcare decision-making.',
    tags: ['Python', 'Logistic Regression', 'Random Forest', 'Machine Learning'],
    categories: ['🧠 ML & Deep Learning'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '/project-quantitative.jpg',
  },
  {
    title: 'Spotify Data Analysis',
    description: 'Performed data cleaning and preprocessing on Spotify dataset using Python and SQL. Conducted exploratory data analysis to identify trends and developed interactive Power BI dashboards to visualize insights.',
    tags: ['Python', 'SQL', 'Power BI', 'Data Analysis'],
    categories: ['📊 Data Analysis'],
    github: 'https://github.com/HR151103',
    live: '',
    image: '/project-spotify.png',
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('🎯 All Projects');

  const filteredProjects = projects.filter(project =>
    activeCategory === '🎯 All Projects' || project.categories.includes(activeCategory)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in data analytics, machine learning, and AI automation
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); // Reset show all when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group min-h-[500px]"
              style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.16)' }}
            >
              <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6 pb-7">
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-normal line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight size={18} className={`transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
