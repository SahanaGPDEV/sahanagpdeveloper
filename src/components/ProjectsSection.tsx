import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Clock, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Asha AI — Intelligent Program Advisor',
    status: 'Completed',
    category: 'Web App',
    description: 'An empathetic AI counseling partner designed for the Iron Lady program. Features specialized multi-lingual support, Groq-powered analysis, and voice-to-text integration using Whisper-large-v3 to provide users with a personalized mentoring roadmap.',
    techStack: ['Python', 'Streamlit', 'Groq AI', 'Whisper API', 'Tailwind CSS'],
    liveDemo: 'https://ironlady-lead-engine-9dzmeeryvgmu6qya835fky.streamlit.app/',
    github: 'https://github.com/SahanaGPDEV/ironlady-lead-engine',
  },
  {
    title: 'Project Ironclad — AI CRM Lead Dashboard',
    status: 'Completed',
    category: 'Web App',
    description: 'A premium internal command center for lead management. Integrates real-time conversion analytics, automated A/B testing feedback loops, and an AI co-pilot that generates personalized WhatsApp follow-ups to maximize conversion rates.',
    techStack: ['Python', 'Streamlit', 'Groq AI', 'CRM Analytics', 'Tailwind CSS'],
    liveDemo: 'https://ironlady-crm.streamlit.app/',
    github: 'https://github.com/SahanaGPDEV/ironlady-lead-engine',
  },
  {
    title: 'TaskFlow — Smart Task & Productivity Manager',
    status: 'In progress',
    category: 'Web App',
    description: 'TaskFlow is a clean and responsive task management web application designed to help users organize daily work efficiently. The application allows users to create, update, delete, and prioritize tasks with a simple and intuitive interface. Tasks are stored using browser local storage, ensuring data persistence without requiring a backend. The project focuses on strong JavaScript fundamentals, DOM manipulation, clean UI design, and real-world problem solving.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    liveDemo: null,
    github: null,
  },
];

const categories = ['All', 'Web App'];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my work and the problems I've solved
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`${activeFilter === category
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                  : 'border-border hover:border-primary hover:text-primary'
                  } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-glow group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 text-xs rounded-full flex items-center gap-1 ${project.status === 'In progress'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-green-500/20 text-green-400'
                    }`}>
                    <Clock className="w-3 h-3" />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold font-display mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <span className="text-xs text-primary mb-3">{project.category}</span>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-muted/50 rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border mt-auto">
                {project.liveDemo && (
                  <Button asChild size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-bold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild variant="outline" size="sm" className="border-border hover:border-primary hover:text-primary transition-colors hover:bg-transparent">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                )}

                {!project.github && !project.liveDemo && (
                  <span className="text-sm text-muted-foreground italic">Coming soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
