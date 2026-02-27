import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights through EDA, statistical modeling, and visualization.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building predictive models and extracting features to identify trends and patterns.',
  },
  {
    icon: Code2,
    title: 'Dashboard Development',
    description: 'Developing interactive Power BI and Excel dashboards to generate actionable business insights.',
  },
  {
    icon: Trophy,
    title: 'Data Modeling',
    description: 'Defining relational database schemas, ensuring normalization and data integrity.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafting data-driven solutions & intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Aspiring Data Analyst with strong skills in <span className="text-foreground font-medium">SQL, Power BI, Excel, and Python</span>. I am currently working as a Data Practice Intern at MethodHub Software Limited, where I contribute to the data modeling and database design of the ARROWS Applicant Tracking System.
              </p>
              <p>
                My experience spans building interactive dashboards, performing comprehensive data analysis, and developing machine learning models to generate actionable business insights. I am passionate about understanding business requirements and translating them into reliable and scalable <span className="text-primary font-medium">data-driven solutions</span>. I aim to continuously learn and apply my skills to solve complex problems and support data-driven decision-making.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
