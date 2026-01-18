import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Briefcase, GraduationCap, Target } from 'lucide-react';

const stats = [
  { icon: Code, label: 'Projects Built', value: '5+' },
  { icon: Briefcase, label: 'Years Experience', value: 'Fresher' },
  { icon: GraduationCap, label: 'CGPA', value: '8.96' },
  { icon: Target, label: 'Focus', value: 'Full Stack' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate Full Stack Developer who learns by building and grows by improving every single day
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 hover-glow">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm Sahana, a Full Stack Developer with a strong foundation in programming, problem-solving, and system-level concepts. I come from a background where I learned to be independent, resilient, and disciplined — qualities that shaped the way I approach technology and growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Throughout my academic journey, I focused on strengthening my fundamentals in development, networking, Linux, and DevOps tools. I may not have formal job experience yet, but I have built practical projects, learned real-world tools, and practiced consistently to improve my skills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to become a highly skilled engineer, work on impactful products, and secure a high-paying role where I can keep learning, contributing, and growing.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 text-center hover-glow group"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold font-display gradient-text mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
