import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    institute: 'PES Institute (Kuvempu University)',
    location: 'Bengaluru, Karnataka',
    status: 'Graduated 2025',
    description: 'CGPA 8.96',
  },
];

const certifications = [
  {
    name: 'Fullstack Web Development',
    platform: 'Tap Academy',
    date: '2025',
    skills: 'Mastered Core Java, Advanced Java (JDBC, J2EE, Servlets), Spring, Hibernate, MySQL, and Frontend Development.',
    verification: null,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative bg-secondary/20">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 hover-glow"
              >
                <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                <p className="text-primary font-medium mb-3">{edu.institute}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold gradient-text">{edu.description}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 hover-glow"
              >
                <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                <p className="text-primary font-medium mb-3">{cert.platform}</p>
                
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.skills}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
