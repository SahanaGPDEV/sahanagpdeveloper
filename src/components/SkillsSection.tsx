import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Server, Database, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Monitor,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Java', 'Python', 'Node.js'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Linux', 'Docker', 'Shell Scripting', 'Networking'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI Tools',
    icon: Sparkles,
    skills: ['ChatGPT', 'GitHub Copilot'],
    color: 'from-primary to-accent',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative bg-secondary/20">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-display">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 text-sm bg-muted/50 rounded-full text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
