import { motion } from "framer-motion";
import { Code2, Layers, Zap, Monitor } from "lucide-react";

const highlights = [
  { icon: Code2, label: "4+ Years Experience" },
  { icon: Layers, label: "Angular Specialist" },
  { icon: Zap, label: "Performance Focused" },
  { icon: Monitor, label: "Modern Architecture" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-8" />

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a frontend engineer with over four years of experience building 
                modern web applications and scalable UI systems. My expertise lies in 
                the Angular ecosystem, TypeScript, and modern frontend architecture 
                patterns.
              </p>
              <p>
                I specialize in component-driven development, reactive programming 
                with RxJS, and test-driven development with Jest. I have significant 
                experience modernizing legacy frontend systems, improving maintainability, 
                and optimizing performance across large codebases.
              </p>
              <p>
                My approach emphasizes clean architecture, maintainable code, and 
                delivering high-quality user experiences that scale.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-5 rounded-xl bg-card border border-border card-hover flex flex-col items-center text-center gap-3"
                >
                  <item.icon size={24} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
