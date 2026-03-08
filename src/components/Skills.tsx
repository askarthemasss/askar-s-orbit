import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Angular 20", icon: "🅰️" },
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "⚡" },
      { name: "HTML5", icon: "🌐" },
      { name: "SCSS", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
    ],
  },
  {
    category: "Framework Concepts",
    skills: [
      { name: "Component Architecture", icon: "🧩" },
      { name: "RxJS", icon: "🔄" },
      { name: "State Management", icon: "📦" },
      { name: "REST API Integration", icon: "🔗" },
    ],
  },
  {
    category: "Testing",
    skills: [{ name: "Jest", icon: "🧪" }],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", icon: "📂" },
      { name: "GitHub", icon: "🐙" },
      { name: "Angular CLI", icon: "⚙️" },
      { name: "Debugging Tools", icon: "🔍" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-space-surface/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-10" />

          <div className="space-y-10">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border transition-all duration-200 hover:border-primary/30 cursor-default"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
