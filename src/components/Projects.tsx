import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "RoleMentor AI",
    description:
      "A platform that helps users explore professional career paths and understand various roles through intelligent guidance. Users can learn about career options, required skills, and potential growth paths.",
    tech: ["Angular", "TypeScript", "AI Integration", "RxJS"],
    link: "https://rolementor.lovable.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-space-surface/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-10" />

          <div className="grid gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-6 md:p-8 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
